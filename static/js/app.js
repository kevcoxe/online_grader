
var app = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

// app.config(function($routeProvider) {
//     $routeProvider
//         // route for the home page
//         .when('/', {
//             templateUrl : 'home.html',
//             controller  : 'MyCtrl'
//         })
//         .otherwise({
//         	redirectTo: '/'
//         });
// });

app.controller("MyCtrl", function($scope) {

	$scope.name = "Kevin Coxe";

	$scope.grade = [
		{
			'weight': 80,
			'name': "test"
		},
		{
			'weight': 20,
			'name': "homework"
		}
	]

	$scope.error = false;

	$scope.new_assignment = {};
	$scope.new_weight = false;

	$scope.assignments = [
		{'catagory':'homework', 'name':'hw1', 'possible':100.0, 'earned':50.0},
		{'catagory':'homework', 'name':'hw2', 'possible':100.0, 'earned':60.0},
		{'catagory':'test', 'name':'test1', 'possible':100.0, 'earned':70.0},
		{'catagory':'homework', 'name':'hw3', 'possible':100.0, 'earned':90.0},
	]


	$scope.students = [
		{"name": "Kevin", "assignments": [
				{"name": "hw1", "score": 100.0, "type": "hw"},
				{"name": "hw2", "score": 90.0, "type": "hw"},
				{"name": "test1", "score": 80.0, "type": "test"},
				{"name": "hw3", "score": 90.0, "type": "hw"},
				{"name": "hw4", "score": 90.0, "type": "hw"},
				{"name": "test2", "score": 80.0, "type": "test"},
			]
		},
		{"name": "Rebekah", "assignments": [
				{"name": "hw1", "score": 100.0, "type": "hw"},
				{"name": "hw2", "score": 95.0, "type": "hw"},
				{"name": "test1", "score": 85.0, "type": "test"},
				{"name": "hw3", "score": 95.0, "type": "hw"},
				{"name": "hw4", "score": 90.0, "type": "hw"},
				{"name": "test2", "score": 80.0, "type": "test"},
			]
		},
		{"name": "Juilie", "assignments": [
				{"name": "hw1", "score": 100.0, "type": "hw"},
				{"name": "hw2", "score": 0.0, "type": "hw"},
				{"name": "test1", "score": 100.0, "type": "test"},
				{"name": "hw3", "score": 100.0, "type": "hw"},
				{"name": "hw4", "score": 90.0, "type": "hw"},
				{"name": "test2", "score": 80.0, "type": "test"},
			]
		},
		{"name": "Henry", "assignments": [
				{"name": "hw1", "score": 100.0, "type": "hw"},
				{"name": "hw2", "score": 90.0, "type": "hw"},
				{"name": "test1", "score": 85.0, "type": "test"},
				{"name": "hw3", "score": 95.0, "type": "hw"},
				{"name": "hw4", "score": 90.0, "type": "hw"},
				{"name": "test2", "score": 80.0, "type": "test"},
			]
		},
		{"name": "Bob", "assignments": [
				{"name": "hw1", "score": 100.0, "type": "hw"},
				{"name": "hw2", "score": 100.0, "type": "hw"},
				{"name": "test1", "score": 100.0, "type": "test"},
				{"name": "hw3", "score": 100.0, "type": "hw"},
				{"name": "hw4", "score": 90.0, "type": "hw"},
				{"name": "test2", "score": 80.0, "type": "test"},
			]
		},
	]


	$scope.total = 0.0;

	$scope.find_ave = function(index, type) {
		ave = 0.0
		if (type == "total") {
			hw_ave = {"total":0.0, "earned":0.0};
			test_ave = {"total":0.0, "earned":0.0};
			ave = 0.0;
			for (var i = 0; i < $scope.students[index].assignments.length; i++) {
				if ($scope.students[index].assignments[i].type == "hw" && $scope.students[index].assignments[i].score != '') {
					hw_ave.earned += parseFloat($scope.students[index].assignments[i].score);
					hw_ave.total += 100.0;
				} else if ($scope.students[index].assignments[i].type == "test" && $scope.students[index].assignments[i].score != '') {
					test_ave.earned += parseFloat($scope.students[index].assignments[i].score);
					test_ave.total += 100.0;
				}
			};
			// ave = (((hw_ave.earned / hw_ave.total)*.2 + (test_ave.earned / test_ave.total)*.8) * 100.0).toFixed(2);

			if (test_ave.total != 0.0 && hw_ave.total != 0.0) {
				ave = (((hw_ave.earned / hw_ave.total)*.2 + (test_ave.earned / test_ave.total)*.8) * 100.0).toFixed(2);
			} else {
				_hw_ave = 0.0;
				_test_ave = 0.0;
				if (hw_ave.total != 0.0) {
					_hw_ave = (hw_ave.earned / hw_ave.total);
				}

				if (test_ave.total != 0.0) {
					_test_ave = (test_ave.earned / test_ave.total);
				}

				ave = ((_hw_ave*.2 + _test_ave*.8) * 100).toFixed(2);
			}


		} else if (type == "hw") {
			hw_ave = {"total":0.0, "earned":0.0};
			ave = 0.0;
			for (var i = 0; i < $scope.students[index].assignments.length; i++) {
				if ($scope.students[index].assignments[i].type == "hw" && $scope.students[index].assignments[i].score != '') {
					hw_ave.earned += parseFloat($scope.students[index].assignments[i].score);
					hw_ave.total += 100.0;
				}
			};
			ave = ((hw_ave.earned / hw_ave.total) * 100.0).toFixed(2);
			if (hw_ave.total == 0.0) {
				ave = 0.0;
			} else {
				ave = ((hw_ave.earned / hw_ave.total) * 100.0).toFixed(2);
			}
		} else if (type == "test") {
			test_ave = {"total":0.0, "earned":0.0};
			ave = 0.0;
			for (var i = 0; i < $scope.students[index].assignments.length; i++) {
				if ($scope.students[index].assignments[i].type == "test" && $scope.students[index].assignments[i].score != '') {
					test_ave.earned += parseFloat($scope.students[index].assignments[i].score);
					test_ave.total += 100.0;
				}
			};
			if (test_ave.total == 0.0) {
				ave = 0.0;
			} else {
				ave = ((test_ave.earned / test_ave.total) * 100.0).toFixed(2);
			}
		}
		return ave;
	};

	$scope.add_weight = function() {
		$scope.grade[$scope.new_weight.name] = $scope.new_weight;
		$scope.new_weight = {};
	};

	$scope.add_assignment = function() {
		$scope.assignments.push({
			"catagory":$scope.new_assignment.catagory.name,
			"name":$scope.new_assignment.name,
			"possible":parseFloat($scope.new_assignment.possible),
			"earned":parseFloat($scope.new_assignment.earned)
		});
		$scope.new_assignment = {};
	};

	$scope.delete_assignment = function(index) {
		$scope.assignments.splice(index,1);
	};

	$scope.update_total = function() {
		$scope.total = 0.0;
		var t = {'possible':0.0, 'earned':0.0};
		var h = {'possible':0.0, 'earned':0.0};
		
		var ht = 0.0;
		var tt = 0.0;

		var hn = 0;
		var tn = 0;

		for (var i = $scope.assignments.length - 1; i >= 0; i--) {
			if ($scope.assignments[i].catagory == 'homework') {
				h.possible += parseFloat($scope.assignments[i].possible);
				if (parseFloat($scope.assignments[i].earned) > 0) {
					// h.earned += parseFloat($scope.assignments[i].earned);
					hn += 1;
					ht += (parseFloat($scope.assignments[i].earned) / parseFloat($scope.assignments[i].possible)) * ($scope.grade[1].weight / 100);
				} else {
					// h.earned += parseFloat($scope.assignments[i].possible);
					ht += 0;
				}
			} else if ($scope.assignments[i].catagory == 'test') {
				t.possible += parseFloat($scope.assignments[i].possible);
				if (parseFloat($scope.assignments[i].earned) > 0) {
					// t.earned += parseFloat($scope.assignments[i].earned);
					tn += 1;
					tt += (parseFloat($scope.assignments[i].earned) / parseFloat($scope.assignments[i].possible)) * ($scope.grade[0].weight / 100);
				} else {
					// t.earned += parseFloat($scope.assignments[i].possible);
					tt += 0;
				}
			}
		};
		
		if (h.possible <= 0 && ht == 0.0) {
			tt = (tt / ($scope.grade[0].weight / 100)) / tn;
		}

		if (t.possible <= 0 && tt == 0.0) {
			ht = (ht / ($scope.grade[1].weight / 100)) / hn;
		}

		$scope.total = (ht + tt) * 100;
	};

	$scope.$watch('assignments', function() {
		$scope.update_total();
	}, true);

	$scope.$watch('grade[0].weight', function() {
		if ($scope.grade[0].weight > 100) {
			$scope.grade[0].weight = 100;
		};

		if ($scope.grade[0].weight < 0) {
			$scope.grade[0].weight = 0;
		};

		$scope.grade[1].weight = 100 - $scope.grade[0].weight;
		$scope.update_total();
	});

	$scope.$watch('grade[1].weight', function() {
		if ($scope.grade[1].weight > 100) {
			$scope.grade[1].weight = 100;
		};

		if ($scope.grade[1].weight < 0) {
			$scope.grade[1].weight = 0;
		};
		$scope.grade[0].weight = 100 - $scope.grade[1].weight;
		$scope.update_total();
	});

});