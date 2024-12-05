import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  message = 'Default Service Message';

  setMessage(newMessage: string) {
    this.message = newMessage;
  }

  getMessage(): string {
    return this.message;
  }
}
