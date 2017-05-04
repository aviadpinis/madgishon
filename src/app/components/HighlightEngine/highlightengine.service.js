export class GithubContributorService {
  constructor ($log, $http) {
    'ngInject'

    this.manipulations = {
      Margins: 1,
      paint: 2,
      space: 3,
      // properties: {
      //   1: {name: "small", value: 1, code: "S"},
      //   2: {name: "medium", value: 2, code: "M"},
      //   3: {name: "large", value: 3, code: "L"}
      // }
    };
    this.whereInWord = {
      start:1,
      middle:2,
      end:3
    }
  }

  /**
   *
   * @param spec:
   * manipulation - type of Dyslexia
   * text - the input text for article
   * where - where i need to play manipulation
   */
  engine(spec) {
    switch(spec.manipulation){
      case Margins:

    }
  }
}
