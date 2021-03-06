import DS from 'ember-data';
import NormalizePatchMixin from 'ember-theater/mixins/json-serializer-normalize-patch';

const { JSONSerializer } = DS;

export default JSONSerializer.extend(NormalizePatchMixin);
