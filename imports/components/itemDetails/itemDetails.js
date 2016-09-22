import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './itemDetails.html';

class ItemDetailsCtrl
{
    constructor( $stateParams)
    {
        'ngInject';

        this.itemId = $stateParams.itemId;
    }
}

const name = 'itemDetailsComponent';

export default angular.module(name, [ angularMeteor ])
    .component(name, {
        template,
        controllerAs: name,
        controller: ItemDetailsCtrl
    })
     .config(config);
 
function config($locationProvider,$stateProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
    $stateProvider
    .state('itemDetails', {
      url: '/items/:itemId',
      template: '<item-details-component></item-details-component>'
    });
    
  $urlRouterProvider.otherwise('/items');
}
   