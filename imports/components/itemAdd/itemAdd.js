import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './itemAdd.html';
import '../../db/db.js';

class ItemAddCtrl
{
    constructor(){
        this.item = {};
    }

    add()
    {
        ItemsDB.insert(this.item);
        console.log("in add" + this.item);
    }

    edit()
    {
        console.log("in edit");
    }
}

const name = "itemAddComponent";

export default angular.module(name, [angularMeteor])
        .component(name,
        {
            template,
            controllerAs:name,
            controller:ItemAddCtrl
        });