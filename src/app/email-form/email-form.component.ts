import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit = (): void => {
    console.log(this.email);
  };
}
