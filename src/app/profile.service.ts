import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {

  private username:string;
  private clientid :'2d5fb1ce85b343a0f0d7'
  private clientsecret:'5a137f13bc314fcbb89d5661430283ffe299305e'

  constructor(private http:Http) { 

  }

}
