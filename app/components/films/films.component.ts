import { PelisInterface } from './../../models/PelisInterface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
@Input() public films!:PelisInterface

}
