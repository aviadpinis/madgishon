/**
 * Created by Yael on 04/05/2017.
 */
export function showImageExDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/showImageEx/showImageEx.html',
    scope: {
      creationDate: '='
    },
    controller: ShowImageExController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ShowImageExController {
  /*  constructor () {
    'ngInject';
    var data = {
      name: "exName",
      dyslexiaType: "bla",
      level: 5,
      questions:[
        {
          img_url: "https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          answers: [
            "1answer1",
            "1answer2",
            "1answer3",
            "1answer4",
            "1answer5",
            "1answer6",
            "1answer7"
          ],
          right_answer: "1answer4"
        },
        {
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png",
          answers: [
            "2answer1",
            "2answer2",
            "2answer3",
            "2answer4"
          ],
          right_answer: "2answer2"
        }
      ]
    };
*/
//TODO: add user name as parameter
    constructor (moment,$stateParams,$http,configapp){
  'ngInject';

  this.http = $http;
  this.config = configapp;

  //TODO: id variable
  /*    var id ="590bdc4236c74f47ab22d6e1";
  this.http.get(this.config.urlforGetTestById+id).then(
    function successCallback(response) {
    this.responseData = response;
  }, function errorCallback() {
    //throw exception("Error response: "+response);
  });

  // "this.creationDate" is available by directive option "bindToController: true"
  this.testShetach = this.http.responseData;*/
  this.testShetach = this.config.testShetach;
  this.questions = this.shuffle(this.testShetach.questions);
  this.questionIndex = 0;
  this.initImgEx(this.questions[this.questionIndex]);


  this.testRes = {
    name: this.testShetach.name,
    dyslexiaType: this.testShetach.dyslexiaType,
    level: this.testShetach.level,
    results: []
  };


}

  initImgEx (data){
  this.imgEx = {};
  this.imgEx.img_url = data.img_url;
  this.imgEx.answers = this.shuffle(data.answers);
  this.imgEx.right_answer = data.right_answer;

  //TODO: add here real parameters
  this.imgEx.exName = this.testShetach.name;
  this.imgEx.exLevel = this.testShetach.level;
}

  submit(answer){
   //save current question results
    var isSuccess = Number(answer==this.imgEx.right_answer);

    if(answer=="skiped"){
      isSuccess = -1;
    }

    var currRes = {
      exName: this.imgEx.exName,
      img_url: this.imgEx.img_url,
        isSuccess: isSuccess,
        right_answer: this.imgEx.right_answer,
      answer: answer
      };
    this.testRes.results.push(currRes);

    //TODO: add here - display question correct answer

    if(this.isLastQuestion()){
      //send json to server

    } else {
      //go to next question
      this.questionIndex++;
      this.initImgEx(this.questions[this.questionIndex]);
    }

    //TODO:add here check if last question over
  }

  isLastQuestion() {
    return this.questionIndex === this.questions.length - 1;
  }

  shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}


