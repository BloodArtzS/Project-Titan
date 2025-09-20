import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter3',
  standalone: true,
  imports: [],
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.sass', '../chapter.component.sass'],
})
export class Chapter3Component {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 3 - Project Titan');
  }

}
