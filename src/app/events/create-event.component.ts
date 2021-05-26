import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  template: `
    <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>Form</h3>
      <br />
      <button class="btn btn-default">Save</button>

      <button class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [],
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
