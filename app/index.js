import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';

import Components from './components/components';

// initialization here.

angular.module("diceApp", ["firebase",
  Components.name
])

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
   return $firebaseAuth();
  }
]);
