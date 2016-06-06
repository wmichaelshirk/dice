import angular from 'angular';
import messageListComponent from './messageList.component'

let messageListModule = angular
  .module('messageList', [])
  .component('messageList', messageListComponent);

export default messageListModule;
