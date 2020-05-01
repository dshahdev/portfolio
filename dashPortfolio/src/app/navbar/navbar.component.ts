import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainNav;
  sticky;
  constructor() { }

  ngOnInit(): void {
    this.mainNav = document.getElementById("main-nav");
    this.sticky = this.mainNav.offsetTop;
    
    console.log("off-set: "+ this.sticky);

    window.onscroll = () => {
      this.stickyFunction();
    }
    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar1 = document.querySelector('.nav-bar-1');

    menuIcon.addEventListener("click", () => {
      navbar1.classList.toggle('change');
    });

    
  }
  stickyFunction(){
    console.log("window off set: "+ window.pageXOffset);
      if(window.pageXOffset >= this.sticky) {
        this.mainNav.classList.add('sticky');
      } else {
        this.mainNav.classList.remove('sticky');
      }
  }

}
