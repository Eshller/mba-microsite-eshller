// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MainMiscellaneousComponent implements OnInit {

  windowScrolled:any = Boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  
  scrollToTop() { 
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }

  ngOnInit(): void {
  }

}
