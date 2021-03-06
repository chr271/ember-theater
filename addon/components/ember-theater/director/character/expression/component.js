import Ember from 'ember';
import DirectableComponentMixin from 'ember-theater/mixins/directable-component';
import VelocityLineMixin from 'ember-theater/mixins/velocity-line';

const {
  Component,
  computed,
  get,
  inject
} = Ember;

const { alias } = computed;

export default Component.extend(DirectableComponentMixin, VelocityLineMixin, {
  attributeBindings: ['caption:alt', 'src'],
  classNames: ['et-character-expression'],
  tagName: 'img',

  translator: inject.service('ember-theater/translator'),

  src: alias('expression.src'),

  caption: computed('expression.caption', {
    get() {
      const fallback = get(this, 'expression.caption');
      const translation = `expressions.${this.get('expression.id')}`;

      return get(this, 'translator').translate(fallback, translation);
    }
  })
});
