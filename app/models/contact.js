import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr email;
  @attr twitter;
}
