import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

interface Message {
  id?: string;
  name: string;
  subject: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private firestore: Firestore) { }

  addMessage(message: Message) {
    const messageRef = collection(this.firestore, 'message');
    return addDoc(messageRef, message)
  }
}
