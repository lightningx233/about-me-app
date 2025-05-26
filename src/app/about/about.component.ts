import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h2>About Me</h2>
      
      <div class="profile-section">
        <div class="profile-info">
          <h3>{{profile.name}}</h3>
          <p><strong>Age:</strong> {{profile.age}}</p>
          <p><strong>Location:</strong> {{profile.location}}</p>
          <p><strong>Occupation:</strong> {{profile.occupation}}</p>
        </div>
      </div>

      <div class="bio-section">
        <h3>BIO lfgg</h3>
        <p>{{profile.bio}}</p>
      </div>

      
      
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
    }
    .profile-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      margin: 1rem 0;
    }
    .profile-info h3 {
      font-size: 2rem;
      margin: 0 0 1rem 0;
    }
    .bio-section {
      background-color: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .skills-section {
      background-color: #ffffff;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
      border: 1px solid #eee;
    }
    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .skill-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .skill-name {
      min-width: 100px;
      font-weight: bold;
    }
    .skill-bar {
      flex: 1;
      height: 20px;
      background-color: #e0e0e0;
      border-radius: 10px;
      overflow: hidden;
    }
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #4CAF50, #45a049);
      transition: width 0.3s ease;
    }
    .skill-level {
      min-width: 40px;
      text-align: right;
      font-size: 0.9rem;
      color: #666;
    }
    .contact-section {
      background-color: #e8f5e8;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .contact-section button {
      background-color: #007bff;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .contact-section button:hover {
      background-color: #0056b3;
    }
    .contact-info {
      background-color: white;
      padding: 1rem;
      border-radius: 4px;
      border-left: 4px solid #007bff;
    }
  `]
})
export class AboutComponent {
  showContact: boolean = false;
  
  profile = {
    name: 'michael scott',
    age: 26,
    location: 'scranton, USA',
    occupation: 'paper?',
    bio: 'I am a passionate paper nerd and also a little kid lover <3!',
    email: 'michael.gscott@email.com',
    phone: '+1 (555) 123-4567',
    github: 'github.com/michaelgscott',
    
  };
}
