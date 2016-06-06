


;(function() {
  'use strict'
  /*
   * Make sure firebase is loaded
   */
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely.' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty.');
  }

  const app = {}

  /*
   * References to DOM
   */
   app.userPic = document.getElementById('user-pic');
   app.userName = document.getElementById('user-name');
   app.signInButton = document.getElementById('sign-in');
   app.signOutButton = document.getElementById('sign-out');
   app.signInSnackbar = document.getElementById('must-signin-snackbar');

  //  app.messageList = document.getElementById('messages');
   app.messageForm = document.getElementById('dice-form');
   app.dieQuanityInput = document.getElementById('die-quantity');
   app.dieDenominationInput = document.getElementById('die-denomination');

   app.submitButton = document.getElementById('dice-submit');

  //  app.signInButton.addEventListener('click', () => {
  //    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //  });
  //  app.signOutButton.addEventListener('click', () => auth.signOut());
  //  app.messageForm.addEventListener('submit', (e) => {
  //    e.preventDefault();
  //    // Check that the user entered a message and is signed in.
  //    if (app.dieQuanityInput.value && checkSignedInWithMessage()) {
  //      var currentUser = auth.currentUser;
  //      // Add a new message entry to the Firebase Database.
  //      app.messagesRef.push({
  //        name: auth.currentUser.displayName,
  //        text: xDy(app.dieQuanityInput.value, app.dieDenominationInput.value),
  //        timestamp: (new Date()).toString(),
  //        photoUrl: auth.currentUser.photoURL || '/images/profile_placeholder.png'
  //      }).then(function() {
  //        // Clear message text field and send button state.
  //        resetMaterialTextfield(app.dieQuanityInput);
  //        toggleButton();
  //      }.bind(this)).catch(function(error) {
  //        console.error('Error writing new message to Firebase Database', error);
  //      });
  //    }
  //  });

   // Toggle for the button.
  //  app.dieQuanityInput.addEventListener('keyup', toggleButton);
  //  app.dieQuanityInput.addEventListener('change', toggleButton);


   /*
    * Firebase references
    */

  //  let auth = firebase.auth();
  //  let database = firebase.database();


   /* Set up bindings
    */
  //  auth.onAuthStateChanged(function(user) {
  //    if (user) { // User is signed in!
  //      // Get profile pic and user's name from the Firebase user object.
  //      const profilePicUrl = user.photoURL;
  //      const userName = user.displayName;
   //
  //      // Set the user's profile pic and name.
  //      app.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
  //      app.userName.textContent = userName;
   //
  //      // Show user's profile and sign-out button.
  //      app.userName.removeAttribute('hidden');
  //      app.userPic.removeAttribute('hidden');
  //      app.signOutButton.removeAttribute('hidden');
   //
  //      // Hide sign-in button.
  //      app.signInButton.setAttribute('hidden', 'true');
   //
  //      // We load currently existing chant messages.
  //      loadMessages();
  //    } else { // User is signed out!
  //      // Hide user's profile and sign-out button.
  //      app.userName.setAttribute('hidden', 'true');
  //      app.userPic.setAttribute('hidden', 'true');
  //      app.signOutButton.setAttribute('hidden', 'true');
   //
  //      // Show sign-in button.
  //      app.signInButton.removeAttribute('hidden');
  //    }
  //  });


  //  function displayMessage (key, name, text, picUrl, timestamp) {
  //    var div = document.getElementById(key);
  //    // If an element for that message does not exists yet we create it.
  //    if (!div) {
  //      var container = document.createElement('div');
  //      container.innerHTML = MESSAGE_TEMPLATE;
  //      div = container.firstChild;
  //      div.setAttribute('id', key);
  //      app.messageList.appendChild(div);
  //    }
  //    if (picUrl) {
  //      div.querySelector('.pic').style.backgroundImage = 'url(' + picUrl + ')';
  //    }
  //    div.querySelector('.name').textContent = name;
  //    var messageElement = div.querySelector('.message');
  //    if (text) { // If the message is text.
  //      messageElement.textContent = text;
  //      // Replace all line breaks by <br>.
  //      messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  //    }
  //    div.querySelector('.timestamp').textContent = timestamp;
  //    // Show the card fading-in.
  //    setTimeout(function() {div.classList.add('visible')}, 1);
  //    app.messageList.scrollTop = app.messageList.scrollHeight;
  //    app.dieQuanityInput.focus();
  //  };

  //  function loadMessages() {
  //    // Reference to the /messages/ database path.
  //    app.messagesRef = database.ref('messages');
  //    // Make sure we remove all previous listeners.
  //    app.messagesRef.off();
   //
  //    // Loads the last 12 messages and listen for new ones.
  //    let setMessage = function(data) {
  //      var val = data.val();
  //      displayMessage(data.key, val.name, val.text, val.photoUrl, val.timestamp);
  //    };
  //    app.messagesRef.limitToLast(12).on('child_added', setMessage);
  //    app.messagesRef.limitToLast(12).on('child_changed', setMessage);
  //    app.messagesRef.on('child_removed', setMessage);
  //  };

  // function toggleButton() {
  //    if (app.dieQuanityInput.value) {
  //      app.submitButton.removeAttribute('disabled');
  //    } else {
  //      app.submitButton.setAttribute('disabled', 'true');
  //    }
  //  };


  function checkSignedInWithMessage() {
     // Return true if the user is signed in Firebase
     if (auth.currentUser) {
       return true;
     }
     // Display a message to the user using a Toast.
     app.signInSnackbar.MaterialSnackbar.showSnackbar({
       message: 'You must sign-in first',
       timeout: 2000
     });
     return false;
   };

   function resetMaterialTextfield (element) {
     element.value = '';
     element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
   };


  //  loadMessages();


})();







angular.module('diceApp').component('message', {
  template: ``,
  bindings: {
    message: '<'
  }
});

export default {};
