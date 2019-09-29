// import './demo07-modules-multi-main.js';
// import './demo09-collection-2-array.js';
// import './demo10-array-map.js';
// import './demo11-array-util.js';
// import './demo03-rest.js';
// import './demo12-function-param.js';
// import './demo13-tail.js';
// import './demo14-method-prop';
// import './demo15-symbol.js';
// import './demo16-set';
// import './demo17-map.js';
// import './demo18-array-vs-map.js';
// import './demo18-object.js';
// import './demo19-proxy.js';
// import './demo20-reflect.js';
// import './demo21-class.js';
// import './demo22-promise.js';
// import './demo23-iterator.js';
// import './demo24-generator.js';
// import './demo25-decorator.js';
// import './demo26-decorator.js';
// import './demo27-type-validation.js';
// import './demo28-for-of.js';
// import './demo-test.js';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]       : 'All',
  [SHOW_ACTIVE]    : 'Active',
  [SHOW_COMPLETED] : 'Completed'
}

Object.keys(FILTER_TITLES).map(filter =>
  console.log(filter)
)
