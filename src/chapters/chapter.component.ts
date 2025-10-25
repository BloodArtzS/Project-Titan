import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})
export class ChapterComponent implements OnInit, AfterViewInit {
  protected isBrowser: boolean;

  // Tab / Accordion
  activeTab: string = 'synopsis';
  isOpen: boolean = false;

  // Dark mode
  isDarkMode = false;

  // Scroll to top
  showScrollButton = false;
  private lastScrollY = 0;

  constructor(
    protected titleService: Title,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // ----------------- Lifecycle -----------------
  ngOnInit(): void {
    if (this.isBrowser) {
      // Dark mode
      const savedMode = localStorage.getItem('darkMode');
      this.isDarkMode = savedMode === 'true';
    }
  }

  ngAfterViewInit(): void {
    // Nothing here, safe base
  }

  // ----------------- Page Title -----------------
  protected setPageTitle(title: string = 'Project Titan'): void {
    this.titleService.setTitle(title);
  }

  // ----------------- Tabs & Accordion -----------------
  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  // ----------------- Dark Mode -----------------
  toggleDarkMode(): void {
    if (!this.isBrowser) return;
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  getDarkModeIcon(): string {
    return this.isDarkMode ? 'light_mode' : 'dark_mode';
  }

  getDarkModeText(): string {
    return this.isDarkMode ? 'Light Mode' : 'Dark Mode';
  }

  // ----------------- Scroll Button -----------------
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) return;

    const currentScroll = window.scrollY;
    this.showScrollButton = currentScroll < this.lastScrollY && currentScroll > 200;
    this.lastScrollY = currentScroll;
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ----------------- Safe Helpers -----------------
  protected getDocument(): Document | null {
    return this.isBrowser ? document : null;
  }

  protected getItem(key: string): string | null {
    return this.isBrowser ? localStorage.getItem(key) : null;
  }

  protected setItem(key: string, value: string): void {
    if (this.isBrowser) localStorage.setItem(key, value);
  }
}
