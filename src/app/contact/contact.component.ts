import { Component, OnInit } from '@angular/core';
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
  emailId:string;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.contactModel = { userEmail: '', userName: '', content: '', subject: '', };
    this.successMessage = '';
    
  }
  onSubmit() {  
    if(this.contactModel.userName =="" || this.contactModel.userEmail=="" || this.contactModel.subject=="" || this.contactModel.content=="" || this.emailId=="" )
    {
      this.controlClass="alert alert-danger";
      this.successMessage = 'Required field can not be blank.';
      return false;
    } 
    
   
    this.commonService.storeContactInformation(this.contactModel).subscribe(response => {
      console.log(response);
      this.controlClass="alert alert-success";
      this.successMessage = 'Thank you for submitting you query. Our representative will contact you shortly.';
      this.onReset();
    });
  }

  onReset() {
    this.contactModel = { content: '', userName: '', userEmail: '', subject: '' };
  }

  selectChangeHandler (event: any) {
        //update the ui
        console.log(event.target.value) 
        this.emailId=event.target.value
      } 
}


