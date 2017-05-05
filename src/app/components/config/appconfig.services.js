/**
 * Created by aviad on 04 מאי 2017.
 */
export class ConfigApp {
  constructor($state){
    'ngInject';
    this.dyslexia = [
      "אגנזויה לאותיות",
      "שיכול אותיות - lcd",
      "נגלקט",
      "שטח",
      "שטח",
      "אימות קריאה"
    ];

    this.state = $state;
    /*this.urlforSendQues = "http://localhost:3001/api/exercise";
    this.urlforGetAllTests = "http://localhost:3001/api/exercises";
    this.urlforGetTestById = "http://localhost:3001/api/exercise/";*/
    this.urlforSendQues = "http://172.22.2.139:3001/api/exercise";
    this.urlforGetAllTests = "http://172.22.2.139:3001/api/exercises";
    this.urlforGetTestById = "http://172.22.2.139:3001/api/exercise/";

    this.goToState = function(stateName){
      this.state.go(stateName);
    }

    this.goToStateWithParms = function(stateName,parmas){
      this.state.go(stateName,{obj:parmas});
    }


    this.testShetach = {
      "name": "מה בתמונה",
      "dyslexiaType": "שטח",
      "level": 4,
      "questions": [
        {
          "img_url": "../assets/images/wife.png",
          "answers": [
            "קלה",
            "כלה",
            "קלע",
            "כלא"
          ],
          "right_answer": "כלה"
        },
        {
          "img_url": "../assets/images/ship.png",
          "answers": [
            "שתה",
            "שטה"
          ],
          "right_answer": "שתה"
        },
        {
          "img_url": "../assets/images/squere.png",
          "answers": [
            "מרובה",
            "מרובע"
          ],
          "right_answer": "מרובע"
        },
        {
          "img_url": "../assets/images/shark.png",
          "answers": [
            "קריש",
            "כריש"
          ],
          "right_answer": "כריש"
        },
        {
          "img_url": "../assets/images/monkeys.png",
          "answers": [
            "כופים",
            "קופים"
          ],
          "right_answer": "קופים"
        },
        {
          "img_url": "../assets/images/mazza.png",
          "answers": [
            "מצה",
            "מצא"
          ],
          "right_answer": "מצה"
        },
        {
          "img_url": "../assets/images/king.png",
          "answers": [
            "מלך",
            "מלח"
          ],
          "right_answer": "מלך"
        },
        {
          "img_url": "../assets/images/clock.png",
          "answers": [
            "שאון",
            "שעון"
          ],
          "right_answer": "שעון"
        },
        {
          "img_url": "../assets/images/mailman.png",
          "answers": [
            "דוור",
            "דבר"
          ],
          "right_answer": "דוור"
        },
        {
          "img_url": "../assets/images/chair.png",
          "answers": [
            "כיסא",
            "כיסה"
          ],
          "right_answer": "כיסא"
        },
        {
          "img_url": "../assets/images/four.png",
          "answers": [
            "ארבה",
            "ארבע"
          ],
          "right_answer": "ארבע"
        },
        {
          "img_url": "../assets/images/colors.png",
          "answers": [
            "צבעים",
            "צבאים"
          ],
          "right_answer": "צבעים"
        },
        {
          "img_url": "../assets/images/dragon.png",
          "answers": [
            "דרכון",
            "דרקון"
          ],
          "right_answer": "דרקון"
        },
        {
          "img_url": "../assets/images/table.png",
          "answers": [
            "טבלה",
            "תבלה"
          ],
          "right_answer": "טבלה"
        }
      ]
    }
  }
}
