'use strict';

angular.module('myApp.results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results/:query', {
    templateUrl: 'results/results.html',
    controller: 'ResultsCtrl'
  });
}])

.controller('ResultsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  
  var query = $routeParams.query;
  $scope.query = query;

  // compare Function
  var compare = function(query) {
    console.log('comparing in results page...');
    var x;
    var titlesArray = [];
    var urlsArray = [];
    for(x in data) {
      var title = data[x].title.toLowerCase();
      if(title.includes(query)) {
        titlesArray.push(data[x].title);
        urlsArray.push(data[x].url);
      } else {
        // console.log('no match');
      }
    }
    console.log(titlesArray);
    $scope.total = titlesArray.length;
    if(titlesArray.length>0) {
      printArticles(titlesArray, urlsArray);
    }
  }

  // printLinks Function
  var printArticles = function(titles, urls) {
    console.log('printing in results page...');
    $("#results li").empty();
    var y;
    for(y in titles) {
      $("#results").append('<li><h3>'+titles[y]+'</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi risus, vehicula nec libero eu, lacinia placerat purus. In semper urna enim, non eleifend mi tempus a. Curabitur feugiat consectetur odio quis facilisis.</p></li><hr>');
    }
  }

  var data = [
    {
      title: "What Is IPF?",
      id: 1,
      url: "https://www.lungsandyou.com/facts/what-is-ipf"
    },
    {
      title: "Lung Function and IPF",
      id: 2,
      url: "https://www.lungsandyou.com/facts/lung-function-and-ipf"
    },
    {
      title: "How IPF Affects the Body",
      id: 3,
      url: "https://www.lungsandyou.com/facts/effects-of-ipf"
    },
    {
      title: "Possible IPF Risk Factors",
      id: 4,
      url: "https://www.lungsandyou.com/facts/ipf-risk-factors"
    },
    {
      title: "Symptoms of IPF",
      id: 5,
      url: "https://www.lungsandyou.com/facts/ipf-symptoms"
    },
    {
      title: "Personalized Doctor Discussion Guide",
      id: 6,
      url: "https://www.lungsandyou.com/facts/doctor-discussion"
    },
    {
      title: "How Is IPF Diagnosed?",
      id: 7,
      url: "https://www.lungsandyou.com/facts/ipf-diagnosis"
    },
    {
      title: "Tracking the Progression of IPF",
      id: 8,
      url: "https://www.lungsandyou.com/facts/tracking-ipf-progression"
    },
    {
      title: "What Should I Expect as IPF Progresses?",
      id: 9,
      url: "https://www.lungsandyou.com/facts/ipf-progression"
    }
  ];

  // Start
  compare(query);

}]);