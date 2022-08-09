import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

let i:string[] = ['./home.component.css']

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: i
})
export class HomeComponent {

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          let i = ['./home0.component.css']
        } else {
          console.log('Viewport width is less than 500px!');
        }
      });
  }
}
