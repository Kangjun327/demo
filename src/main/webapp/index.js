/*
angular.module("app").controller("index",index);

index.$inject=['$scope'];

function index(){
    var date=new Date();
    time();
     //每1000毫秒更新一次
    function time(){
        //获取时间
        var hour = "00" + date.getHours();
        hour = hour.substr(hour.length - 2);
        var minute = "00" + date.getMinutes();
        minute = minute.substr(minute.length - 2);
        var second = "00" + date.getSeconds();
        second = second.substr(second.length - 2);
        document.getElementById("nowdate").innerHTML = hour+":"+minute+":"+second+" ";
        setTimeout("index()", 1000);
    }


}*/
