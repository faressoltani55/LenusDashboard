import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic, init } from 'echarts';
import {DashboardService} from "../../../services/dashboard/dashboard.service";
import {Occupation} from "../../../data/occupation";


@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit {
   dom;
   myChart;
   app = {};
   category = [];
   barData = [];
   options : EChartOption;
   data : Occupation[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getOccupation().subscribe(
      value => {
        this.data = value;
        this.dom = document.getElementById("occupation");
        this.myChart = init(this.dom);
        let list = ["Reception", "Bar", "Gym", "Restaurant", "Pool", "Spa"];
        for (var i = 0; i < 6; i++) {
          this.category.push(list[i]);
          //var b = Math.random() * 100;
          this.barData.push(this.data[i].occupation);
        }
        this.options = {
          backgroundColor: '#FFFF',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['zones', 'occupation rates'],
            textStyle: {
              color: '#ccc'
            }
          },
          xAxis: {
            data: this.category,
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          yAxis: {
            splitLine: {show: false},
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          series: [{
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 5,
              // @ts-ignore
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#1E4DFF'},
                  {offset: 1, color: '#A3DAF9'}
                ]
              )
            },
            data: this.barData
          }]
        };
      }
    );
  }

}
