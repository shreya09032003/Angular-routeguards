import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title: string = 'app-routing'; // Explicit type annotation

  // Method for mobile menu toggle
  toggleMenu(): void {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
}
