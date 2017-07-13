import DS from 'ember-data';

export default DS.Model.extend({
title: DS.attr(),
step1: DS.attr(),
step2: DS.attr(),
step3:DS.attr(),
step4:DS.attr(),
image1: DS.attr(),
image2: DS.attr(),
extratips:DS.attr(),
video: DS.attr()
});
