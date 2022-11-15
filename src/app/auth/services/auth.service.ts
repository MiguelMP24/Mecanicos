import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }

  Verificacion(){
    return localStorage.getItem('id') != null ? true : false;
  }

  login(id:string){
    localStorage.setItem('id', id);
  }

  logout(){
    localStorage.clear();
  }

}
