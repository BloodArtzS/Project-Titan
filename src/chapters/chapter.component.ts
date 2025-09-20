import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass']
})
export class ChapterComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Project Titan');
  }
}
