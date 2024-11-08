import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RateCheckService } from 'src/app/shared/service/rate-check.service';
import { MessageService } from 'primeng/api';
import * as XLSX from 'xlsx';
import { SalesService } from 'src/app/shared/service/sales.service';

interface UploadRateCheckEvent {
  originalEvent: Event;
  files: File[];
}
interface UploadSalesEvent {
  originalEvent: Event;
  files: File[];
}

export interface SalesFromFileDTO {
  finalCost: string;
  finalSales: string;
  finalProfitEuro: string;
  finalProfitPercent: string;
  roomNights: string;
  paxes: string;
  reservationsCount: string;
  date: string;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  salesFromFileDTO: SalesFromFileDTO[];

  data: any;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  salesFromFile: any;
  salesFromFileNew: any;

  dialogVisible: boolean = false;//for sale


  submittedRateCheck: boolean = false;
  submittedSales: boolean = false;

  rateCheckUploadDialog: boolean = false;
  salesUploadDialog: boolean = false;

  uploadedRateCheckFile: File;
  uploadedSalesFile: File;

  rateCheckLastUpdatedDate = "";
  salesLastUpdatedDate = "";

  /**
   *
   */
  constructor(private rateCheckService: RateCheckService, private spinner: NgxSpinnerService, private messageService: MessageService, private saleService: SalesService) {


  }

  ngOnInit() {


    this.rateCheckService.getRateCheckLastUpdatedDate().then(data => this.rateCheckLastUpdatedDate = data);
    this.saleService.getLastRecord().then(data => this.salesLastUpdatedDate = data);
  }


  openUploadRateCheckFileDialog() {

    this.submittedRateCheck = false;
    this.rateCheckUploadDialog = true;
  }
  hideRateCheckDialog() {
    this.rateCheckUploadDialog = false;
    this.submittedRateCheck = false;
  }



  onUploadRateCheckFile(event: UploadRateCheckEvent) {
    this.hideRateCheckDialog();

    this.spinner.show();
    console.log(event.files);
    this.uploadedRateCheckFile = event.files[0];


    const formData: FormData = new FormData();
    formData.append('myFile', event.files[0]);
    formData.append('description', "file description");
    this.rateCheckService.uploadRateCheckFile(formData).subscribe(() => {
      this.spinner.hide()
      this.messageService.add({ severity: 'success', summary: 'Rate-Check Raporu Basarili Bir Sekilde Yuklendi !!', });
    })
  }



  onUploadSalesFile(event: UploadSalesEvent) {
    this.uploadedSalesFile = event.files[0];
    //console.log(this.uploadedSalesFile);

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {
        type: 'binary',
        raw: true,

        dateNF: 'yyyy-MM-dd',
      });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];


      this.salesFromFile = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        raw: false,
        blankrows: false,
        defval: '',
      });

      //this.salesFromFileNew=this.salesFromFile;
      this.salesFromFile.shift()
      let myArray = [];
      for (let i = 0; i < this.salesFromFile.length; i++) {



        myArray.push({
          finalCost: this.salesFromFile[i][0],
          finalSales: this.salesFromFile[i][1],
          finalProfitEuro: this.salesFromFile[i][2],
          finalProfitPercent: this.salesFromFile[i][3],
          roomNights: this.salesFromFile[i][4],
          paxes: this.salesFromFile[i][5],
          reservationsCount: this.salesFromFile[i][6],
          date: this.salesFromFile[i][7],
          
        })




      }
      this.salesFromFileDTO = myArray;
      console.log(this.salesFromFileDTO);




    };


    reader.readAsBinaryString(this.uploadedSalesFile);


    // const formData: FormData = new FormData();
    // formData.append('myFile', event.files[0]);
    // formData.append('description', "file description");
    // this.rateCheckService.uploadRateCheckFile(formData).subscribe(() => {
    //   this.spinner.hide()
    //   this.messageService.add({ severity: 'success', summary: 'Yukleme islemi basarili !', });
    // })
  }

  showSaleDialog() {
    this.dialogVisible = true;
  }

  confirmUploadSaleReport() {
    
    let mydata=[];
    
   let jdata= JSON.stringify(this.salesFromFileDTO).replaceAll("€","");
   mydata=JSON.parse(jdata);
    this.spinner.show();
    console.log("mydata");
    console.log(mydata);
    
    console.log("mydata");
    
    this.saleService.uploadSaleDataFromFile(mydata).subscribe(() => {
    this.spinner.hide()
    this.messageService.add({ severity: 'success', summary: 'Sales Raporu Basarili Bir Sekilde Yuklendi !!', });
  })
  }


}



