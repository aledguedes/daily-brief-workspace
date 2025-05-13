import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NotificationService } from '../services/notification.service';
import { NotificationComponent } from '../components/notification/notification.component';
import { IErrorResponse } from '../model/error.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NotificationComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isLoading = false;
  showPassword = false;

  notificationTitle = '';
  notificationMessage = '';
  notificationType: 'success' | 'error' | 'info' | 'warning' = 'success';
  notificationShow = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private loginService = inject(LoginService);
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.initForm();
    this.notificationService.notification$.subscribe((n) => {
      this.notificationMessage = n.message;
      this.notificationType = n.type;
      this.notificationShow = n.show;
      this.notificationTitle = n.title;
    });
    const token = localStorage.getItem('daily-token') !== null;
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['admin@dailybrief.com', [Validators.required, Validators.email]],
      password: ['12345678999', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('daily-token', response.token);
          const successMessage = 'Login realizado com sucesso';
          this.notificationService.show('Login realizado com sucesso!', 'success', successMessage);
          setTimeout(() => {
            this.router.navigate(['/home']);
            this.isLoading = false;
          }, 2500);
        },
        error: (err: IErrorResponse) => {
          const errorMessage = 'Falha na autenticação';
          this.isLoading = false;
          this.notificationService.show(err.error.message, 'error', errorMessage);
        },
      });
    }
  }
}
