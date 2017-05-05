export function ClientPrograssDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/clientprograss/clientprograss.html',
    scope: {
      creationDate: '='
    },
    controller: ClientPrograssController,
    controllerAs: 'vm'
  };

  return directive;
}

export class ClientPrograssController {
  constructor () {
    'ngInject';
    // this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    // this.series = ['Series A', 'Series B'];
    //
    //  this.data = [
    //    [65, 59, 80, 81, 56, 55, 40],
    //    [28, 48, 40, 19, 86, 27, 90]
    //  ];

    this.myTests=[
      {
        name:"מבחן 1",
        questions:[
          {
            img_url:"url1",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url2",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url3",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url4",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url5",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url6",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url7",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url8",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url9",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url10",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          }
        ]
      },
      {
        name:"מבחן 2",
        questions:[
          {
            img_url:"url1",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url2",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url3",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url4",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url5",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url6",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url7",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url8",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url9",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url10",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          }
        ]
      },
      {
        name:"מבחן 3",
        questions:[
          {
            img_url:"url1",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url2",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url3",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url4",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url5",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url6",
            myAnswer:"לא נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url7",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          },
          {
            img_url:"url8",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url9",
            myAnswer:"-1",
            corectAnswer:"נכון"
          },
          {
            img_url:"url10",
            myAnswer:"נכון",
            corectAnswer:"נכון"
          }
        ]
      },
    ]

    this.series = ["true","false","skip"];
    this.data = []
    this.data = this.calcData();
    this.labels = []
    this.calcLabels();
  }

  calcLabels(){
    for(var obj in this.myTests){
      this.labels.push(this.myTests[obj].name);
    }
  }

  calcDataForSpecificTest(theTest){
    var ans = {true:0,false:0,skip:0};
    for(var que  in theTest.questions){
      var myque=theTest.questions[que];
      if(myque.myAnswer=="-1")
      {
        ans["skip"] = ans["skip"]+1
      }
      if(myque.myAnswer==myque.corectAnswer)
      {
        ans["true"] = ans["true"]+1;
      }
      else{
        ans["false"] = ans["false"]+1;
      }
    }
    return ans;
  }
  calcData(){
    var that=this;
    var newdata = []
    for(var i=0;i<this.myTests.length;i++){
      newdata.push(this.calcDataForSpecificTest(this.myTests[i]));
    }
    var j=0;
    for(var ser in this.series){
      that.data[j]=[];
      for(i=0;i<newdata.length;i++){
        that.data[j].push(newdata[i][this.series[ser]]);
      }
      j++;
    }
    return that.data;
  }
  selectTest(theTest){
    this.specificTest = true;
    this.specificTestName = theTest.name;
    var dataTest = this.calcDataForSpecificTest(theTest)
    this.dataTest = [];
    for(var d in dataTest){
      this.dataTest.push(dataTest[d]);
    }
    this.labelsTest = ["true","false","skip"];
  }

}
