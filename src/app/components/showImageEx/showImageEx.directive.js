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
  constructor () {
    'ngInject';
    var data = {
      "img_url": "https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      "answers": [
        "1answer1",
        "1answer2",
        "1answer3",
        "1answer4",
        "1answer5",
        "1answer6",
        "1answer7"
      ],
      "right_answer": "1answer4"
    };
    this.imgEx = {};
    this.imgEx.img_url = data.img_url;
    this.imgEx.answers = this.shuffle(data.answers);
    this.imgEx.right_answer = data.right_answer;
    this.imgEx.exName = "exName";
    this.imgEx.exLevel = 5;

    this.testRes = [];
  }

  submit(answer){
   //save current question results
    var isSuccess = (answer==this.imgEx.right_answer);
    var currRes = {
      exName: this.imgEx.exName,
      img_url: this.imgEx.img_url,
        isSuccess: isSuccess,
        right_answer: this.imgEx.right_answer,
      answer: answer
      };
    this.testRes.push(currRes);

    //TODO: add here - display question correct answer

    //pass to next question


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


