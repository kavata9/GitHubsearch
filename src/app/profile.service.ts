import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
@Injectable()
export class ProfileService {

  private username:string;
  private clientid ='2d5fb1ce85b343a0f0d7'
  private clientsecret ='5a137f13bc314fcbb89d5661430283ffe299305e'

  constructor(private http:Http) { 
console.log("service is now ready");
this.username='kavata9';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/"+ this.username +'?client_id=' + this.clientid + '&client_secret='
    + this.clientsecret)
    .map(res=>res.json());
  }
  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret='
     + this.clientsecret)
   .map(res => res.json());
  }

}
