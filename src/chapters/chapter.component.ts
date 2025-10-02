import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass']
})
export class ChapterComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Project Titan');
  }

  activeTab: string = 'synopsis';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
