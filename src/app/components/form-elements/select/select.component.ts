import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() options: { value: string; label: string }[] = [];
  @Input() control: any = null;
  @Input() selectClasses: string = ''; // Tailwind CSS sınıflarını burada alıyoruz
  @Input() selectedOption: string = '';

  ngOnInit(): void {
    // Reactive form kontrolü için kontrolü ayarlayabilirsiniz.
  }
}
