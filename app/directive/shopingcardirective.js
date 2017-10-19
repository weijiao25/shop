app.directive("shopCar",function(){
    return {
        restrict:"EA",
        templateUrl:"./app/view/template/shopcar.html",
        controller:"itemcontroller",
        scope:{
            item:"=item",
            index:"@index"
        },
        link:function(scope,ele,attr){

        }
    }
})