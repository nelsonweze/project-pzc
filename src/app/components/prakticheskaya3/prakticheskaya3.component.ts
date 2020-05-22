import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prakticheskaya3',
  templateUrl: './prakticheskaya3.component.html',
  styleUrls: ['./prakticheskaya3.component.scss']
})
export class Prakticheskaya3Component implements OnInit {
  dxp = 5
  vxp = 1/this.dxp
  lx = 4.8
  m = 796
  vxn = Math.round(this.m/(2*this.lx)) 

  constructor() { }

  ngOnInit() {
  }

}
