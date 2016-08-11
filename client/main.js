import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import Auth0Lock from 'auth0-lock';

import './main.html';

const AUTH0_CLIENT_ID = null;
const AUTH0_DOMAIN = null;

Template.hello.onCreated(function helloOnCreated () {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function helloOnRendered () {
  // counter starts at 0
  Lock = new Auth0Lock(
    AUTH0_CLIENT_ID,
    AUTH0_DOMAIN);
  Lock.show();
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
