import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
   
      this.userService.users
        .pipe(filter(data => data.length > 0))
        .subscribe(users => {
          this.user = this.userService.userById(+id);
        })
      
    })
  }

}
