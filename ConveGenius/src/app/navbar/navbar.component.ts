import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private size: any;
  showFiller = false;
  public innerWidth: any;
  public Show: any;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    if(pos > 60) {
      this.Show =  true;
    }
    else {
      this.Show = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 1020) {
      this.size = false; 
    }
    else {
      this.size = true;
    }
  }

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.size = true;
    this.Show = false;
  }

}
