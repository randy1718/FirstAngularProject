import { Component, OnInit } from '@angular/core';
import { faHome, faInfo, faList, faAddressCard,faSignIn } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  faHome = faHome;
  faInfo = faInfo;
  faList = faList;
  faAddressCard = faAddressCard;
  faSignIn = faSignIn;
  
  
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
