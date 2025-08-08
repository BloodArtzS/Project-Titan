import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [],
  templateUrl: './titan.component.html',
  styleUrl: './titan.component.sass'
})
export class TitanComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Project Titan');
  }
}
