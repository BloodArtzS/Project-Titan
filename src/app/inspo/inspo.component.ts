import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inspo',
  standalone: true,
  imports: [],
  templateUrl: './inspo.component.html',
  styleUrl: './inspo.component.sass'
})
export class InspoComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Inspiration Page');
  }
}
