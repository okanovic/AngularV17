import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: false,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'radio';
  @Input() placeholder: string = '';
  @Input() control: any = null;
  @Input() value: any = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  ngOnInit(): void {
    // Reactive form kontrolü için kontrolü ayarlayabilirsiniz.
  }
}
