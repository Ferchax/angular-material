import { Component } from '@angular/core';

@Component({
  selector: 'app-table-gpt4',
  templateUrl: './table-gpt4.component.html',
  styleUrls: ['./table-gpt4.component.css']
})
export class TableGpt4Component {
  displayedColumns: string[] = ['fecha'];
  dataSource = [
    { fecha: new Date() },
    { fecha: new Date() },
    { fecha: new Date() }
  ];
}
