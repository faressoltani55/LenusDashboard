import { Component, OnInit } from '@angular/core';
import {NbMenuService, NbSidebarService} from "@nebular/theme";
import {filter, map} from "rxjs/operators";
import {AuthService} from "../../security/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userMenu = [
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Log out',
      link: '/auth'
    }
    ];
  constructor(private nbMenuService: NbMenuService,private sidebarService: NbSidebarService, private authService : AuthService) { }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if(title === "Log out")
          this.authService.logout();
      });
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
