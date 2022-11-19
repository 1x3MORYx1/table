// search

$(document).ready(function () {
  $("#search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var filter = $('#search-filter').val().toLowerCase(); {
      $(".td-" + filter).filter(function () {
        $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    }
  });


  $('#search-filter').on("change", function () {
    var value = $("#search-box").val().toLowerCase();
    var filter = $(this).val().toLowerCase();
    if (filter == "listitem") {
      $(".listitem").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    } else {
      $(".td-" + filter).filter(function () {
        $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    }
  });
  $(".tbl-btn").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find('td:not(:first-child)').toggleClass('active');
    $(this).toggleClass('rotate');
  });
});



var myApp = angular.module('myApp', []);
myApp.controller("myController", function ($scope) {

  $scope.newUser = {};
  $scope.clickedUser = {};
  $scope.alertMassage = "";


  $scope.users = [
    { name: " عمار علي احمد", Number: "01101201501", String: "01001001010", },
    { name: "هاني محمد احمد", Number: "01101201501", String: "01010101010" }
  ];


  $scope.saveUser = function () {
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    $scope.alertMassege = " added successfully!!";
  };


  $scope.selectUser = function (user) {
    console.log(user);
    $scope.clickedUser = user;
  };

  $scope.updateUser = function () {
    $scope.alertMassege = "Update Successfully!!";
  };


  $scope.deleteUser = function () {
    $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    $scope.alertMassege = "Deleted successfully!!";
  };

  $scope.clickedAlert = function () {
    $scope.alertMassege = "";
  };

});
