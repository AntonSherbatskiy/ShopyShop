import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Input("text") public text!: string;
  @Input("redirect") public redirect!: string;
  @Input("exact") public exact!: boolean;
  @Input("active") public active: string = "active";
}
