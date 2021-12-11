import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

  user: any;

  constructor(private userService: UserService, private toastr: ToastrService){}

  ngOnInit(){
    this.userService.getUser().subscribe(
      (res: any) => {
        this.user = res.results[0];
      },
      (err) => {
        this.toastr.error(err.status, "Something went wrong.....")
      }
    )
  }

  nextProfile(){
    window.location.reload();
  }
}
