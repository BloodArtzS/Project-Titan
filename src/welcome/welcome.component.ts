import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
})
export class WelcomeComponent {
  showBookmarkMessage(): void {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const keyCombo = isMac ? 'Cmd + D' : 'Ctrl + D';
    alert(
      `Just hit ${keyCombo} to bookmark this page, Cheers!`
    );
  }
}
