(function () {
    //Module
    var sample = angular.module('popup', ['ngRoute']);

    sample.directive("datepicker", function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var updateModel = function(dateText) {
                    scope.$apply(function() {
                        elem.value=dateText;
                    });
                };
                var options = {
                    dateFormat: attrs.datepicker,
                    showButtonPanel: true,
                    onSelect: function(dateText) {
                        updateModel(dateText);
                    }
                };
                elem.datepicker(options);
            }
        }
    });

    sample.directive("autocomplete", function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs, ngModelCtrl) {
                    var availableTags = [
                      "ActionScript",
                      "AppleScript",
                      "Asp",
                      "BASIC",
                      "C",
                      "C++",
                      "Clojure",
                      "COBOL",
                      "ColdFusion",
                      "Erlang",
                      "Fortran",
                      "Groovy",
                      "Haskell",
                      "Java",
                      "JavaScript",
                      "Lisp",
                      "Perl",
                      "PHP",
                      "Python",
                      "Ruby",
                      "Scala",
                      "Scheme"
                    ];
                elem.autocomplete({
                      source: availableTags
                    });
            }
        }
    });

})();
