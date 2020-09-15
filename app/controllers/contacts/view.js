import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ContactsViewController extends Controller {
  @action
  async save(contact) {
    try {
      await contact.save();
    } catch (e) {
      alert(e);
    } finally {
      alert('record saved');
    }
  }
}
