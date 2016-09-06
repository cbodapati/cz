import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './categories.html';


class CategoriesCtrl
{

}

const name = "categoriesComponent";

export default angular.module(name,[angularMeteor])
        .component(name,
        {
            template,
            controllerAs :name,
            controller:CategoriesCtrl    
        });
