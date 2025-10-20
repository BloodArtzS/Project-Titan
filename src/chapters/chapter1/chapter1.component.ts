import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter1',
  standalone: true,
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.sass', '../chapter.component.sass'],
})
export class Chapter1Component {
  views: number = 0;

  chapters = [
    { title: 'Chapter 1: Awake from the Slumber', route: '/chapter1' },
    { title: 'Chapter 2: The Protocol', route: '/chapter2' },
    { title: 'Chapter 3: Shadows', route: '/chapter3' },
    { title: 'Chapter 4: Broken Alliance', route: '/chapter4' },
  ];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 1 - Awake from the Slumber');
    if (typeof window !== 'undefined') {
      this.updateViewCount();
    }
  }

  async updateViewCount() {
    const namespace = 'bloodartz-netlify-app';
    const key = 'trw-chapter1';
    const url = `https://api.countapi.xyz/update/${namespace}/${key}/?amount=1`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      this.views = data.value;
    } catch (err) {
      console.error('Error fetching views:', err);
    }
  }
}
