import Ember from 'ember';
import layout from './template';
import { configurableClassNames } from 'ember-theater/macros/configurable';

const { Component } = Ember;
const { inject: { service } } = Ember;
const { computed: { reads } } = Ember;

export default Component.extend({
  layout,

  classNames: ['et-menu-bar-container'],

  config: service('ember-theater/config'),
  producer: service('ember-theater/producer'),

  components: reads('producer.emberTheaterMenuBar'),
  configurableClassNames: configurableClassNames('menuBar'),

  actions: {
    toggleControlProperty(property) {
      this.toggleProperty(property);
    }
  }
});
