import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr nameFirst;
  @attr nameLast;
  @attr email;
  @attr twitter;
}
