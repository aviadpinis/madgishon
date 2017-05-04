/**
 * Created by Yael on 04/05/2017.
 */
export function addImgExDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/addImgEx/addImgEx.html',
    scope: {
      creationDate: '='
    },
    controller: addImgExController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class addImgExController {
  constructor (moment) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.imgEx = {img_url: "", answers:[]};
    this.master = this.imgEx;
    this.imgEx.answers = [{text: ""}];
  }

  update(){
    this.master = angular.copy(this.imgEx);
  }

  reset() {
    this.imgEx = angular.copy(this.master);
  }

  addNewChoice(){
    this.imgEx.answers.push({text: ""});
  }

  removeChoice(index) {
  //var lastItem = this.imgEx.answers.length-1;
  this.imgEx.answers.splice(index-1, 1);
  }
}

