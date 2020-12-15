import Message from "../components/Message.js";
import ChatForm from "../components/ChatForm.js";
import {messageClasses, botMessages, messageTemplateSelector, chatListElement} from "../utils/constans.js";

const welcome = new Message(botMessages.welcome, messageTemplateSelector, messageClasses.bot);

chatListElement.append(welcome.createMessage());

const chatForm = new ChatForm('.chat__form');
chatForm.createForm();