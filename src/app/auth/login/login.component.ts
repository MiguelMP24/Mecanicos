import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';
import { AuthServicesService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Formulario: FormGroup = this.fb.group({
    id: [, [Validators.required, Validators.min(0)]],
    email: [, [Validators.required, Validators.min(0)]],
    pass: [, [Validators.required, Validators.min(0)]],
    
  });

  constructor(private router: Router,
    public auth:AuthServicesService,
    private fb: FormBuilder,
    private cs : ConexionService) { }

  ngOnInit(): void {
  }

  Login(){
    console.log(this.Formulario.value);
    this.cs.Post('inicio', 'Login', this.Formulario.value).subscribe((dato: any)=>{
      
      if(dato.id != undefined){
        this.auth.login(dato.id);
        this.router.navigate(['./reactives/lista']);
      }
    });
  }

}

/*
Foto galeria
Nombre,  Descripcion, cantidad ,precio unico, Precio total(cantidad por precio unico = precio total dependiendo de las unidades)
*/
