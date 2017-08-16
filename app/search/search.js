'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$location', function($scope, $location) {

  var prevQuery = [];

  // Detecting activity on INPUT
  $("#mySearch").on("focusin keyup paste", function(){
    var query = $(this).val().toLowerCase();
    if(query.length>2) {
      queryToArray(query);
    } else {
      $("#links li").empty();
    }
  });

  // Detecting 'focusout' on INPUT
  $("#mySearch").on("focusout", function(){
    setTimeout(function() {
      $("#links li").empty();
      prevQuery = [];
    }, 100);
  });

  // queryToArray Function
  var queryToArray = function(query) {
    var i;
    var words = [];
    query = query.split(/[^a-z]+/);
    for(i in query) {
      if(query[i].length>=3) {
        words.push(query[i]);
      }
    }
    if(words.length>0 && words.toString()!==prevQuery.toString()) {
      prevQuery = words;
      console.info('searching terms: '+words);
      compare(words);
    }
  }

  // compare Function
  var compare = function(wordsArray) {
    console.log('comparing...');
    var i;
    var j;
    var titlesArray = [];
    var urlsArray = [];
    var orderArray = [];
    for(i in data) {
      var title = data[i].title.toLowerCase();
      for(j in wordsArray) {
      var word = wordsArray[j];
        if(title.includes(word)) {
          titlesArray.push(data[i].title);
          urlsArray.push(data[i].url);
          orderArray.push(data[i].id);
          break;
        }
      }
      if(titlesArray.length>4) {
        break;
      }
    }
    // console.log(titlesArray, orderArray);
    if(titlesArray.length>0) {
      printLinks(titlesArray, urlsArray);
    } else {
      $("#links li").empty();
    }
  }

  // printLinks Function
  var printLinks = function(titles, urls) {
    console.log('printing...');
    $("#links li").empty();
    var y;
    for(y in titles) {
      $("#links #li-pos"+y).append('<a href="'+urls[y]+'" target="_blank">'+titles[y]+'</a>');
      // console.log(titles[y]);
    }
  }

  // search Function
  $scope.search = function() {
    if($("#mySearch").val().length>2) {
      console.log('searching...');
      $location.path('/results/'+$("#mySearch").val());
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

  $scope.data = data;

}]);