import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter1',
  standalone: true,
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.sass', '../chapter.component.sass'],
})
export class Chapter1Component {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 1 - Project Titan');
  }

}
