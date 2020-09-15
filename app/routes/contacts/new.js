import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactsNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('contact');
  }
}
