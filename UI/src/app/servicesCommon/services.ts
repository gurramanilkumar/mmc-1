import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import { IContactsModel } from '../model/contactsModel.js';
import { DataService } from './dataService';
import { Router } from '@angular/router';

@Injectable()
export class CommonService implements OnInit {
   

  ngOnInit(): void {
  }

  constructor(private _http: HttpClient, private router: Router,private dataService: DataService) {
  }

  storeContactInformation(contactModel:IContactsModel)
  {
    console.log(contactModel)
    // if(!contactModel.userName){contactModel.userName = '';}
    // if(!contactModel.userEmail){contactModel.userEmail = '';}
    // if(!contactModel.subject){contactModel.subject = '';}
    // if(!contactModel.content){contactModel.content = '';}
    
    
    // return this.dataService.post('http://www.a3web.in/assets/ajax/contactus.php', contactModel);
    return this._http.post('http://a3web.in:3000/default' ,contactModel)
  
}
}