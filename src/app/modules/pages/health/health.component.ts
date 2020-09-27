import { Component, OnInit } from '@angular/core';
import {TemperatureCard} from "../../../data/temperature-card";
import {Contacted} from "../../../data/contacted";
import {HealthService} from "../../../services/health/health.service";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  tmpCards : TemperatureCard[];
  contacted : Contacted[];
  resCode;


  constructor(private healthService : HealthService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.healthService.getTemperatureAlerts().subscribe(
      result => this.tmpCards = result
    )
  }

  searchContacts(resCode) {
    this.healthService.getContactCircle(resCode).subscribe(
      result => this.contacted = result
    )
  }

}
