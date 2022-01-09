import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LearningsService {
  baseUrl = environment.baseUrl;

  constructor(private api: ApiService) { }

  getLearnings(data) {
    return this.api.getGeneral(data, this.baseUrl + '/api/learnings');
  }
  createLearnings(data) {
    return this.api.postGeneral(data, this.baseUrl + '/api/learnings');
  }
  deleteLearning(id) {
    return this.api.deleteGeneralById(id, this.baseUrl + '/api/learnings');
  }
  changeStatus(id, data) {
    return this.api.patchGeneralById(id, data, this.baseUrl + '/api/learnings');
  }
  assignUserToLearnings(id, data) {
    return this.api.postGeneral(data, this.baseUrl + '/api/learnings/' + id + '/users');
  }
}
