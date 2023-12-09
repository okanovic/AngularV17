import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: any = null;
  @Input() value: any = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  ngOnInit(): void {
    // Reactive form kontrolü için kontrolü ayarlayabilirsiniz.
  }
}
