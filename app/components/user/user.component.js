import template from './user.html'

let userComponent = {
  template,
  controller: function User(Auth) {
    let ctrl = this;
    ctrl.auth = Auth;
    // any time auth status updates, add the user data to scope
    ctrl.auth.$onAuthStateChanged(function(authData) {
      ctrl.authData = authData;
    });
  }
}
export default userComponent
