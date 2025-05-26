import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="home-container">
      <h2>Welcome</h2>
      <div class="welcome-image">
        <img src="https://i.pinimg.com/736x/d9/c2/89/d9c289f4a5b5ae12c1259366e1606843.jpg" alt="Welcome Image" />
      </div>
      <div class="greeting-section">
        <label for="name">Enter your name: </label>
        <input 
          type="text" 
          id="name" 
          [(ngModel)]="visitorName" 
          placeholder="Your name here"
        >
        <p *ngIf="visitorName">Hello, {{visitorName}}! Nice to meet you! 👋</p>
      </div>

      <div class="quick-facts">
        <h3>Quick Facts About Me:</h3>
        <ul>
          <li *ngFor="let fact of facts; let i = index">
            {{i + 1}}. {{fact}}
          </li>
        </ul>
      </div>

      
      <div class="mood-section">
        <button (click)="toggleMood()">Toggle My Mood</button>
        <p *ngIf="isHappy" class="happy">I'm feeling great today! :D</p>
        <p *ngIf="!isHappy" class="sad">Having a tough day... ;-;</p>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
    }
    .greeting-section {
      background-color: #f0f8ff;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .greeting-section input {
      padding: 0.5rem;
      margin: 0 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .quick-facts {
      background-color: #f9f9f9;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .quick-facts ul {
      list-style: none;
      padding: 0;
    }
    .quick-facts li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
    .mood-section {
      background-color: #fff8dc;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .mood-section button {
      background-color: #4CAF50;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .welcome-image img {
  width: 100px; 
}
    .mood-section button:hover {
      background-color: #45a049;
    }
    .happy {
      color: green;
      font-weight: bold;
    }
    .sad {
      color: #666;
      font-style: italic;
    }
  `]
})
export class HomeComponent {
  visitorName: string = '';
  isHappy: boolean = true;
  
  facts: string[] = [
    "im a little kid lover",
    "paper is <3",
    "i grilled my foot in a george foreman grill",
    "im 200% sure i got all the foot out of the grill",
    "im the best manager"
  ];

  toggleMood() {
    this.isHappy = !this.isHappy;
  }
}