angular.module("umbraco").controller("GoCo.LineIconsController", function ($scope, $http) {
    $scope.selectedIcon = $scope.model.value || "lni-home";
    $scope.searchTerm = "";
    $scope.showDropdown = false;

    // Load JSON file
    $http.get("/App_Plugins/GoCo.Plugins/lineIconsPicker/lineIcons.json").then(function (response) {
        if (response.data && Array.isArray(response.data)) {
            $scope.iconList = response.data;
            $scope.filteredIcons = [...$scope.iconList];
        } else {
            console.error("Error: JSON invalid.");
        }
    }).catch(function (error) {
        console.error("Error load icon:", error);
    });

    // Search icon
    $scope.filterIcons = function () {
        let searchTerm = ($scope.searchTerm || "").toLowerCase();
        $scope.filteredIcons = $scope.iconList.filter(icon => icon.includes(searchTerm));
        $scope.showDropdown = $scope.filteredIcons.length > 0; // Display dropdown icon
    };

    // Choose icon
    $scope.selectIcon = function (icon) {
        $scope.selectedIcon = icon;
        $scope.model.value = icon; 
        resetData();
    };

    // Close dropdown when click outsite
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".custom-autocomplete")) {
            $scope.$apply(() => {
                resetData();
            });
        }
    });

    function resetData() {
        $scope.showDropdown = false;
        $scope.searchTerm = "";
        $scope.filteredIcons = [...$scope.iconList];
    }
});
