import { Component, OnInit } from '@angular/core';

// Importa o Core do Firebase.
import { initializeApp } from 'firebase/app';

// Importe apenas os componentes que forem necessários.
<<<<<<< HEAD
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

// Environment contém as configurações do Firebase e de autenticação.
import { environment } from 'src/environments/environment';
=======
import { 
	getAuth,onAuthStateChanged,User} from 'firebase/auth';

// Environment contém as configurações do Firebase e de autenticação.
import { environment } from 'src/environments/environment'; 
>>>>>>> 3b1ddd126ddaa9792c5097fd49fb599ac4394a2d

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

<<<<<<< HEAD
  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Model do usuário.
  user!: User;

  // Cumprimenta o usuário.
  userGreeting = 'Perfil de Usuário';

  // Controla a view HTML.
  view = false;

  // Configurações.
  env = environment;
=======
  app = initializeApp(environment.firebase);

  auth = getAuth(this.app);

  user!: User;

  userGreeting = 'Perfil de Usuário';

  view = false;

  env= environment;
>>>>>>> 3b1ddd126ddaa9792c5097fd49fb599ac4394a2d

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {

        // Se usuário está logado.
        this.user = userData;
        this.view = true;

<<<<<<< HEAD
        // Cumprimentar usuário.
=======
>>>>>>> 3b1ddd126ddaa9792c5097fd49fb599ac4394a2d
        this.userGreeting = 'Olá ' + this.user.displayName?.split(' ')[0];

      } else {

        // Se não está logado, redireciona, por exemplo, para 'login'.
<<<<<<< HEAD
        location.href = '/';
      }
    });
  }

  // Logout do usuário.
  logout() {
    this.auth.signOut();
    location.href = '/';
  }

  // Acessa o perfil do usuário no Google.
  toGoogleProfile() {
    window.open('https://myaccount.google.com/', 'blank');
=======
        location.href = '/login';
      }
    });
>>>>>>> 3b1ddd126ddaa9792c5097fd49fb599ac4394a2d
  }

  logout() {
    this.auth.signOut();
    location.href = '/';
  }

  toGoogleProfile(){
    window.open('https://myaccout.google.com/', 'blank');
  }

  
}


