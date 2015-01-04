'use strict';

angular.module('productManagement.products', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/products', {
            templateUrl: 'products/products.html',
            controller: 'ProductListCtrl'
        });
    }])

    .controller('ProductListCtrl', ["$scope", function($scope) {
            //code here
        var vm = this;

        vm.showingImages = true;


        vm.toggleImage = function() {
            vm.showingImages = !vm.showingImages;
          //  $scope.showImage = showingImages;
        };

        vm.products = [
                            {
                                "productId":1,
                                "productName": "hammer",
                                "productCode" : "12-000",
                                "releaseDate" : "may 21 2014",
                                "price" : 8.99,
                                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/211353/Tank_T-34.png"
                            },
                            {
                                "productId":2,
                                "productName": "wire",
                                "productCode" : "12-1100",
                                "releaseDate" : "may 21 2014",
                                "price" : 18.90,
                                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/211349/Sekigahara_Gifu_chapter.png"
                            }

        ]



     //   $scope.showImage = showingImages;






}
 ]);

