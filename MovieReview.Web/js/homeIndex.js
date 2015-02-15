/// <reference path="../Scripts/jquery-1.10.2.min.js" />

//homeindex.js

//Created Module with the name homeIndex and wired up required dependencies
var homeIndexmodule = angular.module("homeIndex", ['ui.bootstrap', 'ngRoute', 'movieReviewEdit']);

//Route Configuration
homeIndexmodule.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "homeIndexController",
        templateUrl: "/templates/home.html"
    });

    $routeProvider.when("/movies", {
        controller: "homeIndexController",
        templateUrl: "/templates/movies.html"
    });

    $routeProvider.when("/newMovie", {
        controller: "newMovieController",
        templateUrl: "/templates/newMovie.html"
    });
    $routeProvider.when("/reviews/:Id", {
        controller: "reviewsController",
        templateUrl: "/templates/reviews.html"
    });

    $routeProvider.when("/newReview/:Id", {
        controller: "newreviewController",
        templateUrl: "/templates/newReview.html"
    });

    $routeProvider.when("/aboutapp/", {
        controller: "",
        templateUrl: "/templates/aboutapp.html"
    });

    $routeProvider.when("/contactme/", {
        controller: "",
        templateUrl: "/templates/contactme.html"
    });
    //Default back to home page, if couldn't find the path specified
    $routeProvider.otherwise({ redirectTo: "/" });
}]);

