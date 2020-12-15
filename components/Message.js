export default class Message {
  constructor(text, messageTemplateSelector, messageClass) {
    this._text = text;
    this._messageTemplateSelector = messageTemplateSelector;
    this._messageClass = messageClass;
  }

  _getTemplate() {
    return document.querySelector(this._messageTemplateSelector)
      .content
      .querySelector('.chat__message')
      .cloneNode(true);
  }
  
  _addEventListeners() {
    
  }
  
  createMessage() {
    this._message = this._getTemplate()
    this._message.textContent = this._text;
    this._addEventListeners();
    this._message.classList.add(this._messageClass);
    return this._message;
  }

}