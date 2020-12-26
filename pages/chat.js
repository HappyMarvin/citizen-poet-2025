import Message from "../components/Message.js";
import ChatForm from "../components/ChatForm.js";
import {botMessages, messageTemplateSelector, chatListElement, regButton} from "../utils/constans.js";
import api from "../utils/api.js";

//Создаем первое сообщение бота
const welcome = new Message(botMessages.welcome, messageTemplateSelector);
chatListElement.append(welcome.createMessage());
let test;

async function wordRequest(word) {
  return fetch(`https://citizen-poet-2025.herokuapp.com/poems/?q=${word}&wordString=1`, {
    method: 'GET'
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка при создании запроса')
    })
}

async function wordsRequest(string) {
  const text = string.replace(/[/.,!?;]*/g, '');
  const words = text.split(' ');
  let results = [];
  for (let i=0; i < words.length; i++) {
    let result = await wordRequest(words[i])
    if (result[0]) {
    results.push({'word': result[0].searchResult.word[0], 'string': result[0].searchResult.poemString[0]});
    }}
  return results;
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

async function SubmitForm () {
  let message = new Message(this._input.value, messageTemplateSelector, true);
  const text = this._input.value.replace(/[/.,!?;]*/g, '');
  const words = text.split(' ');

  chatListElement.append(message.createMessage());
  let arrayWords = await wordsRequest(this._input.value)
  message = new Message(wordsToPoem(arrayWords), messageTemplateSelector);
  chatListElement.append(message.createMessage())


  message = new Message(botMessages.second, messageTemplateSelector, false, true);
  chatListElement.append(message.createMessage());
  regButton.style.display = 'inline-block';
}

const chatForm = new ChatForm('.enter', SubmitForm, clearChat);

chatForm.createForm();