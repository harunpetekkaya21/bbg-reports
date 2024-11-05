import { Component, OnInit } from '@angular/core';
import { RateCheckService } from 'src/app/shared/service/rate-check.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  submitted: boolean = false;
  rateCheckUploadDialog: boolean = false;
  uploadedFile:File;
  fileDescription="";
  rateCheckLastUpdatedDate="";

  /**
   *
   */
  constructor(private rateCheckService:RateCheckService) {
   
    
  }

  ngOnInit() {

    
    this.rateCheckService.getRateCheckLastUpdatedDate().then(data => this.rateCheckLastUpdatedDate = data);
  }


  openUploadFileDialog(){
  
    this.submitted = false;
    this.rateCheckUploadDialog = true;
  }
  hideDialog(){
    this.rateCheckUploadDialog = false;
    this.submitted = false;
  }

  onUpload(event: UploadEvent) {
    console.log(event.files);
    this.uploadedFile=event.files[0];
  

    const formData: FormData = new FormData();
    formData.append('myFile', event.files[0]);
    formData.append('description', this.fileDescription);
    this.rateCheckService.uploadRateCheckFile(formData).subscribe(()=>alert("File Uploaded"))
}


uploadFromDialogButton(){

}
}
