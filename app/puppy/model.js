import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  breed: DS.attr(),
  image1: DS.attr(),
  image2: DS.attr(),
  image3: DS.attr(),
  nickname: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  gender: DS.attr(),
  color: DS.attr(),
  recomendation: DS.attr(),
  price: DS.attr(),
});
