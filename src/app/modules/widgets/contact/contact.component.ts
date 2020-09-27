import { Component, OnInit } from '@angular/core';
import {EChartOption, init} from "echarts";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DashboardService} from "../../../services/dashboard/dashboard.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dom;
  myChart;
  options : EChartOption;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dom = document.getElementById("contact");
    this.myChart = init(this.dom);
    this.myChart.showLoading();
    this.getJSON().subscribe( json => {
      this.myChart.hideLoading();
      this.myChart.setOption(this.options = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: json.contactDots.map(function (node) {
              return {
                x: Math.random()*1000.0,
                y: Math.random()*1000.0,
                id: node.reservationCode,
                name: node.fullName,
                itemStyle: {
                  color: "#1E4DFF"
                }
              };
            }),
            edges: json.contactLines.map(function (edge) {
              return {
                source: edge.idPerson1,
                target: edge.idPerson2
              };
            }),
            emphasis: {
              label: {
                position: 'right',
                show: true
              }
            },
            roam: true,
            focusNodeAdjacency: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          }
        ]
      }, true);
    });
  }

  public getJSON(): Observable<any> {
    return this.dashboardService.getContactGraph();
  }
}
