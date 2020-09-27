import { Component, OnInit } from '@angular/core';
import {Feedback} from "../../../data/feedback";
import {FeedbackService} from "../../../services/feedback/feedback.service";

export interface PeriodicElement {
  name: string;
  rate: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {rate: 5, name: 'Fares Soltani', description: 'Amazing place' },
  {rate: 5, name: 'Med Ali Jardak', description: 'Amazing place'},
  {rate: 4, name: 'Amal Jebali', description: 'Nice place'},
  {rate: 4, name: 'Ryma Jemaiel', description: 'Nice place'},
  {rate: 4, name: 'Manel Ben Hadj Slama', description: 'Nice place'},
  {rate: 1, name: 'Maxim Bady', description: 'Very Bad place'},
  {rate: 3, name: 'John Wick', description: 'Medium place'},
  {rate: 3, name: 'Dester Alphonso', description: 'Medium place'},
  {rate: 5, name: 'Tom Romain', description: 'Amazing place'},
  {rate: 2, name: 'Neon Epsilon', description: 'Bad place'},
];


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  feedbacks : Feedback[];

  dataSource;

  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
    this.feedbackService.getFeedbacks().subscribe(
      result => {
        this.feedbacks = result;
      }
    )
  }

}
