import angular from 'angular';
import messageComponent from './message.component'

let messageModule = angular
  .module('message', [])
  .component('message', messageComponent);

export default messageModule;
