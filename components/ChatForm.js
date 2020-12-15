import {messageClasses, botMessages, messageTemplateSelector, chatListElement} from "../utils/constans.js";
import Message from "./Message.js";

export default class chatForm {
  constructor(formSelector) {
    this._form = document.querySelector(formSelector);
    this._input = this._form.querySelector('.chat__input');
  }

  _clear () {
    this._input.value = '';
  }

  _addEventListeners() {
    this._form.addEventListener('submit',(evt) => {
      evt.preventDefault();
      if (!this._input.value) return
      let message = new Message(this._input.value, messageTemplateSelector, messageClasses.user);
      chatListElement.append(message.createMessage());
      message = new Message(botMessages.default, messageTemplateSelector, messageClasses.bot);
      chatListElement.append(message.createMessage());
      this._clear();
    })
  }

  createForm() {
    this._addEventListeners();
    return this._form;
  }
}