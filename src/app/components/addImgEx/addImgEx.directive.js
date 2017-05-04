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
  constructor (moment,$stateParams,$http,configapp) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.testData = $stateParams.obj;
    this.testData.questions = [];
    this.relativeDate = moment(this.creationDate).fromNow();
    this.imgEx = {img_url: "", answers:[]};
    this.imgEx.answers = [{text: ""}];
    this.master = angular.copy(this.imgEx);
    this.http = $http;
    this.config = configapp
  }

  update(){
    this.master = angular.copy(this.imgEx);
  }

  next(){
    var strings = [];
    for(var i=0;i<this.imgEx.answers.length;i++){
      strings.push(this.imgEx.answers[i].text);
    }
    this.imgEx.answers = strings;
    this.testData.questions.push(this.imgEx);
    this.reset()
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

  finish()
  {
    that = this;
    this.http.post(this.config.urlforSendQues,this.testData)
    .then(
      function(response){
        that.config.goToState("home");
      },
      function(response){
        // failure callback
      }
    );
  }
}

