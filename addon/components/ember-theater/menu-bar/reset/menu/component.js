import Ember from 'ember';
import Menu from 'ember-theater/components/ember-theater/menu-bar/menu/component';

const { get } = Ember;

const { computed: { reads } } = Ember;
const { inject: { service } } = Ember;

export default Menu.extend({
  header: 'ember-theater.menu.reset.header',
  menuClassNames: reads('config.menuBar.reset.classNames'),

  saveStateManager: service('ember-theater/save-state-manager'),
  sceneManager: service('ember-theater/scene-manager'),

  populateChoices() {
    const choices = get(this, 'choices');

    choices.pushObject({
      text: 'ember-theater.menu.reset.confirm'
    });
  },

  resolve(choice) {
    switch (get(choice, 'key')) {
      case 1:
        get(this, 'saveStateManager').resetAutosave();
        get(this, 'sceneManager').resetScene();
        break;
    }

    this.attrs.closeMenu();
  }
});
