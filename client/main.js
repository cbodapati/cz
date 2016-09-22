
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as ItemsAlias } from '../imports/components/item/item.js';
import {name as SliderAlias } from '../imports/components/slider/slider.js';
import {name as ItemDetails } from '../imports/components/itemDetails/itemDetails.js';
import {name as Header } from '../imports/components/header/header.js';
import {name as Categories } from '../imports/components/categories/categories.js';

import '../imports/db/db.js';

angular.module('store', [angularMeteor, Header, Categories, ItemsAlias, SliderAlias, ItemDetails ])



function onReady()
{
    angular.bootstrap(document, ['store'],
                        { strictDi : true });
}

if(Meteor.isCordova)
{
    angular.element(document).on('deviceready', onReady);
}else
{
    angular.element(document).ready(onReady);
}