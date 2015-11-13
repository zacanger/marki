'use strict'

angular.module('markvi')

  .directive('modal', function () {
    return {
      restrict: 'E'
			scope : { show: '=info' },
      transclude: true,
      replace: true,
			link: function($scope, $elem, $attr){
				scope.dialogStyle = {};
				if ($attr.width)
					scope.dialogStyle.width = $attr.width;
				if ($attr.height)
					scope.dialogStyle.height = $attr.height;
				scope.hideModal = function(){
					scope.show = false;
				}
			},
			template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>☒</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    }
  })

