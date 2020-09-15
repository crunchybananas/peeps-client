import Model, { attr, belongsTo } from '@ember-data/model';

export default class PhoneNumberModel extends Model {
  @attr name;
  @attr phoneNumber;

  @belongsTo('contact') contact;
}
