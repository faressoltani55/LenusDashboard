import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Occupation} from "../../data/occupation";
import {ContactGraph} from "../../data/contact-graph";

const BASE_URL = 'https://volunteer-80c3f.appspot.com/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }


  getOccupation() {
    return this.httpClient.get<Occupation[]>(BASE_URL + "occupations");
  }

  getContactGraph() {
    return this.httpClient.get<ContactGraph>(BASE_URL + "graph");
  }

  getRequests() {
    return this.httpClient.get<Request[]>(BASE_URL + "requests");
  }

}
