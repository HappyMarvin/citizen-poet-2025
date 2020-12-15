// В разработке
// import {messageClasses, messageTemplateSelector} from "../utils/constans";
// import Message from "./Message";
//
// export default class Chat {
//   constructor(chatSelector) {
//     this._chat = document.querySelector(chatSelector);
//     this._chatListElement = this._chat.querySelector('.chat__list');
//   }
//
//   _clear() {
//     this._chatListElement.innerHTML = '';
//   }
//
//   _addEventListeners() {
//
//   }
//
//   addMessage(text, messageTemplateSelector, messageClasses) {
//     const message = new Message(text, messageTemplateSelector, messageClasses.user);
//     this._chatListElement.append(message.createMessage());
//   }
// }