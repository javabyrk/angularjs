var app = angular.module('userApp', []);

app.controller('userCtrl', function($scope){
  $scope.numbers = [1,2,3,4,777,1901,0];
});

app.filter('ordinal', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var lastDigit = number % 10;
      if(lastDigit === 1){
        return number + 'st'
      } else if(lastDigit === 2){
        return number + 'nd'
      } else if (lastDigit === 3){
        return number + 'rd'
      } else if (lastDigit > 3){
        return number + 'th'
      }
    }
  }
});

app.filter('mycurrency', function(){
  return function(number,param1,param2){
      return param1+number+param2;
  }
});