import { Component, OnInit } from '@angular/core';
import {NbSearchService} from "@nebular/theme";
import {ClientsService} from "../../../services/clients/clients.service";
import {ClientCard} from "../../../data/client-card";

const emptyUser : ClientCard = {
  email: "",
  firstName: "",
  lastName: "",
  imgUrl: "https://img2.pngio.com/download-free-png-account-avatar-head-human-male-man-people-avatar-person-png-512_512.png",
  cin: "",
  passport: "",
  birthDate: "",
  country: "",
  exitDate: "",
  arrivalDate: "",
  adult: false,
  primordials : [],
  essentials : [],
  others : [],
  reviews: [],
  purchases: []
};

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  users: ClientCard[];
  user : ClientCard;

  data = [];

  disabled = true;

  constructor(private searchService: NbSearchService, private clientsService : ClientsService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.users = this.users.filter(user => (user.firstName + " " + user.lastName).includes(data.term));
        console.log(this.users)
      })
    this.user = emptyUser;
    console.log(this.user)
  }

  ngOnInit(): void {
    this.getUsers();
    this.user = emptyUser;
  }

  enable() {
    this.disabled = ! this.disabled;
  }

  getUsers() {
    this.clientsService.getClients().subscribe(result => {this.users = result;});
  }

  selectUser(user) {
    this.user = user;
    this.user.arrivalDate = new Date(this.user.arrivalDate).toDateString().substr(4);
    this.user.arrivalDate = this.user.arrivalDate.substr(0,this.user.arrivalDate.length - 5) + "," + this.user.arrivalDate.substr(this.user.arrivalDate.length - 5,5);
    this.user.exitDate = new Date(this.user.exitDate).toDateString().substr(4);
    this.user.exitDate = this.user.exitDate.substr(0,this.user.exitDate.length - 5) + "," + this.user.exitDate.substr(this.user.exitDate.length - 5,5);
  }

  reset() {
    this.user = emptyUser;
  }

  save(user) {
    let newUser = true;
    for(let user1 of this.users)
      if(user1.email === user.email) {
        newUser = false;
        break;
      }
    if(newUser) {
      user.imgUrl="";
      user.arrivalDate = new Date(user.arrivalDate);
      user.exitDate = new Date(user.exitDate);
      this.clientsService.createReservation(user).subscribe(
        result => {
          this.reset();
          this.resetSearch();
        }
      );
    }
    else {
      user.arrivalDate = new Date(user.arrivalDate);
      user.exitDate = new Date(user.exitDate);
      this.clientsService.createReservation(user).subscribe(
        result => {
          this.reset();
          this.resetSearch();
        }
      );
    }
    this.reset();
  }

  resetSearch() {
    this.getUsers();
  }
}
