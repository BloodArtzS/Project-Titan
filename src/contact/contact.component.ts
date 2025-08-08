import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  constructor(private titleService: Title) {}
  
    ngOnInit() {
      this.titleService.setTitle('Contact');
    }
}
