import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CollectionStatsAveragePrice, CollectionStatsChange, CollectionStatsSales, CollectionStatsVolume } from 'src/shared/models/collection.stats.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  chart: any;

  @Input() collectionStatsVolume: CollectionStatsVolume = {
    one_day_volume: 0,
    seven_day_volume: 0,
    thirty_day_volume: 0,
    total_volume: 0
  }

  @Input() collectionStatsChange: CollectionStatsChange = {
    one_day_change: 0,
    seven_day_change: 0,
    thirty_day_change: 0
  }

  @Input() collectionStatsSales: CollectionStatsSales = {
    one_day_sales: 0,
    seven_day_sales: 0,
    thirty_day_sales: 0,
    total_sales: 0
  }

  @Input() collectionStatsAveragePrice: CollectionStatsAveragePrice = {
    one_day_average_price: 0,
    seven_day_average_price: 0,
    thirty_day_average_price: 0,
    average_price: 0
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.chart = this.elementRef.nativeElement.querySelector(`#my_first_chart`);
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: Object.values(this.collectionStatsVolume),
            label: "Volume",
            backgroundColor: '#007bff',
            tension: 0.2,
            borderColor: '#007bff'
          },
          // // {
          // //   data: Object.values(this.collectionStatsChange),
          // //   label: "Change",
          // //   backgroundColor: '#009900',
          // //   tension: 0.2,
          // //   borderColor: '#009900'
          // // },
          {
            data: Object.values(this.collectionStatsSales),
            label: "Sales",
            backgroundColor: '#ffff00',
            tension: 0.2,
            borderColor: '#ffff00'
          },
          {
            data: Object.values(this.collectionStatsAveragePrice),
            label: "Average Price",
            backgroundColor: '#9900cc',
            tension: 0.2,
            borderColor: '#9900cc'
          }
        ],
        labels: [ '1 days', '7 days', '30 days', 'total' ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              borderDash: [1, 2]
            },
            beginAtZero: true
          },
          x: {
            grid: {
              drawBorder: false
            }
          }
        }
      }
    });
  }

}
