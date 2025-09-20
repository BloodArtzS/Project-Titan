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

  // parent.component.ts
chapters = [
  { title: 'Chapter 1: Awake from the Slumber', route: '/chapter1' },
  { title: 'Chapter 2: The Protocol', route: '/chapter2' },
  { title: 'Chapter 3: Shadows', route: '/chapter3' },
  { title: 'Chapter 4: Broken Alliance', route: '/chapter4' },
];


}
