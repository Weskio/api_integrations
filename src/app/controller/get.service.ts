import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  Product :Product [] = []

  // public getProducts(){
  //   return this.http.get('https://freeapi.gerasim.in/api/Interview/GetAllLanguage')
  //   // .pipe(map((res)=>{
  //   //   for(const key in res){
  //   //     if(key === 'data'){
  //   //     this.Product.push(...res[key])
  //   //     }
  //   //   }
  //   //   return this.Product
  //   // }))
  //   // .subscribe((data) => {
  //   //   this.Product = data
  //   // })

  //   .pipe(map((res)=>{
  //     for(const key in res){
  //       if(key === 'data'){
  //         this.Product.push(...res[key])
  //       }
  //     }
  //     return this.Product
  //   })).subscribe((data) => {
  //     this.Product = data
  //   })
  // }

  // public getProduct$(){
  //   return this.http.get('https://freeapi.gerasim.in/api/Interview/GetAllLanguage')
  // }
  
}
