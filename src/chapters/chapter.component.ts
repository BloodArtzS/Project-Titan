import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})

export class ChapterComponent {

  protected isBrowser: boolean;

  constructor(
    protected titleService: Title,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  protected setPageTitle(title: string = 'Project Titan'): void {
    this.titleService.setTitle(title);
  }

  // Tab Switcher Logic

  activeTab: string = 'synopsis';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  // Dark Mode Toggle Logic
  isDarkMode = false;

  ngOnInit(): void {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  getDarkModeIcon(): string {
    return this.isDarkMode ? 'light_mode' : 'dark_mode';
  }

  getDarkModeText(): string {
    return this.isDarkMode ? 'Light Mode' : 'Dark Mode';
  }

  // Scroll to Top Button Logic
  showScrollButton = false;
  private lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    // Only show button if user scrolls UP and not at top
    if (currentScroll < this.lastScrollY && currentScroll > 200) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }

    this.lastScrollY = currentScroll;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
