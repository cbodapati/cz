
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as ItemsAlias } from '../imports/components/item/item.js';
import {name as SliderAlias } from '../imports/components/slider/slider.js';
import '../imports/db/db.js';

angular.module('store', [angularMeteor, ItemsAlias, SliderAlias ]);
