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

    // "this.imgEx.creationDate" is available by directive option "bindToController: true"
    this.imgEx.relativeDate = moment(this.imgEx.creationDate).fromNow();
    this.imgEx.imgEx = {img_url: "", answers:[]};
    this.imgEx.master = this.imgEx.imgEx;
    this.imgEx.imgEx.answers = [""];
  }

  update(){
    this.imgEx.master = angular.copy(this.imgEx.imgEx);
  }

  reset() {
    this.imgEx.imgEx = angular.copy(this.imgEx.master);
  }

  addNewChoice(){
    this.imgEx.imgEx.answers.push("");
  }

  removeChoice(answer) {
  var index = this.imgEx.imgEx.answers.indexOf(answer);
  this.imgEx.imgEx.answers.splice(index, 1);
  }
}

