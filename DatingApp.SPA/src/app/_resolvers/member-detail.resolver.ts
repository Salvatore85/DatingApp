import { Injectable } from '@angular/core';
import { Iuser } from '../_models/iuser';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<Iuser> {
  constructor(private userSerice: UserService, private router: Router, private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Iuser> {
    return this.userSerice.getUser(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }

}
