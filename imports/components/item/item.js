import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './item.html';
import uiRouter from 'angular-ui-router';


import { name as ItemAddAlias } from '../itemAdd/itemAdd.js';
import { name as ImageUploadAlias } from '../image/upload.js';


class ItemsCtrl{

    constructor($scope, $reactive){
        'ngInject';

        $reactive(this).attach($scope);

        this.item = {};
        this.images = {};

        this.helpers({
                itemHelpers(){
                    return ItemsDB.find();
                }
        });
    }

    add()
    {
        ItemsDB.insert(this.item);
        this.item.name = "";
    }

    delete(id)
    {
        ItemsDB.remove(id);
    }
    
}

const name = 'itemListComponent';
export default angular.module(name, [angularMeteor,ItemAddAlias, ImageUploadAlias, uiRouter ])
    .component(name,
    {
        template,
        controllerAs : name,
        controller: ItemsCtrl
    })
     .config(config);
 
function config($locationProvider,$stateProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
    $stateProvider
    .state('items', {
      url: '/items',
      template: '<item-list-component></item-list-component>'
    });
    
  $urlRouterProvider.otherwise('/items');
}

   