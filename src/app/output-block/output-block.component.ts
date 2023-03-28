import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.css'],
})
export class OutputBlockComponent {
  constructor() {}
  @Input() forChild: String = '';
  @Input() forChild2: String = '';
  @Input() forChild3: String = '';
  @Input() forChild4: String = '';
  bool: boolean = false;
}
