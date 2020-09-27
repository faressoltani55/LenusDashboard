import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../../../services/requests/requests.service";
import {Request} from "../../../data/request";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests = [
    {
      name: "John Wick",
      room: 145,
      description: "The TV doesn't work in my room, can I have someone to fix it please ?",
      status: "Pending"
    },
    {
      name: "Maxim Bady",
      room: 255,
      description: "Hiiii, I'd like a new blanket, the one you gave me is very small and the weather is getting colder today",
      status: "Pending"
    },
    {
      name: "Ryma Jemaiel",
      room: 214,
      description: "Can I put my personal touch of design on the room?",
      status: "Processing"
    },
    {
      name: "Fares Soltani",
      room: 777,
      description: "Please stop sending me housekeepers I'd like to sleep !",
      status: "Treated"
    }
  ];

  r: Request[];

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.requestsService.getRequests().subscribe(
      result => this.r = result
    )
  }

  changeStatus(request) {
    this.requestsService.changeStatus(request).subscribe();
  }

}
