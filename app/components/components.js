import angular from 'angular'
import User from './user/user'
import Main from './main-component/main'
import MessageCard from './message-card/messageCard'
import MessageList from './message-list/messageList'
import Message from './message/message'

let componentModule = angular.module('app.components', [
  User.name,
  Main.name,
  MessageCard.name,
  MessageList.name,
  Message.name
])

export default componentModule
