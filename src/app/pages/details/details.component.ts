import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/interfaces/ticket.interface';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ticket: Ticket;
  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit(): void {
    this.getTicketById(this.activatedRoute.snapshot.params.id);
  }

  getTicketById(id: number) {
    this.backendService.ticket(id).subscribe(
      ticket => {
        this.ticket = ticket
      }
    );
  }

}
