import { Component, OnInit } from '@angular/core';
import { ConcessionMetric} from '../types/concession.type';
import { ShowMetric} from '../types/showtime.type';

const showtimes: ShowMetric[] = require('../../assets/datasets/json/ticket-sales-by-showtime.json');
const concessions: ConcessionMetric[] = require('../../assets/datasets/json/concessions.json');

@Component({
  selector: 'app-diagnosis',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  public shows: string[];
  public ticketConcessionData;
  public mostConcessionData;

  private months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  constructor() {

    this.shows = [...new Set(showtimes.map(obj => obj.EventName))];
    const uniqueConcessions = [...new Set(concessions.map(obj => obj['Product Group']))];

    console.log(uniqueConcessions);
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

    const concessionQuantityMap = {};
    concessions.forEach(concession => {
      concessionQuantityMap[concession['Product Group']] ? concessionQuantityMap[concession['Product Group']] += concession.Quantity : concessionQuantityMap[concession['Product Group']] = concession.Quantity;
      // console.log(concessionDatesMap);
    });

    console.log(concessionQuantityMap);
    this.mostConcessionData = {
      labels: uniqueConcessions,
      datasets: [
        {
          label: 'Showtime Sales',
          backgroundColor: ['#42A5F5', '#9CCC65', '#FF6384', '#FFCE56', '#E7E9ED', '#EE82EE'],
          borderColor: ['#1E88E5', '#7CB342', '#FF6384', '#FFCE56', '#E7E9ED', '#EE82EE'],
          fill: false,
          data: [
            concessionQuantityMap['Candy'],
            concessionQuantityMap['Non-Alcoholic Beverages'],
            concessionQuantityMap['Popcorn'],
            concessionQuantityMap['Booze'],
            concessionQuantityMap['Baked Goods'],
            concessionQuantityMap['Promotions'],
          ]
        },
      ]
    };

    this.ticketConcessionData = {
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
