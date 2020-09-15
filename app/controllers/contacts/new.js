import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactsNewController extends Controller {
  @service router;

  @action
  async save(contact) {
    try {
      await contact.save();
    } catch (e) {
      alert(e);
      return;
    }
    alert('record created');
    this.router.transitionTo('contacts.view', contact.id);
  }
}
