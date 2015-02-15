//movie-review-edit.js

//Defined Module
var movieReviewmodule = angular.module("movieReviewEdit", []);

//Defined Routes
movieReviewmodule.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/editMovie/:Id", {
        controller: "movieEditController",
        templateUrl: "/templates/editMovie.html"
    });

    $routeProvider.when("/editReview/:Id", {
        controller: "revieweditController",
        templateUrl: "/templates/editReview.html"
    });

    $routeProvider.otherwise({ redirectTo: "/movies" });
}]);

var movieEditController = ["$scope", "dataService", "$window", "$routeParams",
    function ($scope, dataService, $window, $routeParams) {
        //Initialize movie and movie id
        $scope.movie = null;
        $scope.MovieId = null;

        $scope.cancelMovie=function() {
            $window.location = "/#movies";
        }
        //Fetch the Movie by id
        dataService.getMovieById($routeParams.Id)
            .then(function (result) {
                //Success
                $scope.movie = result;
            },
                function () {
                    //Error
                    toastr.error("Error Fetching Movie with Id:", +$routeParams.Id);
                });

        //Editing the Movie
        $scope.editMovie = function () {
            dataService.movieEdit($scope.movie)
                .then(function () {
                    //Success
                    toastr.success("Movie Updated Successfully!");
                    $window.location = "#/movies";
                }, function () {
                    //Error
                    toastr.error("Error in Updating Movie");
                });
        }

        //Deleting the movie
        $scope.deleteMovie = function () {
            dataService.removeMovie($scope.movie.Id)
                .then(function () {
                    //Success
                    toastr.success("Movie Deleted Successfully");
                    $window.location = "/#movies";
                }, function () {
                    //Error
                    toastr.error("Error Deleting Movie with Id:", +$scope.movie.Id);
                });
        }
    }];


var revieweditController = [
    "$scope", "dataService", "$window", "$routeParams",
    function ($scope, dataService, $window, $routeParams) {
        $scope.review = null;
        $scope.newReview = {};

        $scope.cancelReview = function () {
            $window.location = "#/movies";
        }

        //Fetching the Review by id and setting  $scope.review
        dataService.getReviewByReviewerId($routeParams.Id)
             .then(function (result) {
                 $scope.review = result;
             },
             function () {
                 toastr.error("Unable to Fetch the review");
             });

        //Editing the Review
        $scope.editReview = function () {

            dataService.updateReview($scope.review)
                .then(function () {
                    //success
                    toastr.success("Review edited Successfully");
                    $window.location = "#/movies";

                },
                    function () {
                        //error
                        toastr.error("Error in editing the Review");
                    });
        };

        //Deleting the review
        $scope.deleteReview = function () {
            dataService.removeReview($scope.review.Id)
                .then(function () {
                    //success
                    toastr.success("Review Deleted Successfully");
                    $window.location = "#/movies";
                },
                    function () {
                        //error
                        toastr.error("Error Deleting Review with Id:", +$scope.review.Id);
                    });
        };


    }
];
