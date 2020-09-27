import { Component, OnInit } from '@angular/core';
import {NbCalendarRange, NbDateService} from "@nebular/theme";
import {DashboardService} from "../../../services/dashboard/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  range: NbCalendarRange<Date>;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 29),
      end: this.dateService.addDay(this.monthEnd, 8),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  ngOnInit(): void {
  }

}
