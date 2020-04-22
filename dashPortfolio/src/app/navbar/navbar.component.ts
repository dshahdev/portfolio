import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar;
  constructor() { }

  ngOnInit(): void {

    const menuIcon = document.querySelector('.hamburger-menu');
    // console.log(" ham: " + menuIcon);
    const navbar1 = document.querySelector('.nav-bar-1');
    // console.log(" nav: " + navbar1.textContent);

    menuIcon.addEventListener("click", () => {
    //   console.log("it is clicked....");
      navbar1.classList.toggle('change');
    })
  }

}
