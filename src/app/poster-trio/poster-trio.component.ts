import { Component, OnInit } from '@angular/core';
import {Poster} from '../types/poster.type';

const posters: Poster[] = [{
  "Name": "Dr. Dolittle",
  "Rating": 33,
  "Year": 1985,
  "Genre": "Comedy",
  "Image": "http://dummyimage.com/240x360.bmp/cc0000/ffffff",
  "Description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
}, {
  "Name": "Chillers",
  "Rating": 92,
  "Year": 2007,
  "Genre": "Horror",
  "Image": "http://dummyimage.com/240x360.png/cc0000/ffffff",
  "Description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi."
}, {
  "Name": "Exposed",
  "Rating": 55,
  "Year": 1996,
  "Genre": "Drama",
  "Image": "http://dummyimage.com/240x360.bmp/5fa2dd/ffffff",
  "Description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}];

@Component({
  selector: 'app-poster-trio',
  templateUrl: './poster-trio.component.html',
  styleUrls: ['./poster-trio.component.scss']
})
export class PosterTrioComponent implements OnInit {
  posters: Poster[] = posters;

  constructor() { }

  ngOnInit() {
  }

}
