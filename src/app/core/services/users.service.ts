import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;
  
  constructor(private api: ApiService) { }

 getUsers(data: any){
    return this.api.getGeneral(data, this.baseUrl + '/api/users');
  }
  createUsers(data) {
    return this.api.postGeneral(data, this.baseUrl + '/api/users');
  }
  deleteUser(id) {
    return this.api.deleteGeneralById(id, this.baseUrl + '/api/users');
  }
}
