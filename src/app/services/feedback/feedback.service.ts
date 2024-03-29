import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Feedback} from "../../data/feedback";

const BASE_URL = 'https://volunteer-80c3f.appspot.com/dashboard/Test%20Hotel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getFeedbacks() {
    return this.httpClient.get<Feedback[]>(BASE_URL+ "feedbacks")
  }
}
