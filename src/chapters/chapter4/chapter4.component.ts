import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter4',
  standalone: true,
  imports: [],
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.sass', '../chapter.component.sass'],
})
export class Chapter4Component {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 4 - Project Titan');
  }

}
