const botMessages = {
  welcome: 'Привет, меня зовут Николай Васильевич! Напиши свой запрос и я найду его в строчках знаменитых классиков!',
  second: 'Всё верно, регистрируем?',
  welcomeAgain: 'Хорошо, давайт поробуем ещё раз. Напиши свой запрос.'
}
const messageTemplateSelector = '.message-template';

const chatListElement = document.querySelector('.chat-container');
const regButton = document.querySelector('.chat-container__submit');

export { messageTemplateSelector, botMessages, chatListElement, regButton }
