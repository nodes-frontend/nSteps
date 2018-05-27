# ⛔️ [DEPRECATED] nSteps
[![Build Status](https://travis-ci.org/nodes-frontend/nSteps.svg?branch=master)](https://travis-ci.org/nodes-frontend/nSteps) [![Coverage Status](https://coveralls.io/repos/github/nodes-frontend/nSteps/badge.svg?branch=master)](https://coveralls.io/github/nodes-frontend/nSteps?branch=master)

Angular 1.x component for creating steps ex. form wizzards. 
Please notice that current version only supports one single instance.

![Screencapture GIF](https://raw.githubusercontent.com/nodes-frontend/nSteps/master/demo.gif)

# Getting started
```bash
npm install n-steps --save
```
Inject module dependency

```js
angular.module('app', ['nSteps']);
```

# Usage
The component comes with several directives: n-add-content-create, n-add-content-reset, n-add-content-remove and n-add-content-container 

1) Init 
```html
<div class="container" n-steps-container></div>
```
```js
...
.controller('demoController', function(NStepsService) {
    var vm = this;
    vm.steps = [
        {
            name: 'Step 1',
            template: 'demo-stepOne.html'
        },
        {
            name: 'Step 2',
            template: 'demo-stepTwo.html'
        },
        {
            name: 'Step 3',
            template: 'demo-stepThree.html'
        }
    ];
    
    activate();

    function activate() {
        NStepsService.init(vm.steps);
    }
});
```
2) Add controls to change the steps
```html
<button type="button" class="button" n-steps-change-step index="previous">Forrige</button>
<button type="button" class="button" n-steps-change-step index="2">Step 3</button>
<button type="button" class="button" n-steps-change-step index="next">Næste</button>
```

3) Show the navigation
```html
<div n-steps-nav>Step {{nSteps.nav.currentIndex + 1}} / {{nSteps.nav.totalSteps}}</div>
```

# Development

### Installation
This will install all you need to get started. Besides the dependencies in package.json, it will automatically install [jspm](http://jspm.io/) for you globally and install jspm dependencies too.  
```bash
npm install
```

### What does this include
  * Semantic-relase
  * Travis CI
  * Typescript
  * Commitizen
  * ng-annotate (adds and removes AngularJS dependency injection annotations)
  * Inline Angular templates
  * [validate-commit-msg](https://github.com/Frikki/validate-commit-message)
  * Karma / Jasmine testing environment
  * Lite-server (live-reload)
  * SCSS environment with autoprefixer
  * [SystemJS (SFX)](https://github.com/systemjs/builder#self-executing-sfx-bundles)
  * Gulp
  * Source maps

### Lite-server
Lite-server is configured to serve, index.html placed in the root of your component with live-reload for specified environment.
### Serve dev-environment
To serve up the un-minified code run following command. This command starts up lite-server and gulp watch task which gives you live-reload when ./dist/component.css, ./dist/component.js or ./index.html is changed:

```bash
npm run serve:dev
```
### Serve production-environment
To serve minified & bundled code run the following command. This command starts up lite-server and gulp watch task which gives you live-reload when ./dist/component.css, ./dist/component.min.js or ./index.html is changed.

```bash
npm run serve:build
```
## SystemJS (SFX)
SystemJS is configured to build a self-executing bundle. **Consumers of your components are therefore NOT required to use SystenJS.** [Read more](https://github.com/systemjs/builder#self-executing-sfx-bundles)
## Commitizen (optional)
To use commitizen use following command. **Commitizen is optional** and if you don't wanna use commitizen you can just commit as you're used to. You will just need to follow [the AngularJS commit message guidelines.](https://docs.google.com/document/d/1rk04jEuGfk9kYzfqCuOlPTSJw3hEDZJTBN5E5f1SALo)
You can read more about commitizen [here](https://commitizen.github.io/cz-cli/)

```bash
npm run commit
```
## validate-commit-msg
Validates commit messages on each commit according to [the AngularJS commit message guidelines](https://docs.google.com/document/d/1rk04jEuGfk9kYzfqCuOlPTSJw3hEDZJTBN5E5f1SALo)
## Build
To build your component run following command. This command will minify your css, compile (es2015), ensures to annotate your angular dependencies, inline all your templates, bundle and minify your javascript.

```bash
gulp build
```
## Testing

### Single run
```bash
npm run test
```
### Watch
```bash
npm run karma
```
