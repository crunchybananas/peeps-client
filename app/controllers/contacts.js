import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactsController extends Controller {
  @service router;

  @action
  goto(contact) {
    this.router.transitionTo('contacts.view', contact.id);
  }
}
