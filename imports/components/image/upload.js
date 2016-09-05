import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngFileUpload from 'ng-file-upload';
 
import { Meteor } from 'meteor/meteor';
 
import template from './upload.html';
 
class ImageUpload {}
 
const name = 'imageUploadComponent';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ImageUpload
});