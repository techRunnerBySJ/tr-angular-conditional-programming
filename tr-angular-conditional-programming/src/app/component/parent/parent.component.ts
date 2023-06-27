import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showChild: boolean = false;
  fruits: string[] = ['Apple', 'Banana', 'Orange'];
  selectedFruit: string = 'Apple';
  condition: string = 'A';
}
