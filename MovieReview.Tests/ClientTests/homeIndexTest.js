/// <reference path="../scripts/jasmine.js" />
/// <reference path="../../moviereview.web/scripts/angular.min.js" />
/// <reference path="../../moviereview.web/scripts/ui-bootstrap-tpls.min.js" />
/// <reference path="../../moviereview.web/scripts/angular-route.min.js" />
/// <reference path="../../moviereview.web/scripts/angular-mocks.js" />
/// <reference path="../../moviereview.web/js/homeindex.js" />
/// <reference path="../../moviereview.web/js/movie-review-edit.js" />

describe("home-Index Tests-->", function () {

   
    beforeEach(function () {
        module("homeIndex");
    });


    //to test individual bits and bytes inside the home-Index
    describe("dataService-->", function () {

        it("can load movies", inject(function (dataService) {
            //for the 1st Run
            expect(dataService.movies.length).toEqual(0);
        }));
    });

    //$httpbackend service
    var $httpBackend;
    var url = '/api/movies';
    
    var fakedMoviesResponse=[{
            Id: 1,
            MovieName: "Godzilla",
            DirectorName: "Gareth Edwards",
            ReleaseYear: "2014",
            NoOfReviews: 6
        },
            {
                Id: 3,
                MovieName: "Titanic",
                DirectorName: "James Cameron",
                ReleaseYear: "1997",
                NoOfReviews: 3
            },
            {
                Id: 4,
                MovieName: "Die Another Day",
                DirectorName: "Lee Tamahori",
                ReleaseYear: "2002",
                NoOfReviews: 0
            },
            {
                Id: 7,
                MovieName: "Taken 3",
                DirectorName: "Olivier Megaton",
                ReleaseYear: "2014",
                NoOfReviews: 0
            },
            {
                Id: 9,
                MovieName: "Top Gun",
                DirectorName: "Tony Scott",
                ReleaseYear: "1986",
                NoOfReviews: 0
            }
        ];
    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get("$httpBackend");

        $httpBackend.whenGET(url)
            .respond(fakedMoviesResponse);
        
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    //test the backend call
    
    describe("Testing Movies GET Call-->", function () {

        it("Loaded Movies", inject(function (dataService) {
            $httpBackend.expectGET(url);
            dataService.getMovies();
            $httpBackend.flush();
            expect(dataService.movies.length).toEqual(5);
        }));
    });

    
    describe("Testing Home-Index Controller-->", function() {

        it("Load Movies", inject(function($controller, $http, dataService) {

            var scopeObj = {};

            $httpBackend.expectGET(url);

            var ctrl = $controller("homeIndexController", {
                $scope: scopeObj,
                $http: $http,
                dataService: dataService
            });

            dataService.getMovies();
            $httpBackend.flush();
            expect(ctrl).not.toBeNull();
            expect(scopeObj.data).toBeDefined();
        }));
    });
})