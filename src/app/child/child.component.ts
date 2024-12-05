import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() childData!: any;
  childOwnData = 'Initial Child Data';

  constructor(public sharedService: SharedDataService) {}

  updateChildData() {
    this.childOwnData = 'Updated Child Data';
  }
}
