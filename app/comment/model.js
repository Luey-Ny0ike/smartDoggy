import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  comment: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr()
});
