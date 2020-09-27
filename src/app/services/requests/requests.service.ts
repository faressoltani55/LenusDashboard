import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Request} from "../../data/request";

const BASE_URL = 'http://localhost:8080/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient) { }

  getRequests() {
    return this.httpClient.get<Request[]>(BASE_URL + "requests");
  }

  changeStatus(request) {
    return this.httpClient.patch(BASE_URL + "requests", request)
  }
}
