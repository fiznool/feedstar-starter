'use strict';

angular
  .module('feedstar')
  .controller('FeedController', function(FeedFactory) {
    var $ctrl = this;

    $ctrl.feedUrl = FeedFactory.retrieveFeedUrl();

  });
