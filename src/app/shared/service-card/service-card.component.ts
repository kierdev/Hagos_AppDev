import { Component, OnInit, Input, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() icon: string = '';

  constructor() {}
}
