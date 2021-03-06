import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { MatSidenav } from '@angular/material/sidenav';
import { Direction } from '@angular/cdk/bidi/directionality';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isScreenSmall = false;

  users: Observable<User[]>;
  isDarkTheme = false;
  direction: Direction = 'ltr';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
    this.users = this.userService.users;
  }

  @ViewChild(MatSidenav)

  sidenav!: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
  
  toggleDirection() {
    this.direction = this.direction  == 'ltr' ? 'rtl' : 'ltr';
  }
  
  ngOnInit(): void {
    this.breakpointObserver
      //.observe([`(max-width: 720px)`])      
      .observe([ Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

      this.users = this.userService.users;
      this.userService.loadAll();

      this.router.events.subscribe(() => {
        if (this.isScreenSmall) {
          this.sidenav.close();
        }
      });
  }

}
