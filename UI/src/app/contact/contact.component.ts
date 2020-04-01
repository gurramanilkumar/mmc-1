import { Component, OnInit, ViewChild } from '@angular/core';
import { IContactsModel } from 'src/app/model/contactsModel';
import { CommonService } from 'src/app/servicesCommon/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel: IContactsModel;
  successMessage: string;
  controlClass: string;
  dangerAlert:boolean;
  succesAlert:boolean;
  userName:string;
  userEmail:string;
  subject:string;
  Message:string;
  duration:string
  phoneNo:number
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.successMessage = '';
    this.dangerAlert=false
    this.succesAlert=false
    this.reset()
  }

  logForm(a){
    console.log(a)
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(a.userName =="" ||a.userEmail=="" || a.subject=="" || a.content=="" || a.duration=="" )
    {
     this.succesAlert=false
     this.dangerAlert=true
      this.successMessage = 'Required field can not be blank.';
    } else{
      if (reg.test(a.userEmail) == false) {
        this.dangerAlert=true
        this.successMessage = 'Enter Valied Email';
      }else{
       this.dangerAlert=false
       this.commonService.storeContactInformation(a).subscribe(response => {
        console.log(response);
        if(response){
          this.succesAlert=true;
          this.successMessage = 'Thank you for submitting you query. Our representative will contact you shortly.';
          this.reset()
        }else{
          this.dangerAlert=true
          this.successMessage = 'Submation Failed due to server issue try after some time.';
        }
      });
    }
    }
  }
  reset(){
    this.userName="";
    this.userEmail="";
    this.subject="";
    this.Message="";
    this.duration="";
    this.phoneNo=undefined;
  }
    
}


