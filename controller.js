angular.module('quoteBook').controller('mainControl', function($scope, mainService) {

  $scope.quotes = mainService.getData();

  $scope.deleteMe = function (quoteToDelete) {
    mainService.removeData(quoteToDelete);
  };

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    mainService.addData(newQuote);
  };




  // end of controller
});
