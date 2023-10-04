import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { KotService } from 'src/app/services/kot.service';



@Component({
  selector: 'app-kot',
  styleUrls: ['kot-component.css'],
  templateUrl: 'kot.component.html'
})

export class KotComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource: any[] = [];
  mayank: string = "mayank hoon mai";
  constructor(private kotService: KotService) {}
  ngOnInit(): void {
    this.kotService.fetchData()
    .subscribe(response => {
      this.dataSource = response;
    });
  }

}