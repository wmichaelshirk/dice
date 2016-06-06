import template from './main.html'

let mainComponent = {
  template,
  controller: function User(Auth) {
    let ctrl = this;
    ctrl.auth = Auth;
    ctrl.auth.$onAuthStateChanged(function(authData) {
      ctrl.authData = authData;
    })
  }
}

export default mainComponent
