import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ReservationService} from "../../../services/reservation/reservation.service";
import {Room} from "../../../data/room";
import {ContactDot} from "../../../data/contact-dot";
import {Group} from "../../../data/group";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  rooms : Room[];
  savedRooms: Room[] = [];
  filteredRooms : Room[];
  selectedRoom = 0;
  people: ContactDot[];
  roommates: ContactDot[];
  selectedPeople : ContactDot[];
  altered = true;
  g = new class implements Group {
    reservationCodes : string[];
  };
  sizes = [1,2,3,4];
  gsize = 0;
  rsize = 0;

  emptyPerson : ContactDot = {
    fullName : "",
    reservationCode: ""
  };


  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.reset();
  }

  alter() {
    this.altered = !this.altered;
    this.reset();
  }

  initRooms() {
    for(let i=0;i<this.rooms.length;i++)
      if(this.rooms[i].clientNames[0])
        this.savedRooms.push(this.rooms[i]);
  }

  initialize() {
    this.selectedPeople = [];
    for(let i=0;i<this.gsize;i++)
      this.selectedPeople.push(this.emptyPerson)
  }

  save() {
    let codes : string[] = [];
    for(let p of this.selectedPeople) {
      codes.push(p.reservationCode);
    }
    this.g = new class implements Group {
      reservationCodes = codes;
    };
    console.log(this.g);
    this.reservationService.setGroup(this.g).subscribe();
    this.reset();
    this.alter();
  }

  filterRooms() {
    this.filteredRooms = [];
    for(let room of this.rooms)
      if(room.size == this.rsize && !room.clientNames[0])
        this.filteredRooms.push(room);
    this.reservationService.getRoommates().subscribe(
      result => this.roommates = result
    );
    this.selectedPeople = [];
    for(let i=0;i<this.rsize;i++)
      this.selectedPeople.push(this.emptyPerson)
  }

  saveRoom() {
    let codes : string[] = [];
    for(let p of this.selectedPeople) {
      codes.push(p.reservationCode);
    }
    this.g = new class implements Group {
      reservationCodes = codes;
    };
    console.log(this.g);
    this.reservationService.setRoom(this.g,this.selectedRoom).subscribe();
    this.reset();
  }

  reset() {
    this.reservationService.getRooms().subscribe(
      result => {
        this.rooms = result;
      }
    );
    this.reservationService.getPeople().subscribe(
      result => {
        this.people = result;
      }
    );
    this.reservationService.getRoommates().subscribe(
      result => {
        this.roommates = result;
      }
    );
    this.selectedPeople = [];
    this.rsize = 0;
    this.gsize = 0;
    this.filteredRooms = [];
    this.selectedRoom = 0;
  }
}
