
// export class AliasesComponent {
//   names = ['sadvocado', 'rizzus christ', 'goth2go'];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hobbies-container">
      <h2>My Hobbies & Interests</h2>

      <div class="hobbies-grid">
        <div *ngFor="let hobby of hobbies" class="hobby-card">
          <div class="hobby-icon">{{hobby.icon}}</div>
          <h3>{{hobby.name}}</h3>
          <p>{{hobby.description}}</p>
          <div class="hobby-rating">
            <span>rating??? (i have to use ngfor lol): </span>
            <div class="stars">
              <span *ngFor="let star of getStars(hobby.rating)">⭐</span>
            </div>
          </div>
        </div>
      </div>


  `,
  styles: [`
    .hobbies-container {
      max-width: 1000px;
    }
    .hobbies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    .hobby-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.2s;
    }
    .hobby-card:hover {
      transform: translateY(-5px);
    }
    .hobby-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .hobby-card h3 {
      color: #333;
      margin: 0.5rem 0;
    }
    .hobby-rating {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .stars {
      display: flex;
    }
    
    .form-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .form-group input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      flex: 1;
      min-width: 150px;
    }
    .form-group button {
      background-color: #28a745;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .form-group button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    .form-group button:hover:not(:disabled) {
      background-color: #218838;
    }
    .hobby-preview {
      background-color: white;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #28a745;
    }
    .preview-rating {
      margin-top: 0.5rem;
    }
    
  `]
})
export class HobbiesComponent {

  hobbies = [
    {
      name: 'paper',
      description: 'MAN PAPER IS SO MUC FUN',
      rating: 4,
      icon: ''
    },
    {
      name: 'Holly :)',
      description: 'I love holly!!',
      rating: 4,
      icon: '<3'
    },
    {
      name: 'grill',
      description: 'Experimenting in the kitchen is fun',
      rating: 3,
      icon: '👨‍🍳'
    }
  
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

}