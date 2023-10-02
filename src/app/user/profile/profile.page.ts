import { Component, OnInit } from '@angular/core';

// Importa o Core do Firebase.
import { initializeApp } from 'firebase/app';

// Importe apenas os componentes que forem necessários.
import { 
	getAuth,onAuthStateChanged,User} from 'firebase/auth';

// Environment contém as configurações do Firebase e de autenticação.
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  app = initializeApp(environment.firebase);

  auth = getAuth(this.app);

  user!: User;

  userGreeting = 'Perfil de Usuário';

  view = false;

  env= environment;

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {

        // Se usuário está logado.
        this.user = userData;
        this.view = true;

        this.userGreeting = 'Olá ' + this.user.displayName?.split(' ')[0];

      } else {

        // Se não está logado, redireciona, por exemplo, para 'login'.
        location.href = '/login';
      }
    });
  }

  logout() {
    this.auth.signOut();
    location.href = '/';
  }

  toGoogleProfile(){
    window.open('https://myaccout.google.com/', 'blank');
  }

  
}


