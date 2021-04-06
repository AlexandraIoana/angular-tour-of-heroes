import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// Properties:
// selector— the component's CSS element selector
// templateUrl— the location of the component's template file
// styleUrls— the location of the component's private CSS styles
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export so you can import elsewhere
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  // It's called shortly after creating a component
  // It's a good place to initialise stuff
  ngOnInit(): void {

  }

}
