import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ClientCard} from "../../data/client-card";
import {ContactDot} from "../../data/contact-dot";
import {Room} from "../../data/room";

const BASE_URL = 'http://localhost:8080/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.httpClient.get<ContactDot[]>(BASE_URL + "group");
  }

  setGroup(group) {
    return this.httpClient.post(BASE_URL + "group",group);
  }

  getRoommates() {
    return this.httpClient.get<ContactDot[]>(BASE_URL + "roommates");
  }

  setRoom(group, room) {
    return this.httpClient.post(BASE_URL + "group/"+ room, group)
  }

  getRooms() {
    return this.httpClient.get<Room[]>(BASE_URL + "group/rooms")
  }

}
