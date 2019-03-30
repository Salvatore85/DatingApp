import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../_models/iuser';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: Iuser;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: Iuser) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
