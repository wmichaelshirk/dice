import template from './message-card.html'
import _ from 'underscore'

let messageCardComponent = {
  template,
  controller: function MessageCard($firebaseArray) {
    var ctrl = this

    let ref = firebase.database().ref().child("messages").limitToLast(7)
    ctrl.list = $firebaseArray(ref)

    ctrl.submit = function submit() {
      ctrl.list.$add({
       name: ctrl.user.displayName,
       text: xDy(ctrl.dieQuantity, ctrl.dieDenomination, ctrl.bonus),
       timestamp: (new Date()).toString(),
       photoUrl: ctrl.user.photoURL || '/images/profile_placeholder.png',
       comment: ctrl.comment
     }).then(function() {
       ctrl.dieQuantity = null;
       ctrl.dieDenomination= null;
       ctrl.bonus = null;
     }).catch((err) => {console.log(err)})
    }
  },
  bindings: {
    user: '<'
  }
}

function xDy(x, y, bonus) {
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  bonus = parseInt(bonus || 0, 10);
  let add = (x,y) => x+y
  let sum = (lst) => _.reduce(lst, add, 0)
  let rolls = _.times(parseInt(x, 10), ()=>dX(y))

  return `${x}d${y} + ${bonus}: [${rolls.toString()}] = ${sum(rolls)+bonus}`;
}

function dX(x) {
  var y = _.random(1, x)
  console.log(`d${x} = ${y}`);
  return y;
}

export default messageCardComponent
