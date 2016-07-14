!function(e){function r(e,r,t){e in i||(i[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return c[e]||(c[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,s=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var s=0;s<i.dependencies.length;++s)i.dependencies[s]===o&&i.setters[s](a)}return o.locked=!1,r},r.name);o.setters=s.setters,o.execute=s.execute;for(var l=0,d=r.normalizedDeps.length;d>l;l++){var f,p=r.normalizedDeps[l],v=i[p],m=c[p];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=u(p),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[l]&&o.setters[l](f)}}}function o(e){var r={};if("object"==typeof e||"function"==typeof e)if(l){var t;for(var n in e)(t=Object.getOwnPropertyDescriptor(e,n))&&f(r,n,t)}else{var o=e&&e.hasOwnProperty;for(var n in e)(!o||e.hasOwnProperty(n))&&(r[n]=e[n])}return r["default"]=e,f(r,"__useDefault",{value:!0}),r}function a(r,t){var n=i[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,l=n.normalizedDeps.length;l>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(i[d]?a(d,t):u(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function u(e){if(v[e])return v[e];if("@node/"==e.substr(0,6))return p(e.substr(6));var r=i[e];if(!r)throw"Module "+e+" not present.";return n(i[e]),a(e,[]),i[e]=void 0,r.declarative&&f(r.module.exports,"__esModule",{value:!0}),v[e]=r.declarative?r.module.exports:r.esModule}var i={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},l=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(d){l=!1}var f;!function(){try{Object.defineProperty({},"a",{})&&(f=Object.defineProperty)}catch(e){f=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var c={},p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,v={"@empty":{}};return function(e,t,n){return function(a){a(function(a){for(var i=0;i<t.length;i++)(function(e,r){r&&r.__esModule?v[e]=r:v[e]=o(r)})(t[i],arguments[i]);n({register:r});var s=u(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)u(e[i]);return s.__useDefault?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

$__System.register("2", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [],
    execute: function() {
      exports_1("default", angular.module("nSteps.templates", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("src/container/nStepsContainer.html", "<div ng-include=\"NStepsContainer.NStepsService.currentStep.template\"></div>");
        $templateCache.put("src/navigation/nStepNavigation.html", "<h1>I\'m the navigation</h1>");
      }]));
    }
  };
});

$__System.register("3", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nSteps;
  return {
    setters: [],
    execute: function() {
      var nSteps;
      (function(nSteps) {
        'use strict';
        var dependencies = ['nSteps.templates'];
        angular.module('nSteps', dependencies);
      })(nSteps || (nSteps = {}));
    }
  };
});

$__System.register("4", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nSteps;
  return {
    setters: [],
    execute: function() {
      var nSteps;
      (function(nSteps) {
        'use strict';
        var NStep = (function() {
          function NStep(step) {
            this.validate(step);
            this.name = step.name;
            this.template = step.template;
          }
          NStep.prototype.validate = function(step) {
            if (!step || typeof step !== 'object')
              throw 'Step needs to be an object!!!';
            if (!step.hasOwnProperty('template'))
              throw 'Template is required!!!';
            if (step.template === '')
              throw 'Template cannot be empty!!!';
          };
          return NStep;
        }());
        var NStepsService = (function() {
          function NStepsService($rootScope) {
            this.$rootScope = $rootScope;
            this.steps = [];
            this.totalSteps = 0;
            this.currentIndex = 0;
          }
          NStepsService.prototype.createStep = function(step) {
            var step = new NStep(step);
            if (this.steps.length === 0) {
              this.currentIndex = 0;
              this.currentStep = step;
            }
            this.steps.push(step);
            this.totalSteps++;
            return this.steps;
          };
          NStepsService.prototype.init = function(steps) {
            var self = this;
            steps.forEach(function(step) {
              self.createStep(step);
            });
            return this.steps;
          };
          NStepsService.prototype.changeStep = function(index) {
            if (index === void 0) {
              index = this.currentIndex;
            }
            index = Math.max(0, index);
            index = Math.min(index, this.steps.length - 1);
            this.currentIndex = index;
            this.currentStep = this.steps[this.currentIndex];
            this.$rootScope.$apply();
            return this.currentStep;
          };
          NStepsService.prototype.nextStep = function() {
            this.currentIndex++;
            return this.changeStep();
          };
          NStepsService.prototype.previousStep = function() {
            this.currentIndex--;
            return this.changeStep();
          };
          NStepsService.$inject = ['$rootScope'];
          return NStepsService;
        }());
        angular.module('nSteps').service('NStepsService', NStepsService);
      })(nSteps || (nSteps = {}));
    }
  };
});

$__System.register("5", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nSteps;
  return {
    setters: [],
    execute: function() {
      var nSteps;
      (function(nSteps) {
        'use strict';
        var controllerAs = 'NStepsContainer';
        var NStepsContainer = (function() {
          function NStepsContainer() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NStepsContainerController;
            this.restrict = 'EA';
            this.templateUrl = 'src/container/nStepsContainer.html';
            this.controllerAs = controllerAs;
          }
          NStepsContainer.instance = function() {
            return new NStepsContainer();
          };
          NStepsContainer.prototype.linkFn = function(scope, element, attrs) {};
          NStepsContainer.$inject = [];
          return NStepsContainer;
        }());
        var NStepsContainerController = (function() {
          function NStepsContainerController(NStepsService) {
            this.NStepsService = NStepsService;
          }
          NStepsContainerController.$inject = ['NStepsService'];
          return NStepsContainerController;
        }());
        angular.module('nSteps').directive('nStepsContainer', NStepsContainer.instance);
      })(nSteps || (nSteps = {}));
    }
  };
});

$__System.register("6", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nSteps;
  return {
    setters: [],
    execute: function() {
      var nSteps;
      (function(nSteps) {
        'use strict';
        var controllerAs = 'NStepsChangeStep';
        var NStepsChangeStep = (function() {
          function NStepsChangeStep() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NStepsChangeStepController;
            this.restrict = 'EA';
            this.controllerAs = controllerAs;
          }
          NStepsChangeStep.instance = function() {
            return new NStepsChangeStep();
          };
          NStepsChangeStep.prototype.linkFn = function(scope, element, attrs) {
            element.on('click', function() {
              scope[controllerAs].change(attrs.index);
            });
          };
          NStepsChangeStep.$inject = [];
          return NStepsChangeStep;
        }());
        var NStepsChangeStepController = (function() {
          function NStepsChangeStepController(NStepsService) {
            this.NStepsService = NStepsService;
          }
          NStepsChangeStepController.prototype.change = function(index) {
            if (index === 'next') {
              this.NStepsService.nextStep();
            } else if (index === 'previous') {
              this.NStepsService.previousStep();
            } else {
              this.NStepsService.changeStep(index);
            }
          };
          NStepsChangeStepController.$inject = ['NStepsService'];
          return NStepsChangeStepController;
        }());
        angular.module('nSteps').directive('nStepsChangeStep', NStepsChangeStep.instance);
      })(nSteps || (nSteps = {}));
    }
  };
});

$__System.register("7", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nSteps;
  return {
    setters: [],
    execute: function() {
      var nSteps;
      (function(nSteps) {
        'use strict';
        var controllerAs = 'nSteps';
        var NStepsNav = (function() {
          function NStepsNav() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NStepsNavController;
            this.restrict = 'EA';
            this.controllerAs = controllerAs;
          }
          NStepsNav.instance = function() {
            return new NStepsNav();
          };
          NStepsNav.prototype.linkFn = function(scope, element, attrs) {};
          NStepsNav.$inject = [];
          return NStepsNav;
        }());
        var NStepsNavController = (function() {
          function NStepsNavController(nav) {
            this.nav = nav;
          }
          NStepsNavController.$inject = ['NStepsService'];
          return NStepsNavController;
        }());
        angular.module('nSteps').directive('nStepsNav', NStepsNav.instance);
      })(nSteps || (nSteps = {}));
    }
  };
});

$__System.register("1", ["2", "3", "4", "5", "6", "7"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [function(_1) {}, function(_2) {}, function(_3) {}, function(_4) {}, function(_5) {}, function(_6) {}],
    execute: function() {}
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=component.js.map