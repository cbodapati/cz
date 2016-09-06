
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as HeaderAlias } from '../imports/components/header/header.js';
import { name as ItemsAlias } from '../imports/components/item/item.js';
import {name as SliderAlias } from '../imports/components/slider/slider.js';
import { name as CategoriesAlias } from '../imports/components/categories/categories.js';


import '../imports/db/db.js';

angular.module('store', [angularMeteor, HeaderAlias,ItemsAlias, SliderAlias, CategoriesAlias ]);
