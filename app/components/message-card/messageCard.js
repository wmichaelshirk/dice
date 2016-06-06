import angular from 'angular';
import messageCardComponent from './message-card.component'

let messageCardModule = angular
  .module('messageCard', [])
  .component('messageCard', messageCardComponent);

export default messageCardModule;
