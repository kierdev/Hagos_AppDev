import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.scss'],
})
export class StackCardComponent {
  @Input() icon: String = '';
  @Input() stackName: String = '';
  constructor() {}
}
