export const environment = {
  production: true,

  // Configurações do aplicativo.
  appName: 'Ionic Test',
  appSlogan: 'Lorem, ipsum dolor!',

  // Tipo de login. ['redirect' ou 'popup'].
  signInMethod: 'redirect',

  // Coleção de contatos do Firestore.
  contactCollection: 'contacts',

  // Coleção principal do Firebase.
  dbCollection: 'things',

  // Altere estas chaves conforme seu próprio projeto no Firebase.com.
  firebase: {
    apiKey: "AIzaSyCjx3Mvi4S6mAa-RVrs-97d6GQoMpnkf_Y",
    authDomain: "iontest-34079.firebaseapp.com",
    projectId: "iontest-34079",
    storageBucket: "iontest-34079.appspot.com",
    messagingSenderId: "873093732290",
    appId: "1:873093732290:web:1716dc087d2dd352c8685b"
  }
};
