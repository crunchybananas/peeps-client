import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default class ContactsRoute extends Route {
  @service ellaSparse;
  @service store;

  range = {
    length: 50,
    start: 1
  }

  async model(params) {
    return this.ellaSparse.array(async (range = {}, query = {}) => {
      // Use get as we need the values in the scope of the sparse array.
      let page = {
        size: get(range, 'length') || 10,
        number: get(range, 'start') || 1
      };
      query.include = 'phone-numbers';
      query.page = page;
      // Return a Promise that resolves with the array of fetched data
      // and the total available records
      let result = await this.store.query('contact', query);

      return {
        data: result,
        // TODO: do a calculation based on link.last
        total: 401 //result.meta?.page.total
      }
    });
  }
}
