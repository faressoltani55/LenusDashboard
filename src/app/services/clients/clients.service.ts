import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Occupation} from "../../data/occupation";
import {ClientCard} from "../../data/client-card";


const BASE_URL = 'https://volunteer-80c3f.appspot.com/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  getClients() {
    return this.httpClient.get<ClientCard[]>(BASE_URL + "clients");
  }

  createReservation(clientCard) {
    return this.httpClient.post(BASE_URL + "clients", clientCard);
  }

  updateReservation(clientCard) {
    return this.httpClient.patch(BASE_URL + "clients", clientCard);
  }
}
