
export function HighlightEngineDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/HighlightEngine/highlightEngine.html',
    scope: {
      creationDate: '='
    },
    controller: HighlightEngineController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HighlightEngineController {
  constructor () {
    'ngInject'

    this.manipulations = {
      Margins: 1,
      paint: 2,
      space: 3,
    };
    this.whereInWord = {
      start:1,
      middle:2,
      end:3
    }

    this.output= "</p>בדיקה<p>"   }

  /**
   *
   * @param spec:
   * manipulation - type of Dyslexia
   * text - the input text for article
   * where - where i need to play manipulation
   */
  engine(spec) {
    this.checkFields(spec)
    if(this.hasOwnProperty('manipulation') && this.hasOwnProperty('where')) {
      switch (this.where) {
        case "start":
          this.addToStart();
          break;
        case "middle":
          this.addTomiddle();
          break;
        case "end":
          this.addToEnd();
          break;
      }
    }
  }

  checkFields(spec){
    if(spec.hasOwnProperty('manipulation')){
      this.manipulation = spec.manipulation;
    }
    if(spec.hasOwnProperty('where')){
      this.where = spec.where;
    }
  }

  addToStart(){
    var str = this.input.split(" ");
    switch(this.manipulation){
      case "Margins":
        for(var i=0;i<str.length;i++){
          // str[i][2].push("/b")
          // str[i][0].push("b")
          str[i] = "<b>".concat(str[i].substring(0,1),"</b>".concat(str[i].substring(1)));
        }
        break;
      case "paint":
        for(i=0;i<str.length;i++){
          str[i][2].push("/font");
          str[i][0].push("<font color='red'>");
        }
        break;
      case "space":
        str[i][1].push(" ");
        break;
    }
    this.appendStr(str);
  }

  addToEnd(){
    var str = this.input.split(" ");
    switch(this.manipulation){
      case "Margins":
        for(var i=0;i<str.length;i++){
          str[i] = "<b>".concat(str[i].substring(0,1),"</b>".concat(str[i].substring(1)));
          // str[i][str[i].length-1].push
        }
        break;
      case "paint":
        for(i=0;i<str.length;i++){
          str[i][str[i].length-2].push("/font");
          str[i][str[i].length-1].push("<font color='red'>");
        }0
        break;
      case "space":
        str[i][str[i].length-2].push(" ");
        break;
    }
    this.appendStr(str);
  }

  appendStr(str){
    var output = str.toString();
    var el = angular.element(document.getElementById("output"));
    output = output.replace(/,/g , " ");
    el.clear;
    el.append(output);
    // this.document.getElementById("output").insertAdjacentHTML('beforebegin', output);
  }
}
