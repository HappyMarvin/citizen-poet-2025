import Message from "../components/Message.js";
import ChatForm from "../components/ChatForm.js";
import {botMessages, messageTemplateSelector, chatListElement, regButton} from "../utils/constans.js";

//Создаем первое сообщение бота
const welcome = new Message(botMessages.welcome, messageTemplateSelector);
chatListElement.append(welcome.createMessage());


function wordsRequest(words) {
  // Функция получает массив слов words
  // Здесь должен формироваться запрос к базе стихов
  // функция должна возвращать массив обьектов вида:
  return [
    {
    word: 'заменить',
    string: 'Утраты сердца заменить',
    poem: `Утраты сердца заменить;
          ...целый стих`
    },
    {
      word: 'скамейки',
      string: 'Зеленой садовой скамейки',
      poem: `Зеленой садовой скамейки;
          ...целый стих`
    },
    {
      word: 'у',
      string: 'В ночь таежную у костра',
      poem: `В ночь таежную у костра;
          ...целый стих`
    },
    {
      word: 'дома',
      string: 'Стучащаяся пальчиком в дома',
      poem: `Стучащаяся пальчиком в дома;
          ...целый стих`
    },
  ]
}

function wordsToPoem (arrayWords) {
  // формируем из массива обьектов со словами стих
  // надо доработать механизм формирования строки, возможны баги
  let poem = '';
  arrayWords.forEach(word => {
    poem += word.string.replace(` ${word.word}` || `${word.word} `, ` <span class="chat-container__word"> ${word.word} </span> `) + '<br>';
  })
  return poem;
}

function clearChat() {
  //очистка чата по нажатию кнопки Начать заново
  chatListElement.innerHTML = '';
  regButton.style.display = 'none';
  const welcome = new Message(botMessages.welcomeAgain, messageTemplateSelector);
  chatListElement.append(welcome.createMessage());
}

function SubmitForm () {
  let message = new Message(this._input.value, messageTemplateSelector, true);
  const text = this._input.value.replace(/[/.,!?;]*/g, '');
  const words = text.split(' ');

  chatListElement.append(message.createMessage());
  message = new Message(wordsToPoem(wordsRequest(words)), messageTemplateSelector);
  chatListElement.append(message.createMessage());

  message = new Message(botMessages.second, messageTemplateSelector, false, true);
  chatListElement.append(message.createMessage());
  regButton.style.display = 'inline-block';
}

const chatForm = new ChatForm('.enter', SubmitForm, clearChat);

chatForm.createForm();