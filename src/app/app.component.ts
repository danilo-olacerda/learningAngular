import { Component } from '@angular/core';

const data = {name: "danilo", age: 20, local: "Juiz de Fora"};

@Component({
  selector: 'vdb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  people = data;
}