import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './header.html';
import './header.css';

class HeaderCtrl
{

}

const name = "headerComponent";

export default angular.module(name,[angularMeteor])
        .component(name,
        {
            template,
            controllerAs :name,
            controller:HeaderCtrl    
        });
