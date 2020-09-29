import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Feedback} from "../../../data/feedback";
import {FeedbackService} from "../../../services/feedback/feedback.service";

@Component({
  selector: 'app-ratings-pi',
  templateUrl: './ratings-pi.component.html',
  styleUrls: ['./ratings-pi.component.scss']
})
export class RatingsPiComponent implements OnInit {
  feedbacks : Feedback[];
  ratings = [0,0,0,0,0];


  option;

  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(
      result => {
        this.feedbacks = result;
        for(let i=0; i<this.feedbacks.length; i++)
          if(this.feedbacks[i].stars == 1)
            this.ratings[0] ++;
          else if(this.feedbacks[i].stars == 2)
            this.ratings[1] ++;
          else if(this.feedbacks[i].stars == 3)
            this.ratings[2] ++;
          else if(this.feedbacks[i].stars == 4)
            this.ratings[3] ++;
          else if(this.feedbacks[i].stars == 5)
            this.ratings[4] ++;
          this.option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#FA5757','#FFC8DE','#FFD42B','#A3DAF9','#1E4DFF'],

            legend: {
              // orient: 'vertical',
              // top: 'middle',
              bottom: 10,
              left: 'center',
              data: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']
            },
            series: [
              {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                  {value: this.ratings[0], name: '1 Star'},
                  {value: this.ratings[1], name: '2 Stars'},
                  {value: this.ratings[2], name: '3 Stars'},
                  {value: this.ratings[3], name: '4 Stars'},
                  {value: this.ratings[4], name: '5 Stars'}
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
      }
    );
    console.log(this.ratings)
  }

}
