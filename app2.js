var app = angular.module ('myapp', []);

app.service('dataservice', function(){
    this.firstname='User firstname',
    this.lastname='User lastname',
    this.display_details =function() {
        return this.firstname+','+this.lastname;
    }
});

 app.factory('dataservice2', function(){
     return {
        firstname :'User firstname',
        lastname :'User lastname',
        display_details : function() {
            return this.firstname+','+this.lastname;
        }
     };
    });

app.controller('mycntrl', function($scope, dataservice, $rootScope){
    $scope.org = dataservice.display_details();

    $scope.username ='Marlabs';

    // document.getElementById('btn').addEventListener('click', function()
    // {
    //     $scope.org ='Marlabs- updated!!';
    //     $scope.$digest();
    // });

        //$scope.$watch('username',function(newVal, oldVal)
       // {
           // console.log(newVal);
           // console.log(oldVal);
        //});
        $rootScope.$on('custom_event', function(event, args) {
            console.log(args);
        });
});
        app.controller('mycntrl2', function($scope, $rootScope){
          $scope.sendDataTocntrl1 = function() {
              $rootScope.$broadcast('custom_event','hello from controller 2');
          };
        
       });