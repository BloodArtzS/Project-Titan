import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter1',
  standalone: true,
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.sass', '../chapter.component.sass'],
})
export class Chapter1Component {

  chapters = [
    { title: 'Chapter 1: Awake from the Slumber', route: '/chapter1' },
    { title: 'Chapter 2: The Protocol', route: '/chapter2' },
    { title: 'Chapter 3: Shadows', route: '/chapter3' },
    { title: 'Chapter 4: Broken Alliance', route: '/chapter4' },
  ];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Chapter 1 - Awake from the Slumber');
  }

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

  // ---------------------
  // YOUTUBE SEGMENT LOOP
  // ---------------------
  // private player: any;
  // private startTime = 8;
  // private endTime = 20;
  // private loopCount = 0;
  // private maxLoops = 3;

  // ngAfterViewInit(): void {
  //   // Load YouTube IFrame API dynamically
  //   const tag = document.createElement('script');
  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   document.body.appendChild(tag);

  //   (window as any).onYouTubeIframeAPIReady = () => {
  //     this.player = new (window as any).YT.Player('yt-segment', {
  //       videoId: 'QNUJDRYtfZ4',
  //       playerVars: {
  //         start: this.startTime,
  //         controls: 0,
  //         modestbranding: 1,
  //         rel: 0,
  //       },
  //       events: {
  //         onReady: this.onPlayerReady.bind(this),
  //         onStateChange: this.onPlayerStateChange.bind(this),
  //       },
  //     });
  //   };
  // }

  // private onPlayerReady(event: any) {
  //   event.target.seekTo(this.startTime);
  //   event.target.playVideo();
  // }

  // private onPlayerStateChange(event: any) {
  //   if (event.data === (window as any).YT.PlayerState.PLAYING) {
  //     const check = setInterval(() => {
  //       const current = this.player.getCurrentTime();
  //       if (current >= this.endTime) {
  //         clearInterval(check);
  //         this.loopCount++;
  //         if (this.loopCount < this.maxLoops) {
  //           this.player.seekTo(this.startTime);
  //         } else {
  //           this.player.pauseVideo();
  //         }
  //       }
  //     }, 500);
  //   }
  // }

  

}
