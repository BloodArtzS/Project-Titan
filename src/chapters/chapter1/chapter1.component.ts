import { Component } from '@angular/core';
import { ChapterComponent } from '../chapter.component';

@Component({
  selector: 'app-chapter1',
  standalone: true,
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.sass', '../chapter.component.sass'],
})
export class Chapter1Component extends ChapterComponent {
  chapters = [
    { title: 'Chapter 1: Awake from the Slumber', route: '/chapter1' },
    { title: 'Chapter 2: The Protocol', route: '/chapter2' },
    { title: 'Chapter 3: Shadows', route: '/chapter3' },
    { title: 'Chapter 4: Broken Alliance', route: '/chapter4' },
  ];

  override ngOnInit() {
    super.ngOnInit();

    // Set page title
    this.setPageTitle('Chapter 1 - Awake from the Slumber');

    // Initialize chapter-specific localStorage
    const stored = this.getItem('chapter1Key');
    if (!stored) this.setItem('chapter1Key', 'initialized');
  }

  override ngAfterViewInit() {
    const doc = this.getDocument();
    if (doc) {
      const el = doc.getElementById('chapter1-element');
      console.log(el);
    }
  }
}
