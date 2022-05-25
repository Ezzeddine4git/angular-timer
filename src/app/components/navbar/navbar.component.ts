import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isOpened: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    this.isOpened = !this.isOpened;
  }
}
