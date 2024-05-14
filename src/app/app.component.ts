import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatCardModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-website';
  allLines = '• Diagnose and resolve intricate hardware and software challenges through meticulous troubleshooting, ensuring seamless functionality and optimal performance.' + ' ' + '• Identify and resolve complex network issues, implementing strategic solutions to enhance stability and ensure uninterrupted connectivity.' + ' ' + ' • Manage and optimize Active Directory environments, demonstrating adeptness in user account management and group policy configuration.';
  treloarHeisel = '• Utilized Nintex for data import/export between Excel and Applied Epic, streamlining data consolidation.' + '• Implemented a Microsoft Excel application for recruiters to collect data on potential recruits.' + '• Collaborated with team members to efficiently complete daily tasks and projects.' + '• Created queries and cross-referenced data between Epic and HubSpot to prevent duplicates.' + '• Reformatted computers with the company’s in-house software stack.'
}
