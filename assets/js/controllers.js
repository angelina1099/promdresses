angular.module('promDresses.controllers',[])

.controller ('welcomeCtrl', function ($scope){
   $(document)
    .ready(function() {
      $('.special.card .image').dimmer({
        on: 'hover'
      });
      $('.star.rating')
        .rating()
      ;
      $('.card .dimmer')
        .dimmer({
          on: 'hover'
        })
      ;
    })
  ;
})

.controller ('c_necklacesCtrl', function ($scope,$http){
$http.get('assets/json/c_necklaces.json')
.success(function(data){
$scope.c_necklaces=data;
console.log(data);
})
.error (function (err){

	console.log (err);
});
})


.controller ('s_necklacesCtrl', function ($scope,$http){
$http.get('assets/json/s_necklaces.json')
.success(function(data){
$scope.s_necklaces=data;
console.log(data);
})
.error (function (err){

	console.log (err);
});
})

.controller ('braceletsCtrl', function ($scope){

})

.controller ('earringsCtrl', function ($scope){

})

.controller ('cocktail_dCtrl', function ($scope){

});
