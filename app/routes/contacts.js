import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactsRoute extends Route {
  @service ellaSparse;
  @service store;

  async model(params) {
    return this.ellaSparse.array(async (range = {}, query = {}) => {
      // TODO: How does range get set?
      let page = {
        size: 50, //get(range, 'length') || 10,
        number: this.range?.start || 1
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
