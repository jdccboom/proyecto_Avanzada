import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private routes : Router){

  }
  loginDTO = {
    email: "",
    password: "" 
  }
  
  login(){
      console.log("Inicia envio")
      const datos = {
          email: this.loginDTO.email,
          password: this.loginDTO.password
        };
        
        fetch('http://localhost:8083/api/auth/login-client', {
          method: 'POST',
          body: JSON.stringify(datos),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la petición');
          }
          return response.json();
        })
        .then(data => {
          if (data.error) {
            throw new Error(data.error);
          }
          console.log(data.respuesta);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
        });
    
    
  }

  singup(){
    this.routes.navigate(['singup'])
  }

}
