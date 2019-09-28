import { Component, OnInit } from '@angular/core';
import {ConcessionMetric} from '../types/concession.type';
import {ShowMetric} from '../types/showtime.type';

const showtimes: ShowMetric[] = require('../../assets/datasets/json/ticket-sales-by-showtime.json');
const concessions: ConcessionMetric[] = require('../../assets/datasets/json/concessions.json');

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  public shows: string[];
  public data;

  private months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  constructor() {

    this.shows = [...new Set(showtimes.map(obj => obj.EventName))];

    console.log(concessions);

    const showDatesMap = {};
    showtimes.forEach(show => {
      const month = new Date(show.EventDate).getMonth();
      showDatesMap[month] ? showDatesMap[month] += show.Quantity : showDatesMap[month] = show.Quantity;
      // console.log(showDatesMap);
    });

    const concessionDatesMap = {};
    concessions.forEach(concession => {
      const month = new Date(concession['Order Date']).getMonth();
      concessionDatesMap[month] ? concessionDatesMap[month] += concession.Quantity : concessionDatesMap[month] = concession.Quantity;
      // console.log(concessionDatesMap);
    });

    this.data = {
      labels: this.months,
      datasets: [
        {
            label: 'Showtime Sales',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            fill: false,
            data: [
              showDatesMap[0],
              showDatesMap[1],
              showDatesMap[2],
              showDatesMap[3],
              showDatesMap[4],
              showDatesMap[5],
              showDatesMap[6],
              showDatesMap[7],
              showDatesMap[8],
              showDatesMap[9],
              showDatesMap[10],
              showDatesMap[11]
            ]
        },
        {
            label: 'Concession Sales',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            fill: false,
            data: [
              concessionDatesMap[0],
              concessionDatesMap[1],
              concessionDatesMap[2],
              concessionDatesMap[3],
              concessionDatesMap[4],
              concessionDatesMap[5],
              concessionDatesMap[6],
              concessionDatesMap[7],
              concessionDatesMap[8],
              concessionDatesMap[9],
              concessionDatesMap[10],
              concessionDatesMap[11]
            ]
        }
      ]
    };
  }

  ngOnInit() {
  }

}
