export default class Message {
  constructor(body, messageTemplateSelector, fromUser = false, second = false, userAvatarSrc = false) {
    this._body = body;
    this._messageTemplateSelector = messageTemplateSelector;
    this._second = second;
    this._fromUser = fromUser;
    this._userAvatarSrc = userAvatarSrc;
  }

  _getTemplate() {
    return document.querySelector(this._messageTemplateSelector)
      .content
      .querySelector('.chat-container__massage')
      .cloneNode(true);
  }
  
  _addEventListeners() {
    
  }
  
  createMessage() {
    this._message = this._getTemplate()
    if (this._fromUser) {
      this._message.classList.add('chat-container__massage_user');
      this._avatar = this._message.querySelector('.chat-container__message-avatar');
      this._avatar.classList.add('chat-container__message-avatar_user');
      this._avatar.src = this._userAvatarSrc || './images/user-avatar.png';
    }
    if (this._second) {
      this._message.innerHTML = this._body;
    } else {
      this._messageText = this._message.querySelector('.chat-container__massage-text');
      this._messageText.innerHTML = this._body;
    }
    this._addEventListeners();
    return this._message;
  }
}