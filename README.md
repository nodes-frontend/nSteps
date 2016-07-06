# nAddContent
[![Build Status](https://travis-ci.org/nodes-frontend/nAddContent.svg?branch=master)](https://travis-ci.org/nodes-frontend/nAddContent) [![Coverage Status](https://coveralls.io/repos/github/nodes-frontend/nAddContent/badge.svg?branch=master)](https://coveralls.io/github/nodes-frontend/nAddContent?branch=master)

Add's content based on specified template

![Screencapture GIF](https://raw.githubusercontent.com/nodes-frontend/nAddContent/master/demo.gif)

# Getting started
```bash
npm install n-add-content --save
```
Inject module dependency

```js
angular.module('app', ['nAddContent']);
```

# Usage
The component comes with several directives: n-add-content-create, n-add-content-reset, n-add-content-remove and n-add-content-container 

Specify the container which the content should be added to
```html
<div n-add-content-container></div>
```

Add control to add the content ex. button

```html
<button type="button" class="button" n-add-content-create template="template.html">+ Add</button>
```

To reset the container content 
```html
<button type="button" class="button" n-add-content-reset>Clear all</button>
```

To remove a specific item, following can be used inside the items template
```html
<button type="button" class="button" n-add-content-remove uuid="{{nAddContentItem.uuid}}">Remove</button>
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
```# nSteps
