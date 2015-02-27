!function(){"use strict";angular.module("nocca.widgets",[])}(),angular.module("nocca.widgets").run(["$templateCache",function(e){e.put("request-dialog.directive.html",'<md-content layout="column"> <md-tabs md-selected="selectedIndex" flex="" layout-fill=""> <md-tab label="Request"> <nocca-widgets-request-preview preview="content.request" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab label="Proxied Request"> <nocca-widgets-request-preview preview="content.proxiedRequest" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab label="Response"> <nocca-widgets-request-preview preview="content.response" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> </md-tabs> <md-content class="md-padding"> <md-divider></md-divider> <div layout="row"> <md-switch ng-model="requestDialog.raw" aria-label="Switch 1"> <span class="fa fa-search-plus"></span> raw </md-switch> <md-switch ng-model="requestDialog.body" aria-label="Switch 1"> <span class="fa fa-user"></span> body </md-switch> <span flex=""></span> <md-button ng-click="close()" class="md-primary"> close </md-button> </div> </md-content> </md-content> '),e.put("request-preview.directive.html",'<div> <md-item-content class="md-padding"> <div class="md-tile-left"> raw <span class="fa" ng-class="{\'fa-eye\': requestDialog.raw, \'fa-eye-slash\': !requestDialog.raw}"></span> <md-switch ng-model="requestDialog.rawWrap" aria-label="Switch 1"> wrap </md-switch> </div> <div class="md-tile-content"> <md-content class="md-padding"> <pre ng-show="requestDialog.raw" ng-class="{\'nocca-request-preview-wrap\': requestDialog.rawWrap}">{{ preview | json:4 }}</pre> </md-content> </div> </md-item-content> <md-divider></md-divider> <md-item-content class="md-padding"> <div class="md-tile-left"> body <span class="fa" ng-class="{\'fa-eye\': requestDialog.body, \'fa-eye-slash\': !requestDialog.body}"></span><br> <md-switch ng-model="requestDialog.bodyWrap" aria-label="Switch 1"> wrap </md-switch> </div> <div class="md-tile-content"> <md-content class="md-padding"> <em ng-show="!preview.body">No body to show</em> <pre ng-show="preview.body && requestDialog.body" ng-class="{\'nocca-request-preview-wrap\': requestDialog.bodyWrap}">{{ preview.body }}</pre> </md-content> </div> </md-item-content> </div>'),e.put("response.directive.html",'<md-item-content> <div class="md-tile-left response-tile-left"> {{ response.response.statusCode}} <br> {{ response.request.method }} <br> </div> <div class="md-tile-content"> <h3> {{ response.hash }} </h3> <p> <span> <md-tooltip>incoming request</md-tooltip> <span class="fa fa-sign-in"></span> {{ response.request.method }} {{ response.request.url }} </span> </p> <p ng-show="response.proxiedRequest"> <span> <md-tooltip>forwarded request</md-tooltip> <span class="fa fa-sign-out"></span> {{ response.proxiedRequest.method }} {{ response.proxiedRequest.protocol + \'//\' + response.proxiedRequest.host + response.proxiedRequest.path }} </span> </p>    <p> <md-button ng-click="showDialog($event)"> View bodies </md-button> </p> </div> </md-item-content>')}]),function(){"use strict";function e(){function e(e,t){function s(s){var i=e.response;t.show({controller:["$scope",function(e){e.content=i}],template:'<md-dialog nocca-widgets-request-dialog class="nocca-request-dialog"></md-dialog>',targetEvent:s})}e.showDialog=s}var t={restrict:"EA",scope:{response:"="},templateUrl:"response.directive.html",controller:e};return e.$inject=["$scope","$mdDialog"],t}angular.module("nocca.widgets").directive("noccaWidgetsResponse",e)}(),function(){"use strict";function e(){var e={restrict:"EA",scope:{preview:"=",requestDialog:"="},templateUrl:"request-preview.directive.html"};return e}angular.module("nocca.widgets").directive("noccaWidgetsRequestPreview",e)}(),function(){"use strict";function e(){function e(e,t,s){s.bind(e,"requestDialog",{raw:!0,rawWrap:!0,body:!0,bodyWrap:!0}),e.close=function(){t.hide()}}var t={restrict:"EA",templateUrl:"request-dialog.directive.html",controller:e};return e.$inject=["$scope","$mdDialog","localStorageService"],t}angular.module("nocca.widgets").directive("noccaWidgetsRequestDialog",e)}();
!function(){"use strict";angular.module("nocca.utils",[])}(),angular.module("nocca.utils").run(["$templateCache",function(t){t.put("download-dialog.directive.html",'<div> <md-content> <md-input-container flex="33"> <label>Filename</label> <input ng-model="download.filename"> </md-input-container> </md-content> <div class="md-actions"> <md-button ng-click="cancel()">Cancel</md-button> <md-button ng-click="save()">Save</md-button> </div> </div>')}]),function(){"use strict";function t(){function t(){return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,n=function(){return t.URL||t.webkitURL||t},o=e.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in o,i=function(n){var o=e.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)},r=t.webkitRequestFileSystem,c=t.requestFileSystem||r||t.mozRequestFileSystem,l=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u="application/octet-stream",d=0,s=500,f=function(e){var o=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};t.chrome?o():setTimeout(o,s)},v=function(t,e,n){e=[].concat(e);for(var o=e.length;o--;){var a=t["on"+e[o]];if("function"==typeof a)try{a.call(t,n||t)}catch(i){l(i)}}},m=function(e,l){var s,m,g,p=this,w=e.type,h=!1,y=function(){v(p,"writestart progress write writeend".split(" "))},S=function(){if((h||!s)&&(s=n().createObjectURL(e)),m)m.location.href=s;else{var o=t.open(s,"_blank");void 0==o&&"undefined"!=typeof safari&&(t.location.href=s)}p.readyState=p.DONE,y(),f(s)},b=function(t){return function(){return p.readyState!==p.DONE?t.apply(this,arguments):void 0}},O={create:!0,exclusive:!1};return p.readyState=p.INIT,l||(l="download"),a?(s=n().createObjectURL(e),o.href=s,o.download=l,i(o),p.readyState=p.DONE,y(),void f(s)):(t.chrome&&w&&w!==u&&(g=e.slice||e.webkitSlice,e=g.call(e,0,e.size,u),h=!0),r&&"download"!==l&&(l+=".download"),(w===u||r)&&(m=t),c?(d+=e.size,void c(t.TEMPORARY,d,b(function(t){t.root.getDirectory("saved",O,b(function(t){var n=function(){t.getFile(l,O,b(function(t){t.createWriter(b(function(n){n.onwriteend=function(e){m.location.href=t.toURL(),p.readyState=p.DONE,v(p,"writeend",e),f(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&S()},"writestart progress write abort".split(" ").forEach(function(t){n["on"+t]=p["on"+t]}),n.write(e),p.abort=function(){n.abort(),p.readyState=p.DONE},p.readyState=p.WRITING}),S)}),S)};t.getFile(l,{create:!1},b(function(t){t.remove(),n()}),b(function(t){t.code===t.NOT_FOUND_ERR?n():S()}))}),S)}),S)):void S())},g=m.prototype,p=function(t,e){return new m(t,e)};return g.abort=function(){var t=this;t.readyState=t.DONE,v(t,"abort")},g.readyState=g.INIT=0,g.WRITING=1,g.DONE=2,g.error=g.onwritestart=g.onprogress=g.onwrite=g.onabort=g.onerror=g.onwriteend=null,p}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content)}var e=t();return e}angular.module("nocca.utils").factory("noccaUtilsSaveAs",t)}(),function(){"use strict";function t(t,e,n){function o(){a().then(i).then(r)}function a(){return e({url:"http://localhost:3005/caches/package",method:"post"}).then(function(t){return{type:t.headers("Content-Type"),data:t.data}})}function i(t){return n.show({template:"<md-dialog nocca-utils-download-dialog></md-dialog>"}).then(function(e){return t.fileName=e,t},function(){n.hide()})}function r(e){var n=new Blob([JSON.stringify(e.data,null,4)],{type:e.type+";charset=utf-8;"});t(n,e.fileName)}var c={createPackageAndSave:o,createPackage:a,saveDialog:i};return c}angular.module("nocca.utils").factory("noccaUtilsDownload",t),t.$inject=["noccaUtilsSaveAs","$http","$mdDialog","localStorageService"]}(),function(){"use strict";function t(){function t(t,e,n){function o(){e.hide(n.get("download").filename)}function a(){e.hide(!1)}n.bind(t,"download",{filename:"caches.json"}),t.save=o,t.cancel=a}var e={restrict:"EA",templateUrl:"download-dialog.directive.html",controller:t};return t.$inject=["$scope","$mdDialog","localStorageService"],e}angular.module("nocca.utils").directive("noccaUtilsDownloadDialog",t)}();
!function(){"use strict";angular.module("nocca.pages",[])}(),function(){"use strict";function e(){function e(e,t,a){t.data={},t.downloadAll=a.createPackageAndSave,t.$watch(function(){return JSON.stringify(e.data)},function(){t.data=e.data})}var t={restrict:"EA",templateUrl:"status.directive.html",controller:e,controllerAs:"vm"};return e.$inject=["noccaDataConnection","$scope","noccaUtilsDownload"],t}angular.module("nocca.pages").directive("noccaPagesStatus",e)}(),angular.module("nocca.pages").run(["$templateCache",function(e){e.put("canvas.directive.html",'<div ng-cloak="" layout="row" class="nocca-full-height"> <md-sidenav class="md-sidenav-left md-whiteframe-z1" md-component-id="nav"> <md-toolbar> <md-button ng-click="toggleNav()" layout="row" layout-align="center center"> <h1 class="md-toolbar-tools"> <span class="fa fa-chevron-left" style="margin-right: 1em;"></span> Nav </h1>  </md-button> </md-toolbar> <md-content class="md-padding"> <md-list> <md-list-item layout="column"> <md-item-content> <div class="md-tile-content"> <h3>Status</h3> <p> Received requests, responses, recordings, etc </p> <p layout="column"> <a ui-sref="{{ uiStates.status }}" class="nocca-nav-link"> View status <span class="fa fa-angle-right"></span> </a> </p> </div> </md-item-content> <md-divider></md-divider> </md-list-item> <md-list-item layout="column"> <md-item-content> <div class="md-tile-content"> <h3>Manage caches</h3> <p> Import caches, export caches, yadayada </p> <p layout="column"> <a ui-sref="{{ uiStates.status }}" class="nocca-nav-link"> Manage caches <span class="fa fa-angle-right"></span> </a> </p> </div> </md-item-content> <md-divider></md-divider> </md-list-item> </md-list> </md-content> </md-sidenav> <md-content flex=""> <md-toolbar layout="row"> <h1 class="md-toolbar-tools" flex=""> You are looking at the Nocca interface </h1> </md-toolbar> <md-content class="md-padding" flex="100"></md-content> <md-button class="md-raised md-primary" ng-click="toggleNav()"> <span class="fa fa-cogs"></span> <span class="fa fa-chevron-right"></span> </md-button> <ui-view></ui-view> </md-content> </div>'),e.put("export.directive.html",'<md-content class="md-padding"> <h2>Export</h2> <md-list> <md-item layout="row"> <div flex="15"> Save as JSON </div> <div> Yada </div> </md-item> </md-list> </md-content>'),e.put("status.directive.html",'<div> <md-content class="md-padding"> <h2 flex="">Status</h2> <md-tabs md-selected="selectedTabIndex" flex=""> <md-tab label="All responses ({{ data.responses | noccaDataObjectLength }})"> <md-content class="md-spacing"> <md-list> <md-list-item ng-repeat="(hash, response) in data.responses track by hash"> <nocca-widgets-response response="response"></nocca-widgets-response> <md-divider></md-divider> </md-list-item> </md-list> </md-content> </md-tab> <md-tab label="By Endpoints ({{ data.endpoints | noccaDataObjectLength }})" ng-disabled="!data.endpoints"> <md-content> <section ng-repeat="(endpoint, hashKeys) in data.endpoints track by endpoint"> <md-subheader class="md-primary">{{ endpoint }}</md-subheader> <md-list> <md-item ng-repeat="hashKey in hashKeys | noccaDataUnique"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Recorded ({{ data.recorded.length }})" ng-disabled="!data.recorded.length"> <md-content> <section> <md-list> <md-item ng-repeat="hashKey in data.recorded track by $index"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Forwarded ({{ data.forwarded.length }})" ng-disabled="!data.forwarded.length"> <md-content ng-show="data.forwarded.length"> <section> <md-list> <md-item ng-repeat="hashKey in data.forwarded track by $index"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Replayed ({{ data.replayed.length }})" ng-disabled="!data.replayed.length"> <md-content> <section> <md-list> <md-item ng-repeat="hashKey in data.replayed track by $index"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> </md-tabs> <md-content layout="row" class="md-padding"> <md-button ng-click="downloadAll()" ng-disabled="!data.recorded.length"> <span class="fa fa-cloud-download"></span> Download recorded ({{ data.recorded.length }}) </md-button> <span flex=""></span> <md-button ng-click="showRaw = !showRaw"> <span class="fa" ng-class="{\'fa-eye\': showRaw, \'fa-eye-slash\': !showRaw}"></span> raw data </md-button> </md-content> <pre ng-show="showRaw">{{ data | json:4 }}</pre> </md-content> </div>')}]),function(){"use strict";function e(){}angular.module("nocca.pages").config(e)}(),function(){"use strict";function e(){function e(e,t){t.data=e.data}var t={restrict:"EA",templateUrl:"export.directive.html",controller:e};return e.$inject=["noccaDataConnection","$scope"],t}angular.module("nocca.pages").directive("noccaPagesExport",e)}(),function(){"use strict";function e(e){function t(t,a){t.toggleNav=function(){a("nav").toggle()},t.uiStates=e}var a={restrict:"EA",replace:!0,templateUrl:"canvas.directive.html",controller:t};return t.$inject=["$scope","$mdSidenav"],a}angular.module("nocca.pages").directive("noccaPagesCanvas",e),e.$inject=["noccaNavigationStates"]}();
!function(){"use strict";angular.module("nocca.navigation",[])}(),function(){"use strict";angular.module("nocca.navigation").constant("noccaNavigationStates",{status:"nocca-status","export":"nocca-export",manage:"nocca-manage"})}(),function(){"use strict";function a(a,t,n){t.otherwise("/");var o=n;a.state(o.status,{url:"/",template:"<nocca-pages-status></nocca-pages-status>"}).state(o["export"],{url:"/export",template:"<nocca-pages-export></nocca-pages-export>"})}angular.module("nocca.navigation").config(a),a.$inject=["$stateProvider","$urlRouterProvider","noccaNavigationStates"]}();
!function(){"use strict";angular.module("nocca.data",[])}(),function(){"use strict";function t(){return function(t,a){for(var n={},c=[],o=0,e=t.length;e>o;o+=1){var u=t[o];"object"==typeof t[o]&&(u=t[o][a]),"undefined"==typeof n[u]&&c.push(t[o]),n[u]=t[o]}return c}}angular.module("nocca.data").filter("noccaDataUnique",t)}(),function(){"use strict";angular.module("nocca.data").value("noccaDataOptions",{host:"ws://localhost:3005"})}(),function(){"use strict";function t(){return function(t){var a=0;return"object"==typeof t&&(a=Object.keys(t).length),a}}angular.module("nocca.data").filter("noccaDataObjectLength",t)}(),function(){"use strict";function t(t,a,n){function c(){var c=t.$new(a.host);c.$on("$message",function(t){Object.keys(o.api.data).forEach(function(t){delete o.api.data[t]}),Object.keys(t).forEach(function(a){o.api.data[a]=t[a]}),n.$apply()})}var o={api:{data:{}}};return c(),o.api}angular.module("nocca.data").factory("noccaDataConnection",t),t.$inject=["$websocket","noccaDataOptions","$rootScope"]}();
!function(){"use strict";angular.module("nocca.core",["ui.router","ngWebsocket","ngMaterial","LocalStorageModule","nocca.navigation","nocca.pages","nocca.data","nocca.widgets","nocca.utils"])}(),function(){"use strict";function e(e,c){c.setPrefix("nocca"),e.theme("default").primaryPalette("blue-grey").accentPalette("blue")}angular.module("nocca.core").config(e),e.$inject=["$mdThemingProvider","localStorageServiceProvider"]}();