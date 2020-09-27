import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/dashboard',
      home: true
    },
    {
      title: 'Clients',
      icon: 'people-outline',
      link: '/dashboard/clients'
    },
    {
      title: 'Health',
      icon: 'plus-square-outline',
      link: '/dashboard/health'
    },
    {
      title: 'Reservation',
      icon: 'calendar-outline',
      link: '/dashboard/reservations'
    },
    {
      title: 'Requests',
      icon: 'email-outline',
      link: '/dashboard/requests'
    },
    {
      title: 'Feedback',
      icon: 'bar-chart-outline',
      link: '/dashboard/feedbacks'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
