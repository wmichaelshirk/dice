import angular from 'angular';
import mainComponent from './main.component'

let mainModule = angular
    .module('main', [])
    .component('mainComponent', mainComponent);

export default mainModule;
