import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter2',
  standalone: true,
  imports: [],
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.sass', '../chapter.component.sass'],
})
export class Chapter2Component {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 2 - Project Titan');
  }

}
