import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

// Importa o Core do Firebase.
import { initializeApp } from 'firebase/app';

// Importe apenas os componentes que forem necessários.
<<<<<<< HEAD
import { getAuth, onAuthStateChanged } from 'firebase/auth';
=======
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
>>>>>>> 3b1ddd126ddaa9792c5097fd49fb599ac4394a2d

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

// Menu principal.
export class AppComponent {

  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Variáveis de ambiente.
  env = environment;

  // Dados do usuário na view, quando não logado.
  appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  // Menu principal.
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'mail' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Autores', url: 'author', icon: 'people' },
    { title: 'Privacidade', url: 'policies', icon: 'lock-closed' }
  ];

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {

        // Dados do usuário na view, quando logado.
        this.appUser = {
          logged: true,
          title: userData.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: userData.photoURL + ''
        }

      }

    });
  }

}
