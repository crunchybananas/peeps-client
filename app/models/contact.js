import Model, { attr, hasMany } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr nameFirst;
  @attr nameLast;
  @attr email;
  @attr twitter;

  @hasMany('phoneNumber') phoneNumbers;
}
