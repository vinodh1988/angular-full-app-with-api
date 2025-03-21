import { Component, Input } from '@angular/core';
import { service } from '../../../model/service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input() service: service= {
    id: '',
    title: '',
    description: '',
    image: ''
  };
}
