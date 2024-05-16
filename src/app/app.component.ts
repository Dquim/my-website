import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, RouterOutlet, MatCardModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-website';
  allLines = '• Diagnose and resolve intricate hardware and software challenges through meticulous troubleshooting, ensuring seamless functionality and optimal performance.' + ' ' + '• Identify and resolve complex network issues, implementing strategic solutions to enhance stability and ensure uninterrupted connectivity.' + ' ' + ' • Manage and optimize Active Directory environments, demonstrating adeptness in user account management and group policy configuration.';
  treloarHeisel = '• Utilized Nintex for data import/export between Excel and Applied Epic, streamlining data consolidation.' + '• Implemented a Microsoft Excel application for recruiters to collect data on potential recruits.' + '• Collaborated with team members to efficiently complete daily tasks and projects.' + '• Created queries and cross-referenced data between Epic and HubSpot to prevent duplicates.' + '• Reformatted computers with the company’s in-house software stack.'
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
}

