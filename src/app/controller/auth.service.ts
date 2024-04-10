import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router: Router) { }
  private API_URL = environment.BASE_URL


  public register(data: any) {
    return this.http.post(this.API_URL + '/CreateUser', data).pipe(
      map((res) => {
        console.log(res)
        return res
      })
    )
  }
  public login(data: any) {
    return this.http.post(this.API_URL + '/Login', data);
  }
}
