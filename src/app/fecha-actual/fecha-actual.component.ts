import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit {

  hoy: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
