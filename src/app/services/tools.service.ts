import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  // Remove códigos JavaScript e tags HTML da string.
  stripTags(textHtml: string) {
    let div = document.createElement('div');
    div.innerHTML = textHtml.trim().replace(/<script>.*<\/script>/, '');
    return div.textContent || '';
  }

  // Obtém a data atual no formato ISO (yyyy-MM-dd HH:mm).
  now() {
    let yourDate = new Date();
    yourDate = new Date(yourDate.getTime() - (yourDate.getTimezoneOffset() * 60 * 1000));
    const dateParts = yourDate.toISOString().split('T');
    const timeParts = dateParts[1].split('.')[0];
    return dateParts[0] + ' ' + timeParts;
  }

  // Valida um endereço de e-mail usando Regex (HTML5 → RFC5322).
  isMail(textMail: string) {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
    return regexEmail.test(textMail);
  }

}
