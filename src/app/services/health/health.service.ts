import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TemperatureCard} from "../../data/temperature-card";
import {Contacted} from "../../data/contacted";

const BASE_URL = 'http://localhost:8080/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private httpClient: HttpClient) { }

  getTemperatureAlerts() {
    return this.httpClient.get<TemperatureCard[]>(BASE_URL + "temperatures")
  }

  getContactCircle(resCode) {
    return this.httpClient.get<Contacted[]>(BASE_URL + "contacts/" + resCode)
  }

}
