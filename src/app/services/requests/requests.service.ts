import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Request} from "../../data/request";

const BASE_URL = 'https://volunteer-80c3f.appspot.com/dashboard/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient) { }

  getRequests(deptId) {
    return this.httpClient.get<Request[]>(BASE_URL + deptId+"/requests");
  }

  changeStatus(request) {
    return this.httpClient.patch(BASE_URL + "requests", request)
  }

}
