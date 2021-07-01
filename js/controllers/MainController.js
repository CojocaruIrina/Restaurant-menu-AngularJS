app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
 {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  $scope.mains = [
      {
      name: 'Beef Lasagna',
      description: 'Mozzarella, tomatoes',
      price: 4.95
    },
    {
      name: 'Pasta Bolognese',
      description: 'Lean ground beef and penne pasta',
      price: 5.95
    },
 {
      name: 'Baked chicken breast',
      description: 'The chicken is served with mashed potatoes',
      price: 4.95
    }

  ];
  $scope.extras=[
     {
      name: 'Juice',
      description: 'Orange juice or soda',
      price: 1.95
    },
    {
      name: 'Ice Cream',
      description: 'Vanilla or Pistachio',
      price: 1.95
    },
 {
      name: 'Cake',
      description: 'Cheese cake or Brownie',
      price: 1.95
    }
  ];

}]);