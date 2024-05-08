import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private routes:Router){

  }
  imagen:string = 'assets/images/perfil.gif';

  cancel(){
    this.routes.navigate(['/']);
  }
  imagePerfil(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String: string = reader.result as string;
        this.imagen = base64String;
        console.log(this.imagen);
        // Aquí puedes hacer lo que quieras con la cadena base64, como mostrarla en una imagen o enviarla a un servidor
      };
      reader.onerror = (error) => {
        console.error('Error al leer el archivo:', error);
      };
    }
  }
}
