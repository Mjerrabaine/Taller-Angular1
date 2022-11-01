import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  m: number = 0;
  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
}

seasonsA(): number {

  let promedio = 0;
  let total = 0;
  let conteo = 0;

  for (const serie of this.series) {
    total = total + (serie.seasons);
    conteo += 1;
  }
  promedio= total/conteo;
  return promedio;
}

  ngOnInit() {
    this.getSeries();
  }

}
