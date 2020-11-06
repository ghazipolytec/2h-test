import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';
import { Ticket } from 'src/interfaces/ticket.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  displayedColumns = ['id', 'completed', 'assigneeId', 'description'];
  dataSource: MatTableDataSource<Ticket>;

  public users$: Observable<User[]> = this.backendService.users();
  public tickets$: Observable<Ticket[]> = this.backendService.tickets();

  tickets: Ticket[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private backendService: BackendService) {
    this.tickets$.subscribe(
      tickets => {
        this.tickets = tickets;
        this.dataSource = new MatTableDataSource(tickets);
      }
    );
    this.dataSource = new MatTableDataSource(this.tickets);
  }
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.tickets);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
