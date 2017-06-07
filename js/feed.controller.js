'use strict';

angular
  .module('feedstar')
  .controller('FeedController', function($scope, FeedFactory) {
    $scope.feedSettings = {
      url: FeedFactory.retrieveFeedUrl()
    };
  });
