import angular from 'angular';
import angularMeteor from 'angular-meteor';
import './imgslider.js';
import './slider.css';
import template from './slider.html';


class SliderCtrl
{

}

const name = "sliderComponent";

export default angular.module(name ,[angularMeteor])
        .component(name,
        {
           template,
           controllerAs:name,
           controller: SliderCtrl     
        });
