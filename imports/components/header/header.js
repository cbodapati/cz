import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './header.html';
import './header.css';
import '../../materialize/materialize.css';

class HeaderCtrl
{

}

const name = "headerComponent";

export default angular.module(name,[angularMeteor, 'accounts.ui'])
        .component(name,
        {
            template,
            controllerAs :name,
            controller:HeaderCtrl    
        });
