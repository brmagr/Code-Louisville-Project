var searchApp = angular.module("SearchApp",[]);
  searchApp.controller("seaCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.searches = [
      {
        "name" : "Appetizers"
      },
      {
        "name" : "Side Trips"
      },
      {
        "name" : "Sandwiches"
      },
      {
        "name" : "Fish and Seafood"
      },    {
            "name" : "Mixed Platters"
          },
          {
            "name" : "Dockside Delites"
          },     {
                "name" : "Galley Broiler"
              },
              {
                "name" : "Shrimp Fest"
              },     {
                    "name" : "Chicken-Fest Platters"
                  },
                  {
                    "name" : "Senior Citizens Platters"
                  },     {
                        "name" : "Wet Your Whistle"
                      },
                      {
                        "name" : "Desserts"
                      },     {
                            "name" : "Little Mates Plates"
                          },
                          {
                            "name" : "Lunch Menu"
                          }
    ];
    $scope.orderProp="name";
  });
