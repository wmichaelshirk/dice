import angular from 'angular';
import userComponent from './user.component'

let userModule = angular.module('user', [])

.component('user', userComponent);

export default userModule;
