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
      "קישבית",
      "שטח",
      "אימות קריאה"
    ];

    this.state = $state;
    this.urlforSendQues = ""


    this.goToState = function(stateName){
      this.state.go(stateName);
    }

    this.goToStateWithParms = function(stateName,parmas){
      this.state.go(stateName,{obj:parmas});
    }
  }
}
