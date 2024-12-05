import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {
  primitiveData = 'Initial Primitive Data';
  nonPrimitiveData = { value: 'Initial Non-Primitive Data' };

  constructor(public sharedService: SharedDataService) {}

  updatePrimitiveData() {
    this.primitiveData = 'Updated Primitive Data';
  }

  updateNonPrimitiveData() {
    this.nonPrimitiveData.value = 'Updated Non-Primitive Data';
  }
}
