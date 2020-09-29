import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../../../services/requests/requests.service";
import {Request} from "../../../data/request";

@Component({
  selector: 'app-requests-widget',
  templateUrl: './requests-widget.component.html',
  styleUrls: ['./requests-widget.component.scss']
})
export class RequestsWidgetComponent implements OnInit {
  floors = [
    1,
    2,
    3,
    4
  ];

  r;


  requests : Request[];

  floor: any;

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.requestsService.getRequests(JSON.parse(localStorage.getItem("auth-user")).deptId).subscribe(
      result => {
        this.requests = result;
        this.r = result;
        console.log(this.r);
      }
    )
  }

  reSelect() {
    if(this.floor === 0)
      this.r = this.requests;
    else this.r = this.requests.filter(request => request.floor === this.floor)
  }
}