//Dataservice code, SRP for datacall handlings
homeIndexmodule.factory("dataService", ["$http", "$q", function ($http, $q) {

    var _movies = [];
    var _reviews = [];
    //function to retrieve movies
    var _getMovies = function () {

        //For resolving the promise
        var deferred = $q.defer();
        $http.get('/api/movies')
            .then(function (result) {
                //Success
                //angular.copy copies the collection from source to destination
                angular.copy(result.data, _movies);
                deferred.resolve();
            },
                function () {
                    //Error
                    deferred.reject();
                });
        return deferred.promise;
    };

    //Fetch Movie By Id
    var _getMovieById = function (Id) {
        var deferred = $q.defer();
        $http.get('/api/movies/' + Id)
            .then(function (result) {
                //Success
                //result.data will return the data back to the caller
                deferred.resolve(result.data);
            }, function () {
                //Error
                deferred.reject();
            });
        return deferred.promise;
    }
    //Adding New Movie
    var _addMovie = function (newMovie) {
        var deferred = $q.defer();
        $http.post('/api/movies', newMovie)
                .then(function (result) {
                    //Success
                    deferred.resolve();
                },
                    function () {
                        //Error
                        deferred.reject();
                    });
        return deferred.promise;
    }
    //Editing Movie
    var _movieEdit = function (movie) {
        var deferred = $q.defer();
        $http.put('/api/Movies/', movie)
            .then(function () {
                //Success
                deferred.resolve();
            }, function () {
                //Error
                deferred.reject();
            });
        return deferred.promise;
    }
    //Deleting Movie
    var _removeMovie = function (Id) {
        var deferred = $q.defer();
        $http.delete('/api/Movies/' + Id)
            .then(function () {
                //Success
                deferred.resolve();
            },
                function () {
                    //Error
                    deferred.reject();
                });
        return deferred.promise;
    }

    var _getReviews = function (Id) {
        var deferred = $q.defer();
        $http.get('/api/MovieReviews/' + Id)
            .then(function (result) {
                //Success
                angular.copy(result.data, _reviews);
                deferred.resolve();
            }, function () {
                //Error
                deferred.reject();
            });
        return deferred.promise;
    }

    var _getReviewById = function (Id) {
        var deferred = $q.defer();
        _getReviews(Id)
            .then(function () {
                //Success
                if (_reviews) {
                    deferred.resolve(_reviews);
                } else {
                    deferred.reject();
                }
            }, function () {
                //Error
                deferred.reject();
            });
        return deferred.promise;
    }

    //Adding Review
    var _addReview = function (MovieId, newReview) {
        var deferred = $q.defer();
        $http.post('/api/MovieReviews/' + MovieId, newReview)
            .then(function () {
                //success
                deferred.resolve();
            },
                function () {
                    //error
                    deferred.reject();
                });
        return deferred.promise;
    }

    //Get Review by ReviewerID
    var _getReviewByReviewerId = function (Id) {
        var deferred = $q.defer();
        $http.get('/api/Lookups/getbyreviewerid?id=' + Id)
            .then(function (result) {
                //Success
                deferred.resolve(result.data);
            }, function () {
                //Error
                deferred.reject();
            });
        return deferred.promise;
    };

    //Updating Review
    var _updateReview = function (newReview) {
        var deferred = $q.defer();
        $http.put('/api/MovieReviews/', newReview)
            .then(function () {
                //Success
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
        return deferred.promise;
    };

    //Deleting the Review
    var _removeReview = function (Id) {
        var deferred = $q.defer();

        $http.delete('/api/MovieReviews/' + Id)
            .then(function () {
                //success
                deferred.resolve();
            },
                function () {
                    //error
                    deferred.reject();
                });
        return deferred.promise;
    }

    //make available below properties for other parts of angular to use
    return {
        movies: _movies,
        reviews:_reviews,
        getMovies: _getMovies,
        getMovieById: _getMovieById,
        addMovie: _addMovie,
        movieEdit: _movieEdit,
        removeMovie: _removeMovie,
        getReviews: _getReviews,
        getReviewById: _getReviewById,
        addReview: _addReview,
        getReviewByReviewerId: _getReviewByReviewerId,
        updateReview: _updateReview,
        removeReview: _removeReview

    };
}]);
var homeIndexController = [
    "$scope", "$http", "dataService", "$window", function ($scope, $http, dataService, $window) {
        //Empty Collection
        $scope.data = dataService;

        $scope.addMovie = function() {
            $window.location = "#/newMovie";
        }
        //Making Spinner On
        $('#loader').show();
        //API Call 
        //Timeout function to show spinner
        setTimeout(function () {
            dataService.getMovies()
                .then(function () {

                    //For pagination
                    $scope.currentPage = 1;
                    $scope.numPerPage = 10;
                    $scope.maxSize = 11;

                    $scope.numPages = function () {
                        return Math.ceil($scope.data.movies.length / $scope.numPerPage);
                    };

                    $scope.$watch('currentPage + numPerPage', function () {
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;
                        $scope.filteredMovies = $scope.data.movies.slice(begin, end);

                    });
                    //Pagination code ends here
                    //success
                    toastr.success("Movies Fetched Successfully");
                }, function () {
                    //error
                    toastr.error("Error in fetching movies");
                })
                .then(function () {
                    $('#loader').hide();
                });
        }, 1000);
    }
];

var newMovieController = [
    "$scope", "$http", "$window", "dataService", function ($scope, $http, $window, dataService) {

        $scope.newMovie = {};

        $scope.cancelMovie= function() {
            $window.location = "#/movies";
        }

        //Timeout function to show spinner
        setTimeout(function () {
            $scope.save = function () {
                //Making Spinner On
                $('#loader').show();
                dataService.addMovie($scope.newMovie)
                    .then(function () {
                        //success
                        toastr.success("Data Saved Successfully");
                        $window.location = "#/movies";
                    }, function () {
                        //Error
                        toastr.error("Error in Saving Data");
                    }).then(function () {
                        //Hide the progressbar in any case
                        $('#loader').hide();
                    });
            }
        }, 1000);
    }
];

var reviewsController = [
    "$scope", "$routeParams", "$window", "dataService", function ($scope, $routeParams, $window, dataService) {
        $scope.reviews = null;
        $scope.MovieId = null;

        $scope.goToAddReview=function() {
            $window.location = "/#newReview/" + $routeParams.Id;
        }
        //Setting Timeout for spinner
        $('#loader').show();
        //Timeout function to show spinner
        setTimeout(function () {
            dataService.getReviewById($routeParams.Id)
                .then(function (review) {
                    //Success
                    //For pagination
                    $scope.currentPage = 1;
                    $scope.numPerPage = 10;
                    $scope.maxSize = 11;

                    $scope.numPages = function () {
                        return Math.ceil(review.length / $scope.numPerPage);
                    };

                    $scope.$watch('currentPage + numPerPage', function () {
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;
                        $scope.filteredReviews = review.slice(begin, end);

                    });
                    $scope.reviews = review;
                    $scope.MovieId = $routeParams.Id;
                    toastr.success("Reviews retrieved Successfully");
                }, function () {
                    //Error
                    toastr.error("Error in Fetching Reviews");
                })
                .then(function () {
                    $('#loader').hide();
                });
        }, 1000);
    }
];

var newreviewController = [
   "$scope", "$routeParams", "$window", "dataService", function ($scope, $routeParams, $window, dataService) {
       $scope.ReviewerRating = 3;
       $scope.max = 5;
       $scope.isReadonly = false;
       $scope.MovieId = null;
       $scope.newReview = {};

       $scope.cancelReview = function () {
           $window.location = "#/reviews/"+$routeParams.Id;
       }
       $scope.saveReview = function () {
           dataService.addReview($routeParams.Id, $scope.newReview)
               .then(function () {
                   //success
                   toastr.success("Thanks for your feedback!");
                   $window.location = "#/movies";
               },
                   function () {
                       //error
                       toastr.error("Couldn't Save the New Review");
                   });
       };
   }
]