!function(){"use strict";angular.module("nocca.widgets",[])}(),angular.module("nocca.widgets").run(["$templateCache",function(e){e.put("cache-repository.directive.html",'<md-item-content> <div class="md-tile-content"> <h3>{{ endpointKey }}</h3> <md-content layout="row" class="md-padding"> <dl class="nocca-scenario-details" layout="" layout-wrap=""> <dt flex="30">Cache count:</dt> <dd flex="60">{{ caches | noccaDataObjectLength }}</dd> </dl> <div layout="column"> <md-button ng-click="clearCacheRepository(endpointKey)" class="md-primary"> <span class="fa fa-fw fa-trash-o"></span> Empty caches </md-button> </div> </md-content> </div> </md-item-content>'),e.put("request-dialog.directive.html",'<md-content layout="column"> <md-tabs md-selected="selectedIndex" flex="" layout-fill=""> <md-tab> <md-tab-label ng-if="!asIcons">Client Request</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>Client Request</md-tooltip> <span class="fa fa-fw fa-sign-in"></span> </md-tab-label> <nocca-widgets-request-preview preview="content.clientRequest" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab> <md-tab-label ng-if="!asIcons">Proxy Request</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>Proxy Request</md-tooltip> <span class="fa fa-fw fa-sign-out"></span> </md-tab-label> <nocca-widgets-request-preview preview="content.proxyRequest" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab> <md-tab-label ng-if="!asIcons">Proxy Response</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>Proxy Response</md-tooltip> <span class="fa fa-fw fa-sign-in fa-flip-horizontal"></span> </md-tab-label> <nocca-widgets-request-preview preview="content.proxyResponse" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab> <md-tab-label ng-if="!asIcons">Playback Response</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>Playback Response</md-tooltip> <span class="fa fa-fw fa-sign-in fa-flip-horizontal"></span> </md-tab-label> <nocca-widgets-request-preview preview="content.playbackResponse" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab> <md-tab-label ng-if="!asIcons">Client Response</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>Client Response</md-tooltip> <span class="fa fa-fw fa-sign-out fa-flip-horizontal"></span> </md-tab-label> <nocca-widgets-request-preview preview="content.clientResponse" request-dialog="requestDialog"> </nocca-widgets-request-preview> </md-tab> <md-tab> <md-tab-label ng-if="!asIcons">full raw</md-tab-label> <md-tab-label ng-if="asIcons"> <md-tooltip>full raw</md-tooltip> <span class="fa fa-fw fa-puzzle-piece"></span> </md-tab-label> <md-content class="md-padding"> <pre>{{ content | json:4 }}</pre> </md-content> </md-tab> </md-tabs> <md-content class="md-padding"> <md-divider></md-divider> <div layout="row"> <span flex=""></span> <md-button ng-click="close()" class="md-primary"> close </md-button> </div> </md-content> </md-content> '),e.put("request-preview.directive.html",'<md-content> <md-item-content class="md-padding" layout-align="start start"> <div class="md-tile-left" flex="5"> <div layout="column" class="md-padding"> <md-button ng-click="requestDialog.raw = !requestDialog.raw" ng-class="{\'md-accent\': requestDialog.raw}"> <md-tooltip md-direction="right">Show or hide this</md-tooltip> <span class="fa fa-fw" ng-class="{ \'fa-eye\': requestDialog.raw, \'fa-eye-slash\': !requestDialog.raw }"></span> </md-button> <md-button ng-click="requestDialog.rawWrap = !requestDialog.rawWrap" ng-class="{\'md-accent\': requestDialog.rawWrap}"> <md-tooltip md-direction="right">Wrap long lines</md-tooltip> <span class="fa fa-fw" ng-class="{ \'fa-level-down fa-rotate-90\': requestDialog.rawWrap, \'fa-long-arrow-down fa-rotate-270\': !requestDialog.rawWrap }"></span> </md-button> </div> </div> <div class="md-tile-content"> <md-content class="md-padding"> <pre ng-show="requestDialog.raw" ng-class="{\'nocca-request-preview-wrap\': requestDialog.rawWrap}">{{ preview | json:4 }}</pre> </md-content> </div> </md-item-content> <md-divider></md-divider> <md-item-content class="md-padding" layout-align="start start"> <div class="md-tile-left" flex="5"> <div layout="column" class="md-padding"> <md-button ng-click="requestDialog.body = !requestDialog.body" ng-class="{\'md-accent\': requestDialog.body}"> <md-tooltip md-direction="right">Show or hide this</md-tooltip> <span class="fa fa-fw" ng-class="{ \'fa-eye\': requestDialog.body, \'fa-eye-slash\': !requestDialog.body }"></span> </md-button> <md-button ng-click="requestDialog.bodyWrap = !requestDialog.bodyWrap" ng-class="{\'md-accent\': requestDialog.bodyWrap}"> <md-tooltip md-direction="right">Wrap long lines</md-tooltip> <span class="fa fa-fw" ng-class="{ \'fa-level-down fa-rotate-90\': requestDialog.bodyWrap, \'fa-long-arrow-down fa-rotate-270\': !requestDialog.bodyWrap }"></span> </md-button> <md-button ng-click="requestDialog.bodyPrettyPrint = !requestDialog.bodyPrettyPrint" ng-class="{\'md-accent\': requestDialog.bodyPrettyPrint}"> <md-tooltip md-direction="right">Fix indention</md-tooltip> <span class="fa fa-fw" ng-class="{ \'fa-align-justify\': !requestDialog.bodyPrettyPrint, \'fa-indent\': requestDialog.bodyPrettyPrint }"></span> </md-button> </div> </div> <div class="md-tile-content"> <md-content class="md-padding"> <em ng-show="!preview.body">No body to show</em> <pre ng-show="preview.body && requestDialog.body && !requestDialog.bodyPrettyPrint" ng-class="{\'nocca-request-preview-wrap\': requestDialog.bodyWrap}">{{ preview.body }}</pre> <pre ng-show="preview.body && requestDialog.body && requestDialog.bodyPrettyPrint" ng-class="{\'nocca-request-preview-wrap\': requestDialog.bodyWrap}">{{ prettyBody }}</pre> </md-content> </div> </md-item-content> </md-content>'),e.put("response.directive.html",'<md-item-content> <div class="md-tile-left nocca-response-tile-left"> <span class="nocca-timestamp fa fa-clock-o"> {{ response.timestamp | date:\'HH:mm:ss.sss\' }}</span> <em>{{ response.clientResponse.statusCode}}</em> <em>{{ response.clientRequest.method }}</em> <md-button ng-click="showDialog($event)"> View bodies </md-button> </div> <div class="md-tile-content"> <h3> {{ response.hash }} </h3> <p> <span> <md-tooltip>endpoint definition</md-tooltip> <span class="fa fa-server"></span> {{ response.endpoint.key }} </span> </p> <div ng-mouseleave="truncateOn()" ng-mouseenter="truncateOff()"> <p> <md-tooltip>Generated request key</md-tooltip> <span class="fa fa-key"></span> {{ response.requestKey | characters:truncateLength:true }} </p> </div> <p> <span> <md-tooltip>incoming request</md-tooltip> <span class="fa fa-sign-in"></span> {{ response.clientRequest.method }} {{ response.clientRequest.path }} </span> </p> <p ng-show="response.proxiedRequest"> <span> <md-tooltip>forwarded request</md-tooltip> <span class="fa fa-sign-out"></span> {{ response.proxiedRequest.method }} {{ response.proxiedRequest.protocol + \'//\' + response.proxiedRequest.host + response.proxiedRequest.path }} </span> </p> </div> </md-item-content>'),e.put("scenario.directive.html",'<md-item-content> <div class="md-tile-content"> <h3>{{ scenario.scenario.title }}</h3> <h4 class="nocca-scenario-key">{{ scenario.scenario.name }}</h4> <md-content layout="row" class="md-padding"> <dl class="nocca-scenario-details" layout="" layout-wrap=""> <dt flex="30">Scenario enabled:</dt> <dd flex="60">{{ scenario.$$active }}</dd> <dt flex="30">Current step:</dt> <dd flex="60">{{ scenario.currentPosition.state.name }}</dd> <dt flex="30">Step count:</dt> <dd flex="60">{{ scenario.states | noccaDataObjectLength }}</dd> </dl> <div layout="column"> <md-button ng-click="resetScenario(scenario.scenario.name)" ng-disabled="scenario.currentPosition.state.name == scenario.scenario.initialStateKey" class="md-primary"> <span class="fa fa-fw fa-backward"></span> Reset scenario </md-button> <md-button ng-click="disableScenario(scenario.scenario.name)" ng-show="scenario.$$active" class="md-primary"> <span class="fa fa-fw fa-pause"></span> Pause scenario </md-button> <md-button ng-click="enableScenario(scenario.scenario.name)" ng-hide="scenario.$$active" class="md-primary"> <span class="fa fa-fw fa-play"></span> Play scenario </md-button> </div> </md-content> </div> </md-item-content>')}]),function(){"use strict";function e(){function e(e,t,a,n){e.refresh=n.refresh,e.resetScenario=n.resetScenario,e.enableScenario=n.enableScenario,e.disableScenario=n.disableScenario}function t(){}var a={restrict:"EA",require:"^noccaPagesCaches",templateUrl:"scenario.directive.html",scope:{scenario:"="},link:e,controller:t,controllerAs:"vm"};return a}angular.module("nocca.widgets").directive("noccaWidgetsScenario",e)}(),function(){"use strict";function e(){function e(e,t,a){function n(){i=a(function(){e.truncateLength="off"},c)}function o(){a.cancel(i),i=a(function(){e.truncateLength=r},c)}function s(a){var n=e.response;t.show({controller:["$scope",function(e){e.content=n}],template:'<md-dialog nocca-widgets-request-dialog class="nocca-request-dialog"></md-dialog>',targetEvent:a})}var i,r=170,c=400;e.truncateLength=r,e.truncateOff=n,e.truncateOn=o,e.showDialog=s}var t={restrict:"EA",scope:{response:"="},templateUrl:"response.directive.html",controller:e};return e.$inject=["$scope","$mdDialog","$timeout"],t}angular.module("nocca.widgets").directive("noccaWidgetsResponse",e)}(),function(){"use strict";function e(){function e(e){if(e.preview){var t=e.preview.headers||{};Object.keys(t).forEach(function(a){return"content-type"===a.toLowerCase()?(e.prettyBody=t[a].indexOf("xml")>-1||t[a].indexOf("html")>-1?vkbeautify.xml(e.preview.body):t[a].indexOf("json")>-1?vkbeautify.json(e.preview.body):e.preview.body,!1):void 0})}}var t={restrict:"EA",scope:{preview:"=",requestDialog:"="},templateUrl:"request-preview.directive.html",link:e};return t}angular.module("nocca.widgets").directive("noccaWidgetsRequestPreview",e)}(),function(){"use strict";function e(){function e(e,t,a,n){e.$watch(function(){return!a("gt-md")},function(t){e.asIcons=t}),n.bind(e,"requestDialog",{raw:!0,rawWrap:!0,body:!0,bodyWrap:!0}),e.close=function(){t.hide()}}var t={restrict:"EA",templateUrl:"request-dialog.directive.html",controller:e};return e.$inject=["$scope","$mdDialog","$mdMedia","localStorageService"],t}angular.module("nocca.widgets").directive("noccaWidgetsRequestDialog",e)}(),function(){"use strict";function e(){function e(e,t,a,n){e.refresh=n.refresh,e.clearCacheRepositories=n.clearCacheRepositories,e.clearCacheRepository=n.clearCacheRepository}function t(){}var a={restrict:"EA",require:"^noccaPagesCaches",templateUrl:"cache-repository.directive.html",scope:{endpointKey:"=",caches:"="},link:e,controller:t,controllerAs:"vm"};return a}angular.module("nocca.widgets").directive("noccaWidgetsCacheRepository",e)}();
!function(){"use strict";angular.module("nocca.utils",[])}(),angular.module("nocca.utils").run(["$templateCache",function(t){t.put("download-dialog.directive.html",'<div> <md-content> <md-input-container flex="33"> <label>Filename</label> <input ng-model="download.filename"> </md-input-container> </md-content> <div class="md-actions"> <md-button ng-click="cancel()">Cancel</md-button> <md-button ng-click="save()">Save</md-button> </div> </div>')}]),function(){"use strict";function t(){function t(){return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,n=function(){return t.URL||t.webkitURL||t},o=e.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in o,i=function(n){var o=e.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)},r=t.webkitRequestFileSystem,c=t.requestFileSystem||r||t.mozRequestFileSystem,l=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u="application/octet-stream",d=0,s=500,f=function(e){var o=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};t.chrome?o():setTimeout(o,s)},v=function(t,e,n){e=[].concat(e);for(var o=e.length;o--;){var a=t["on"+e[o]];if("function"==typeof a)try{a.call(t,n||t)}catch(i){l(i)}}},m=function(e,l){var s,m,g,p=this,w=e.type,h=!1,y=function(){v(p,"writestart progress write writeend".split(" "))},S=function(){if((h||!s)&&(s=n().createObjectURL(e)),m)m.location.href=s;else{var o=t.open(s,"_blank");void 0==o&&"undefined"!=typeof safari&&(t.location.href=s)}p.readyState=p.DONE,y(),f(s)},b=function(t){return function(){return p.readyState!==p.DONE?t.apply(this,arguments):void 0}},O={create:!0,exclusive:!1};return p.readyState=p.INIT,l||(l="download"),a?(s=n().createObjectURL(e),o.href=s,o.download=l,i(o),p.readyState=p.DONE,y(),void f(s)):(t.chrome&&w&&w!==u&&(g=e.slice||e.webkitSlice,e=g.call(e,0,e.size,u),h=!0),r&&"download"!==l&&(l+=".download"),(w===u||r)&&(m=t),c?(d+=e.size,void c(t.TEMPORARY,d,b(function(t){t.root.getDirectory("saved",O,b(function(t){var n=function(){t.getFile(l,O,b(function(t){t.createWriter(b(function(n){n.onwriteend=function(e){m.location.href=t.toURL(),p.readyState=p.DONE,v(p,"writeend",e),f(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&S()},"writestart progress write abort".split(" ").forEach(function(t){n["on"+t]=p["on"+t]}),n.write(e),p.abort=function(){n.abort(),p.readyState=p.DONE},p.readyState=p.WRITING}),S)}),S)};t.getFile(l,{create:!1},b(function(t){t.remove(),n()}),b(function(t){t.code===t.NOT_FOUND_ERR?n():S()}))}),S)}),S)):void S())},g=m.prototype,p=function(t,e){return new m(t,e)};return g.abort=function(){var t=this;t.readyState=t.DONE,v(t,"abort")},g.readyState=g.INIT=0,g.WRITING=1,g.DONE=2,g.error=g.onwritestart=g.onprogress=g.onwrite=g.onabort=g.onerror=g.onwriteend=null,p}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content)}var e=t();return e}angular.module("nocca.utils").factory("noccaUtilsSaveAs",t)}(),function(){"use strict";function t(t,e,n){function o(){a().then(i).then(r)}function a(){return e({url:"http://localhost:3005/caches/package",method:"post"}).then(function(t){return{type:t.headers("Content-Type"),data:t.data}})}function i(t){return n.show({template:"<md-dialog nocca-utils-download-dialog></md-dialog>"}).then(function(e){return t.fileName=e,t},function(){n.hide()})}function r(e){var n=new Blob([JSON.stringify(e.data,null,4)],{type:e.type+";charset=utf-8;"});t(n,e.fileName)}var c={createPackageAndSave:o,createPackage:a,saveDialog:i};return c}angular.module("nocca.utils").factory("noccaUtilsDownload",t),t.$inject=["noccaUtilsSaveAs","$http","$mdDialog","localStorageService"]}(),function(){"use strict";function t(){function t(t,e,n){function o(){e.hide(n.get("download").filename)}function a(){e.hide(!1)}n.bind(t,"download",{filename:"caches.json"}),t.save=o,t.cancel=a}var e={restrict:"EA",templateUrl:"download-dialog.directive.html",controller:t};return t.$inject=["$scope","$mdDialog","localStorageService"],e}angular.module("nocca.utils").directive("noccaUtilsDownloadDialog",t)}();
!function(){"use strict";angular.module("nocca.pages",[])}(),function(){"use strict";function e(){function e(e,a,t,n,s){function o(){a.data=n(angular.extend({},d))}var d;a.data={},a.searchModel=s,a.filter={size:0,on:!1,query:void 0},a.filterData=o,a.downloadAll=t.createPackageAndSave,a.$watch(function(){return e.lastUpdate},function(){d=e.data,o()})}var a={restrict:"EA",templateUrl:"status.directive.html",controller:e,controllerAs:"vm"};return e.$inject=["noccaDataConnection","$scope","noccaUtilsDownload","noccaDataSearchFilter","noccaDataSearchModel"],a}angular.module("nocca.pages").directive("noccaPagesStatus",e)}(),function(){"use strict";function e(){function e(e,a,t,n){function s(){var e="http://";return n.servers.wrapperServer.enabled?(e+=n.servers.wrapperServer.wrapper.host||document.location.host,e+=n.servers.httpApi.wrapper.path):(e+=n.servers.httpApi.listen.hostname||document.location.hostname,e+=":"+n.servers.httpApi.listen.port),e}function o(){a({method:"get",url:s()+"/scenarios/recorder"}).then(function(a){e.recorder=a.data},function(){e.recorder=void 0})}function d(e){t.show(t.simple().content(e).position("top right"))}function r(){var t=angular.extend({},e.scenarioModel);t.startRecording=!0,a({method:"put",url:s()+"/scenarios/recorder",data:t}).then(function(){d("Recording started successfully"),o()},function(e){d("Could not start recording: "+e.data),o()})}function i(){var t=angular.extend({},e.scenarioModel);t.stopRecording=!0,a({method:"put",url:s()+"/scenarios/recorder",data:t}).then(function(){d("Recording stopped and saved"),o()},function(e){d("Could not stop recording: "+e.data),o()})}function c(){var t=angular.extend({},e.scenarioModel);t.cancelRecording=!0,a({method:"delete",url:s()+"/scenarios/recorder"}).then(function(){d("Recording cancelled"),o()},function(e){d("Could not cancel recording: "+e.data),o()})}e.startRecording=r,e.stopRecording=i,e.cancelRecording=c,e.scenarioModel={},o()}var a={restrict:"EA",templateUrl:"scenarios.directive.html",controller:e};return e.$inject=["$scope","$http","$mdToast","noccaCoreConfig"],a}angular.module("nocca.pages").directive("noccaPagesScenarios",e)}(),angular.module("nocca.pages").run(["$templateCache",function(e){e.put("caches.directive.html",'<div> <md-content class="md-padding"> <md-button ng-click="refresh();">Refresh</md-button> <md-tabs> <md-tab label="Scenarios"> <md-content> <md-list> <md-item ng-repeat="(scenarioKey, scenario) in scenarios"> <nocca-widgets-scenario scenario="scenario"> </nocca-widgets-scenario> <md-divider></md-divider> </md-item> </md-list> </md-content> </md-tab> <md-tab label="Repositories"> <md-content class="md-padding"> <md-button ng-click="noccaPagesCaches.clearCacheRepositories()"> <span class="fa fa-fw fa-trash-o"></span> Clear all </md-button> </md-content> <md-content> <md-list> <md-item ng-repeat="(endpointKey, caches) in repositories"> <nocca-widgets-cache-repository endpoint-key="endpointKey" caches="caches"> </nocca-widgets-cache-repository> <md-divider></md-divider> </md-item> </md-list> </md-content> </md-tab> </md-tabs> </md-content> </div>'),e.put("canvas.directive.html",'<div ng-cloak="" layout="row" class="nocca-full-height"> <nocca-navigation-side-nav></nocca-navigation-side-nav> <md-content flex=""> <md-toolbar layout="row"> <h1 class="md-toolbar-tools" flex=""> You are looking at the Nocca interface </h1> </md-toolbar> <md-content class="md-padding" flex="100"></md-content> <md-button class="md-raised md-primary" ng-click="toggleNav()"> <span class="fa fa-cogs"></span> <span class="fa fa-chevron-right"></span> </md-button> <div ui-view=""></div> </md-content> </div>'),e.put("export.directive.html",'<md-content class="md-padding"> <h2>Export</h2> <md-list> <md-item layout="row"> <div flex="15"> Save as JSON </div> <div> Yada </div> </md-item> </md-list> </md-content>'),e.put("scenarios.directive.html",'<div> <md-content class="md-padding" layout="column"> <h2>Manage scenarios</h2> <md-content layout="row" layout-margin=""> <div flex="20"> <span>Recorder status:</span> </div> <div flex=""> <pre ng-show="recorder">{{ recorder | json:4 }}</pre> <span ng-show="!recorder"><span class="fa fa-power-off"></span> OFF</span> </div> </md-content> <form name="scenarioRecorder" ng-submit="startRecording()" ng-show="!recorder" layout="row" layout-wrap=""> <md-input-container flex="60"> <label>Scenario key</label> <input ng-model="scenarioModel.name" required ng-pattern="/^[a-zA-Z0-9]+([a-zA-Z0-9\\-\\_\\.]+[a-zA-Z0-9]+)$/" name="name"> <div ng-messages="scenarioRecorder.name.$error"> <div ng-message="required">Please provide a key, this is a unique scenario identifier</div> <div ng-message="pattern">Please keep it simple, don\'t start or end with a weird char, and no weird chars other than - _ .</div> </div> </md-input-container> <md-input-container flex="60"> <label>Scenario title</label> <input ng-model="scenarioModel.title" required name="title"> <div ng-messages="scenarioRecorder.title.$error"> <div ng-message="required">Please provide a title, this is your human readable reference</div> </div> </md-input-container> <div layout="row" layout-align="end end" flex="60"> <md-button class="md-primary"> <span class="fa fa-video-camera"></span> start </md-button> </div> </form> <md-content ng-show="recorder" layout="row" layout-wrap=""> <md-divider flex="60"></md-divider> <md-content flex="60" class="md-padding"></md-content> <div flex="60" layout="row"> <md-button ng-click="cancelRecording()" ng-show="recorder" class="md-warn"> <span class="fa fa-ban"></span> cancel </md-button> <span flex=""></span> <md-button ng-click="stopRecording()" ng-show="recorder" class="md-primary"> <span class="fa fa-stop"></span> stop and save </md-button> </div> </md-content> </md-content> </div>'),e.put("status.directive.html",'<div> <md-content class="md-padding"> <div layout="row"> <h2 flex="">Status</h2> <div> <md-input-container> <label><span class="fa fa-filter"></span> Filter</label> <input type="text" ng-model="searchModel.model.query" ng-change="filterData()" ng-model-options="{ updateOn: \'default blur\', debounce: {\'default\': 500, \'blur\': 0}}"> <div ng-messages="searchModel.search"> <div ng-message="active">Found {{ searchModel.search.count }} responses</div> </div> </md-input-container> <div ng-show="searchModel.model.query"> <div> <md-button ng-click="searchModel.toggleField(\'clientRequest\'); filterData()" ng-class="{\'md-primary\': searchModel.model.clientRequest }"> <span class="fa fa-fw fa-sign-in"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'proxyRequest\'); filterData()" ng-class="{\'md-primary\': searchModel.model.proxyRequest }"> <span class="fa fa-fw fa-sign-out"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'proxyResponse\'); filterData()" ng-class="{\'md-primary\': searchModel.model.proxyResponse }"> <span class="fa fa-fw fa-sign-in fa-flip-horizontal"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'playbackResponse\'); filterData()" ng-class="{\'md-primary\': searchModel.model.playbackResponse }"> <span class="fa fa-fw fa-play-circle-o"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'clientResponse\'); filterData()" ng-class="{\'md-primary\': searchModel.model.clientResponse }"> <span class="fa fa-fw fa-sign-out fa-flip-horizontal"></span> </md-button> | search where </div> <md-divider></md-divider> <div> <md-button ng-click="searchModel.toggleField(\'endpointKey\'); filterData()" ng-class="{\'md-primary\': searchModel.model.endpointKey }"> <span class="fa fa-fw fa-server"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'requestKey\'); filterData()" ng-class="{\'md-primary\': searchModel.model.requestKey }"> <span class="fa fa-fw fa-key"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'headers\'); filterData()" ng-class="{\'md-primary\': searchModel.model.headers }"> <span class="fa fa-fw fa-file-code-o"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'body\'); filterData()" ng-class="{\'md-primary\': searchModel.model.body }"> <span class="fa fa-fw fa-user"></span> </md-button> <md-button ng-click="searchModel.toggleField(\'path\'); filterData()" ng-class="{\'md-primary\': searchModel.model.path }"> <span class="fa fa-fw fa-link"></span> </md-button> | search what </div> </div> </div> </div> <md-tabs md-selected="selectedTabIndex" flex=""> <md-tab label="All responses ({{ data.responses | noccaDataObjectLength }})"> <md-content> <md-list> <md-item ng-repeat="(hash, response) in data.responses | noccaDataOrderObject:\'timestamp\':true track by hash"> <nocca-widgets-response response="response"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </md-content> </md-tab> <md-tab label="By Endpoints ({{ data.endpoints | noccaDataObjectLength }})" ng-disabled="!data.endpoints"> <md-content> <section ng-repeat="(endpoint, hashKeys) in data.endpoints track by endpoint"> <md-subheader class="md-primary">{{ endpoint }}</md-subheader> <md-list> <md-item ng-repeat="hashKey in hashKeys | noccaDataUnique track by hashKey" ng-if="data.responses[hashKey]"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Recorded ({{ data.recorded.length }})" ng-disabled="!data.recorded.length"> <md-content> <section> <md-list> <md-item ng-repeat="hashKey in data.recorded track by $index" ng-if="data.responses[hashKey]"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Forwarded ({{ data.forwarded.length }})" ng-disabled="!data.forwarded.length"> <md-content ng-show="data.forwarded.length"> <section> <md-list> <md-item ng-repeat="hashKey in data.forwarded track by $index" ng-if="data.responses[hashKey]"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Replayed ({{ data.replayed.length }})" ng-disabled="!data.replayed.length"> <md-content> <section> <md-list> <md-item ng-repeat="hashKey in data.replayed track by $index" ng-if="data.responses[hashKey]"> <nocca-widgets-response response="data.responses[hashKey]"></nocca-widgets-response> <md-divider></md-divider> </md-item> </md-list> </section> </md-content> </md-tab> <md-tab label="Story"> <md-content> <md-list> <md-item ng-repeat="line in data.storyLog | noccaDataOrderObject:\'timestamp\':true track by line.id" class="nocca-story-line" ng-if="data.responses[line.requestKeyHash]"> <md-item-content> <div class="md-tile-left"> <span class="nocca-timestamp fa fa-clock-o"> {{ line.timestamp | date:\'HH:mm:ss.sss\' }} </span> </div> <div class="md-tile-content"> <span ng-class="{\'fa-circle\': line.rec}" class="fa fa-fw"></span> <span ng-class="{\'fa-sign-out\': line.fwd}" class="fa fa-fw"></span> <span ng-class="{\'fa-play\': line.rpl}" class="fa fa-fw"></span> <span ng-class="{\'fa-question\': line.miss}" class="fa fa-fw"></span> <span>{{ line.line }}</span> </div> </md-item-content> </md-item> </md-list> </md-content> </md-tab> </md-tabs> <md-content layout="row" class="md-padding"> <md-button ng-click="downloadAll()" ng-disabled="!data.recorded.length"> <span class="fa fa-cloud-download"></span> Download recorded ({{ data.recorded.length }}) </md-button> <span flex=""></span> <md-button ng-click="showRaw = !showRaw"> <span class="fa" ng-class="{\'fa-eye\': showRaw, \'fa-eye-slash\': !showRaw}"></span> raw data </md-button> </md-content> <pre ng-if="showRaw">{{ data | json:4 }}</pre> </md-content> </div>')}]),function(){"use strict";function e(){}angular.module("nocca.pages").config(e)}(),function(){"use strict";function e(){function e(e,a){a.data=e.data}var a={restrict:"EA",templateUrl:"export.directive.html",controller:e};return e.$inject=["noccaDataConnection","$scope"],a}angular.module("nocca.pages").directive("noccaPagesExport",e)}(),function(){"use strict";function e(){function e(e,a){e.toggleNav=function(){a("nav").toggle()}}var a={restrict:"EA",templateUrl:"canvas.directive.html",controller:e};return e.$inject=["$scope","$mdSidenav"],a}angular.module("nocca.pages").directive("noccaPagesCanvas",e)}(),function(){"use strict";function e(){function e(e,a){function t(){n(a),i(a)}function n(){return e.getScenarios().then(function(e){a.scenarios=e})}function s(t){return e.getScenario(t).then(function(e){a.scenarios[t]=e})}function o(a){return e.resetScenario(a).then(function(){return s(a)})}function d(a){return e.toggleScenarioActive(a,!0).then(function(){return s(a)})}function r(a){return e.toggleScenarioActive(a,!1).then(function(){return s(a)})}function i(){return e.getCacheRepositories().then(function(e){a.repositories=e})}function c(t){return e.clearCacheRepository(t).then(function(e){a.repositories[t]=e})}function l(){return e.clearCacheRepositories().then(function(e){a.repositories=e})}a.scenarios={},a.repositories={},this.refresh=t,this.resetScenario=o,this.enableScenario=d,this.disableScenario=r,this.clearCacheRepository=c,this.clearCacheRepositories=l,t(a)}var a={restrict:"EA",templateUrl:"caches.directive.html",controller:e,controllerAs:"noccaPagesCaches"};return e.$inject=["noccaApi","$scope"],a}angular.module("nocca.pages").directive("noccaPagesCaches",e)}();
!function(){"use strict";angular.module("nocca.navigation",[])}(),function(){"use strict";angular.module("nocca.navigation").constant("noccaNavigationStates",{nocca:"nocca",status:"nocca.status",caches:"nocca.caches","export":"nocca.export",manage:"nocca.manage",scenarios:"nocca.scenarios"})}(),function(){"use strict";function a(){function a(a,e,t){var n=!1;a.hideNavOnMouseLeave=function(a){a?n=!0:n===!0&&e("nav").close()},a.uiStates=t}var e={restrict:"EA",replace:!0,templateUrl:"side-nav.directive.html",controller:a};return a.$inject=["$scope","$mdSidenav","noccaNavigationStates"],e}angular.module("nocca.navigation").directive("noccaNavigationSideNav",a)}(),angular.module("nocca.navigation").run(["$templateCache",function(a){a.put("side-nav.directive.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z1 nocca-side-nav" md-component-id="nav" ng-mouseleave="hideNavOnMouseLeave()"> <md-toolbar> <md-button ng-click="toggleNav()" layout="row" layout-align="center center"> <h1 class="md-toolbar-tools"> <span class="fa fa-chevron-left" style="margin-right: 1em;"></span> Nav </h1> </md-button> </md-toolbar> <md-content class="md-padding"> <md-list> <md-list-item layout="column"> <md-item-content> <div class="md-tile-content nocca-nav-block" ui-sref="{{ uiStates.status }}" ng-click="hideNavOnMouseLeave(true)"> <h3>Status</h3> <p> Received requests, responses, recordings, etc </p> <p layout="column"> <a class="nocca-nav-link"> View status <span class="fa fa-angle-right"></span> </a> </p> </div> </md-item-content> <md-divider></md-divider> </md-list-item> <md-list-item layout="column"> <md-item-content> <div class="md-tile-content nocca-nav-block" ui-sref="{{ uiStates.caches }}" ng-click="hideNavOnMouseLeave(true)"> <h3>Manage caches</h3> <p> Import caches, export caches, yadayada </p> <p layout="column"> <a class="nocca-nav-link"> Manage caches <span class="fa fa-angle-right"></span> </a> </p> </div> </md-item-content> <md-divider></md-divider> </md-list-item> <md-list-item layout="column"> <md-item-content> <div class="md-tile-content nocca-nav-block" ui-sref="{{ uiStates.scenarios }}" ng-click="hideNavOnMouseLeave(true)"> <h3>Manage scenarios</h3> <p> Start and stop </p> <p layout="column"> <a class="nocca-nav-link"> Manage scenarios <span class="fa fa-angle-right"></span> </a> </p> </div> </md-item-content> <md-divider></md-divider> </md-list-item> </md-list> </md-content> </md-sidenav>')}]),function(){"use strict";function a(a,e,t){e.otherwise("/");var n=t;a.state(n.nocca,{"abstract":!0,url:"",template:"<nocca-pages-canvas></nocca-pages-canvas>",resolve:{config:["noccaCoreConfig",function(a){return a.getConfig()}]}}).state(n.status,{url:"/",template:"<nocca-pages-status></nocca-pages-status>"}).state(n.caches,{url:"/caches",template:"<nocca-pages-caches></nocca-pages-caches>"}).state(n["export"],{url:"/export",template:"<nocca-pages-export></nocca-pages-export>"}).state(n.scenarios,{url:"/scenarios",template:"<nocca-pages-scenarios></nocca-pages-scenarios>"})}angular.module("nocca.navigation").config(a),a.$inject=["$stateProvider","$urlRouterProvider","noccaNavigationStates"]}();
!function(){"use strict";angular.module("nocca.data",[])}(),function(){"use strict";function e(){return function(e,n){for(var t={},o=[],r=0,s=e.length;s>r;r+=1){var a=e[r];"object"==typeof e[r]&&(a=e[r][n]),"undefined"==typeof t[a]&&o.push(e[r]),t[a]=e[r]}return o}}angular.module("nocca.data").filter("noccaDataUnique",e)}(),function(){"use strict";function e(e){function n(n){var o=e.model.query;if(o){var r=new t(e.model.query);e.search.active=!0,e.search.count=0;var s={};Object.keys(n.responses).forEach(function(t){var o=n.responses[t],a=r.subjectMaker(o);r.matches(a)&&(e.search.count++,s[t]=o)}),n.responses=s,e.search.result=n}else e.search.result=n,e.search.count=void 0,e.search.active=!1;return e.search.result}function t(n){function t(e){for(var n=0;a>n;n++)if(e.indexOf(s[n])>-1)return!0;return!1}function o(){var n=["clientRequest","proxyRequest","proxyResponse","playbackResponse","clientResponse"],t=[];n.forEach(function(n){e.model[n]&&t.push(n)});var o=["endpointKey","requestKey","headers","body","path"],r={};return o.forEach(function(n){e.model[n]&&(r[n]=!0)}),function(e){var n=[];return"undefined"!=typeof r.endpointKey&&e.endpoint&&e.endpoint.key&&n.push(e.endpoint.key),"undefined"!=typeof r.requestKey&&e.requestKey&&n.push(e.requestKey),t.forEach(function(t){e[t]&&("undefined"!=typeof r.headers&&e[t].headers&&n.push(e[t].headers),"undefined"!=typeof r.body&&e[t].body&&n.push(e[t].body),"undefined"!=typeof r.path&&e[t].path&&n.push(e[t].path))}),JSON.stringify(n)}}var r=/[, ]/,s=n.split(r),a=s.length;this.matches=t,this.subjectMaker=o()}return n}angular.module("nocca.data").filter("noccaDataSearch",e),e.$inject=["noccaDataSearchModel"]}(),function(){"use strict";function e(e){function n(e){o.model.hasOwnProperty(e)&&(o.model[e]=!o.model[e],t(e))}function t(n){var t={clientRequest:{off:"Not searching client requests",on:"Searching client requests"},proxyRequest:{off:"Not searching proxy requests",on:"Searching proxy requests"},proxyResponse:{off:"Not searching proxy responses",on:"Searching proxy responses"},playbackResponse:{off:"Not searching playback responses",on:"Searching playback responses"},clientResponse:{off:"Not searching client responses",on:"Searching client responses"},endpointKey:{off:"Not searching on endpoint keys",on:"Searching on endpoint keys"},requestKey:{off:"Not searching on request keys",on:"Searching on request keys"},headers:{off:"Not searching in request headers",on:"Searching in request headers"},body:{off:"Not searching client responses",on:"Searching client responses"},path:{off:"Not searching message bodies",on:"Searching message bodies"}},r=o.model[n]?t[n].on:t[n].off;e.show(e.simple().content(r).position("top right"))}var o={model:{query:void 0,clientRequest:!0,proxyRequest:!0,proxyResponse:!0,playbackResponse:!0,clientResponse:!0,endpointKey:!0,requestKey:!0,headers:!0,body:!0,path:!0},search:{active:!1,result:void 0,count:void 0},toggleField:n};return o}angular.module("nocca.data").factory("noccaDataSearchModel",e),e.$inject=["$mdToast"]}(),function(){"use strict";function e(){return function(e,n,t){var o=[];return angular.forEach(e,function(e){o.push(e)}),o.sort(function(e,t){return e[n]>t[n]?1:-1}),t&&o.reverse(),o}}angular.module("nocca.data").filter("noccaDataOrderObject",e)}(),function(){"use strict";function e(){return function(e){var n=0;return"object"==typeof e&&(n=Object.keys(e).length),n}}angular.module("nocca.data").filter("noccaDataObjectLength",e)}(),function(){"use strict";function e(e,n,t){function o(){var o="ws://";n.servers.wrapperServer.enabled?(o+=n.servers.wrapperServer.wrapper.host||document.location.host,o+=n.servers.websocketServer.wrapper.path):(o+=n.servers.websocketServer.listen.hostname||document.location.hostname,o+=":"+n.servers.websocketServer.listen.port);var s=e.$new(o);s.$on("$message",function(e){Object.keys(e).forEach(function(n){Array.isArray(e[n])?Array.prototype.push.apply(r.data[n],e[n]):e[n]instanceof Object&&Object.keys(e[n]).forEach(function(t){r.data[n][t]=e[n][t]})}),r.lastUpdate=(new Date).getTime(),t.$apply()})}var r={lastUpdate:0,data:{responses:{},endpoints:{},recorded:[],forwarded:[],replayed:[],miss:[],storyLog:[]}};return o(),r}angular.module("nocca.data").factory("noccaDataConnection",e),e.$inject=["$websocket","noccaCoreConfig","$rootScope"]}();
!function(){"use strict";angular.module("nocca.core",["ui.router","ngWebsocket","ngMessages","ngAnimate","ngMaterial","LocalStorageModule","truncate","nocca.navigation","nocca.pages","nocca.data","nocca.widgets","nocca.utils","nocca.api"])}(),function(){"use strict";function e(e,n){n.setPrefix("nocca"),e.theme("default").primaryPalette("blue-grey").accentPalette("blue-grey",{"default":"600","hue-1":"700","hue-2":"800","hue-3":"900"})}angular.module("nocca.core").config(e),e.$inject=["$mdThemingProvider","localStorageServiceProvider"]}(),function(){"use strict";function e(e){function n(){return t||(t=e({method:"get",url:"noccaConfig.json"}).then(function(e){return angular.extend(c,e.data),e.data})),t}var t,c={getConfig:n};return c}angular.module("nocca.core").factory("noccaCoreConfig",e),e.$inject=["$http"]}();
!function(){"use strict";angular.module("nocca.api",["ui.router"])}(),function(){"use strict";function e(e,t){function r(){var e="http://";return t.servers.wrapperServer.enabled?(e+=t.servers.wrapperServer.wrapper.host||document.location.host,e+=t.servers.httpApi.wrapper.path):(e+=t.servers.httpApi.listen.hostname||document.location.hostname,e+=":"+t.servers.httpApi.listen.port),e}function n(){return e({url:r()+"/scenarios",method:"GET"}).then(function(e){return e.data})}function o(t){return e({url:r()+"/scenarios/"+t,method:"GET"}).then(function(e){return e.data})}function i(t){return e({url:r()+"/scenarios/"+t+"/currentPosition",method:"DELETE"}).then(function(e){return e.data})}function a(t,n){return e({url:r()+"/scenarios/"+t+"/active",method:"PUT",data:JSON.stringify(n?!0:!1),headers:{"Content-Type":"application/json"}}).then(function(e){return e.data})}function c(){return e({url:r()+"/repositories/memory-caches/endpoints",method:"GET"}).then(function(e){return e.data})}function s(t){return e({url:r()+"/repositories/memory-caches/endpoints/"+t+"/caches",method:"DELETE"}).then(function(e){return e.data})}function u(){return e({url:r()+"/repositories/memory-caches/endpoints",method:"DELETE"}).then(function(e){return e.data})}var p={getScenario:o,getScenarios:n,resetScenario:i,getCacheRepositories:c,clearCacheRepository:s,clearCacheRepositories:u,toggleScenarioActive:a};return p}angular.module("nocca.api").factory("noccaApi",e),e.$inject=["$http","noccaCoreConfig"]}();