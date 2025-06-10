angular.module("umbraco").controller("Operations.ContactFormController", function ($http, $scope) {
    var vm = this;

    vm.submissions = [];
    vm.selectedIds = [];
    vm.selectAll = false;

    vm.page = 1;
    vm.pageSize = 3;
    vm.total = 0;

    vm.refresh = function () {
        $http.get("/umbraco/backoffice/api/ContactFormApi/GetContactForms", {
            params: {
                page: vm.page,
                pageSize: vm.pageSize
            }
        }).then(function (res) {
            vm.submissions = res.data.items;
            vm.total = res.data.total;

            vm.selectedIds = [];
            vm.selectAll = false;
        });
    };

    vm.pageCount = function () {
        return Math.ceil(vm.total / vm.pageSize);
    };

    vm.goToPage = function (pageNumber) {
        var page = parseInt(pageNumber);
        if (!isNaN(page) && page >= 1 && page <= vm.pageCount()) {
            vm.page = page;
            vm.refresh();
        }
    };

    vm.toggleSelectAll = function () {
        angular.forEach(vm.submissions, function (item) {
            item._selected = vm.selectAll;
        });
        vm.updateSelection();
    };

    vm.updateSelection = function () {
        vm.selectedIds = vm.submissions
            .filter(function (x) { return x._selected; })
            .map(function (x) { return x.Id; });
    };

    vm.deleteSelected = function () {
        if (!confirm("Are you sure you want to delete selected submissions?")) return;

        $http.post("/umbraco/backoffice/api/ContactFormApi/DeleteMany", vm.selectedIds)
            .then(function () {
                vm.refresh();
            });
    };

    vm.refresh();
});
