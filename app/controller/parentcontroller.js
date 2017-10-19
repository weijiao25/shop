app.controller("parentcontroller",["$scope","baseServer",function($scope,baseServer){
    function price(items){
        $scope.sum=0;
        $scope.count=0;
        items.forEach(function(val){
            if(val.state){
                $scope.count+=val.num;
                $scope.sum+=val.num*val.price;
            }
        })
    }
    baseServer.ajax("get",'./content/data/data.json').then(function(result){
        $scope.productItems = result;
        price($scope.productItems)
    })
    $scope.flag=false;
    var count=0;
    $scope.$on("itemchecked",function(event,index){
        var items=$scope.productItems;
        items[index].state=!items[index].state;
        price($scope.productItems)
        //if(items[index].state){
        //    $scope.sum+=items[index].num+items[index].price;
        //}
        all(items)
    })
    function all(items){
        var count=0;
        items.forEach(function(val){
            if(val.state){
                count++;
            }
        })
        if(count===items.length){
            $scope.flag=true;
        }else{
            $scope.flag=false;
        }
    }
    $scope.$on("deleteArry",function(event,index){
        var items=$scope.productItems;
        items.splice(index,1)
    })
    $scope.checkAll=function(flag){
        $scope.flag=!$scope.flag;
        $scope.productItems.forEach(function(val){
                val.state=$scope.flag;
                //$scope.sum+=val.num*val.price;
        })
        price($scope.productItems)
    }
    $scope.$on("dianji",function(){
        //console.log(vals)
        //if(item.num<=0){
        //    return;
        //}
        ////$scope.productItems.forEach(function(val){
        //item.num+=vals;
        price($scope.productItems)

        //})
    })
}])