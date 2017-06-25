import DS from 'ember-data';

export default DS.Model.extend({
name: DS.attr(),
age: DS.attr(),
breed: DS.attr(),
color: DS.attr(),
nickname: DS.attr(),
title: DS.attr(),
description: DS.attr(),
});
