import template from './messageList.html'

let messageListComponent = {
  template,
  controller: function() {
    console.log("hi, messagelist")
    console.log(this.messages);
  },
  bindings: {
    messages: '<'
  }
}

export default messageListComponent
