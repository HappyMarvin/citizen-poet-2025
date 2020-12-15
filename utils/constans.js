const botMessages = {
  welcome: 'Добрый день, напишите Ваше обращение',
  default: 'Ответ бота'
}
const messageTemplateSelector = '.message-template';
const chatSelector = '.chat';
const messageClasses= {
  user: 'chat__message_user',
  bot: 'chat__message_bot'
}

const chatListElement = document.querySelector('.chat__list');

export { messageTemplateSelector, botMessages, messageClasses, chatListElement, chatSelector }
