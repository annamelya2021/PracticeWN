import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  // Логінізація
  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      map(users => users.length > 0 ? users[0] : null), // Пошук користувача за email
      tap(user => {
        if (user) {
          this.user = user;
          localStorage.setItem('token', 'aASDgjhasda.asdasd.aadsf123k'); // Можна зберегти токен
          localStorage.setItem('user', JSON.stringify(user)); // Зберігаємо дані користувача
        }
      }),
      catchError(() => of(null)) // Обробка помилок
    );
  }

  // Перевірка автентифікації
  checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) return of(false); // Якщо немає токена — не автентифікований

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser); // Відновлюємо користувача з локального сховища
      return of(true);
    }

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => (this.user = user)),
      map(user => !!user),
      catchError(err => of(false))
    );
  }


  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
