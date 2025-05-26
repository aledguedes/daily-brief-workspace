import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; // ✅ Correção aqui!

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('daily-token');

  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);

      if (decoded.exp && decoded.exp > now) {
        return true;
      }
    } catch (error) {
      console.error('Token inválido ou corrompido:', error);
    }
  }

  router.navigate(['/']);
  return false;
};
