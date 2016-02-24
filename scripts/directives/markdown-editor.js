'use strict'

angular.module('markvi')

.directive('markdownEditor', function ($window, $document, files) {
  return {
    restrict    : 'E'
  , transclude  : true
  , templateUrl : './scripts/directives/md.html'
  , replace     : true
  , link        : function ($scope, $elem, $attr) {
      var editorEl  = angular.element(document.querySelector('.codemirror'))
        , previewEl = angular.element(document.querySelector('.preview'))

      $scope.editor = CodeMirror.fromTextArea(editorEl[0], {
        mode          : 'markdown'
      , matchBrackets : true
      , lineWrapping  : true
      , placeholder   : '…'
      , theme         : 'abcdef'
      , keyMap        : 'vim'
      })

      if ($attr.file) {
        var file = files.get($attr.file)
        if (file) {
          $scope.id    = $attr.file
          $scope.title = file.title == 'untitled' ? '' : file.title
          $scope.editor.setValue(file.content)
        }
      }
      $scope.$watch('title', function (val) {
        if (val) {
          $scope.update()
        }
      })
      $scope.editor.on('change', $scope.update)
    }

  , controller : function ($rootScope, $scope, $http) {
      $scope.editor = {}
      $scope.update = function () {
        var id      = $scope.id || Date.now()
          , content = $scope.editor.getValue()
        $scope.setOutput(content)
        files.save(id, {
          title   : $scope.title
        , content : content
        })
      }
      $scope.delete = function () {
        $rootScope.$broadcast('file:delete')
      }
      $scope.setOutput = function (val) {
        var preview = angular.element(document.querySelector('.preview'))
        preview.html(marked(val))
      }
    }
  }
})
