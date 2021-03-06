import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  // selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        height: 100px;
      }
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
