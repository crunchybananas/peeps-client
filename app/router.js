import EmberRouter from '@ember/routing/router';
import config from 'peeps-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('contacts', function() {
    this.route('view', { path: ':contact_id/view' });
  });
});
