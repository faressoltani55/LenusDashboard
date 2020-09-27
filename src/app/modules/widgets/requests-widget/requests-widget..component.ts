import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-widget',
  templateUrl: './requests-widget.component.html',
  styleUrls: ['./requests-widget.component.scss']
})
export class RequestsWidgetComponent implements OnInit {
  floors = [
    1,
    2,
    3,
    4
  ];

  requests = [
    {
      "name" : "John",
      "room" : 154,
      "message": "The TV doesn't work in my room, can I have someone to fix it please ?",
      "picture" : "https://imgsrc.cineserie.com/2020/05/la-sortie-de-john-wick-4-est-repoussee-a-une-date-lointaine.jpg?ver=1"
    },
    {
      "name" : "Maxim",
      "room" : 225,
      "message": "Hiiii, I'd like a new blanket, the one you gave me is very small and the weather is getting colder today",
      "picture" : "https://i1.sndcdn.com/artworks-000118127706-t2jv4g-t500x500.jpg"
    },
    {
      "name" : "Ryma",
      "room" : 214,
      "message": "Can I put my personal touch of design on the room?",
      "picture" : "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/94369505_2956226087799129_8401477044868743168_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=KPADAwEKs0IAX87C5Lc&_nc_ht=scontent.ftun10-1.fna&oh=bc29727e502f417e40b08f53f449faa2&oe=5F7E8A73"
    },
    {
      "name" : "Fares",
      "room" : 777,
      "message": "Please stop sending me housekeepers I'd like to sleep !",
      "picture" : "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/117957892_1034370246983191_6827514464835061072_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=HeabpGMoJNwAX90HLHa&_nc_ht=scontent.ftun10-1.fna&oh=f73b6c3286919fabea920dd01b576f7f&oe=5F7DE0C8"
    },
    {
      "name" : "Manel",
      "room" : 610,
      "message": "Can you send me someone to fix the bathtub, it doesn't work I dunno why !",
      "picture" : "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/79027444_10211578106047009_5091790871662166016_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=M7gqQF_GUJIAX8IOs3Y&_nc_ht=scontent.ftun10-1.fna&oh=711a3da64be96279929777fc32599205&oe=5F7F5857"
    },
    {
      "name" : "Jardak",
      "room" : 88,
      "message": "Can I have my food in the room ? I don't want to get up of the bed today",
      "picture" : "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/79411065_3103341846360734_8509659157861761024_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=EcspsLQnKXkAX-ctJtD&_nc_ht=scontent.ftun10-1.fna&oh=b78a6af9a57298849635a7c00f122837&oe=5F7F0243"
    },
    {
      "name" : "Amal",
      "room" : 102,
      "message": "If you don't send someone to see the leak in the bathtub I'll sue you !",
      "picture" : "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/71181591_1490737567741370_103687915049058304_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_ohc=f7nX0BrSAgsAX_EV6Nz&_nc_ht=scontent.ftun10-1.fna&oh=e80c82f9423683b3061db4fe37e40b91&oe=5F7FC415"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.floors)
  }

}
