export class ShowImageExController {
  constructor () {
    'ngInject';
    var data = {
      "image_url":"blabla",
      "answers":[
        {
          "text": "1answer1",
          "index": 1
        },
        {
          "text": "1answer2",
          "index": 2
        },
        {
          "text": "1answer3",
          "index": 3
        },
        {
          "text": "1answer4",
          "index": 4
        }
      ],
      "right_answer":3
    };
    this.image_url= data.image_url;
    this.answers = data.answers;
    this.right_answer = data.right_answer;
    this.exName = "exName";
    this.exLevel = 5;
  }

  submit(){

  }
}

