(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{251:function(e,t,i){"use strict";i.r(t);var s=i(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Dataservices are a dynamic component of the backend of a Zowe application. Dataservices are optional, because the proxy server might only serve static content for a particular application. However, when included in an application, a dataservice defines a URL space for which the server will run the extensible code from the application. Dataservices are primarily intended to be used to create REST APIs and Websocket channels.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("Specify one of the following values:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),i("p",[e._v("The API for a dataservice can be categorized as Router-based or ZSS-based, and Websocket or not.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),i("p",[e._v("Router-based dataservices must return a (bluebird) Promise that resolves to an ExpressJS router upon success. For more information, see the ExpressJS guide on use of Router middleware: "),i("a",{attrs:{href:"http://expressjs.com/en/guide/using-middleware.html#middleware.router",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Router Middleware"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Because of the nature of Router middleware, the dataservice need only specify URLs that stem from a root '/' path, as the paths specified in the router are later prepended with the unique URL space of the dataservice.")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),i("p",[e._v("ExpressJS routers are fairly flexible, so the contract to create the Router for Websockets is not significantly different.")]),e._v(" "),e._m(26),e._v(" "),i("p",[e._v("See the ws and express-ws topics on "),i("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.npmjs.com"),i("OutboundLink")],1),e._v(" for more information about how they work, as the API for websocket router dataservices is primarily provided in these packages.")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),i("p",[e._v("An object that contains the contents of configuration files, if present.")]),e._v(" "),e._m(33),e._v(" "),i("p",[e._v("An instance of a Zowe Logger, which has its component name as the unique name of the dataservice within a plug-in.")]),e._v(" "),e._m(34),e._v(" "),i("p",[e._v("A function to create a Zowe Logger with a new name, which is appended to the unique name of the dataservice.")]),e._v(" "),e._m(35),e._v(" "),i("p",[e._v("A function that provides common body parsers for HTTP bodies, such as JSON and plaintext.")]),e._v(" "),e._m(36),e._v(" "),i("p",[e._v("An object that contains more context from the plug-in scope, including:")]),e._v(" "),e._m(37)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"dataservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"defining-a-dataservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-dataservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining a dataservice")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Within the "),t("code",[this._v("sample-app")]),this._v(" repository, in the top directory, you will find a "),t("code",[this._v("pluginDefinition.json")]),this._v(" file. Each application requires this file, because it defines how the server registers and uses the backend of an application (called a plug-in in the terminology of the proxy server).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Within the JSON file, there is a top level attribute, "),t("em",[this._v("dataServices")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  "dataServices": [\n    {\n      "type": "router",\n      "name": "hello",\n      "serviceLookupMethod": "external",\n      "fileName": "helloWorld.js",\n      "routerFactory": "helloWorldRouter",\n      "dependenciesIncluded": true\n    }\n  ]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dataservices-defined-in-plugindefinition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataservices-defined-in-plugindefinition","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataservices defined in pluginDefinition")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following attributes are valid for each dataservice in the "),t("em",[this._v("dataServices")]),this._v(" array:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("type")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[t("strong",[this._v("router")]),this._v(": Router dataservices are dataservices that run under the proxy server, and use ExpressJS Routers for attaching actions to URLs and methods.")])]),this._v(" "),t("li",[t("p",[t("strong",[this._v("service")]),this._v(": Service dataservices are dataservices that run under ZSS, and utilize the API of ZSS dataservices for attaching actions to URLs and methods.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The name of the service that must be unique for each "),t("code",[this._v("pluginDefinition.json")]),this._v(" file. The name is used to reference the dataservice during logging and it is also is used in the construction of the URL space that the dataservice occupies.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("serviceLookupMethod")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Specify "),t("code",[this._v("external")]),this._v(" unless otherwise instructed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("fileName")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The name of the file that is the entry point for construction of the dataservice, relative to the application's "),t("code",[this._v("/lib")]),this._v(" directory. In the case of "),t("code",[this._v("sample-app")]),this._v(", upon transpilation of the typescript code, javascript files are placed into the "),t("code",[this._v("/lib")]),this._v(" directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("routerFactory (Optional)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you use a router dataservice, the dataservice is included in the proxy server through a "),t("code",[this._v("require()")]),this._v(" statement. If the dataservice's exports are defined such that the router is provided through a factory of a specific name, you must state the name of the exported factory using this attribute.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("dependenciesIncluded")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Must be "),t("code",[this._v("true")]),this._v(" for anything in the "),t("code",[this._v("pluginDefinition.json")]),this._v(" file. (This setting is false only when adding dataservices to the server dynamically.)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dataservice-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataservice-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataservice API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" Each Router dataservice can safely import express, express-ws, and bluebird without requiring the modules to be present, because these modules exist in the proxy server's directory and the "),t("em",[this._v("NODE_MODULES")]),this._v(" environment variable can include this directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"router-based-dataservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-based-dataservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Router-based dataservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"http-rest-router-dataservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-rest-router-dataservices","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP/REST router dataservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Promise for the Router can be within a Factory export function, as mentioned in the "),t("code",[this._v("pluginDefinition")]),this._v(" specification for "),t("em",[this._v("routerFactory")]),this._v(" above, or by the module constructor.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("An example is available in "),t("code",[this._v("sample-app/nodeServer/ts/helloWorld.ts")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"websocket-router-dataservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-router-dataservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Websocket router dataservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Here, the express-ws package is used, which adds websockets through the ws package to ExpressJS. The two changes between a websocket-based router and a normal router are that the method is 'ws', as in "),t("code",[this._v("router.ws(<url>,<callback>)")]),this._v(", and  the callback provides the websocket on which you must define event listeners.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("An example is available in "),t("code",[this._v("zlux-server-framework/plugins/terminal-proxy/lib/terminalProxy.js")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"router-dataservice-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-dataservice-context","aria-hidden":"true"}},[this._v("#")]),this._v(" Router dataservice context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Every router-based dataservice is provided with a "),t("code",[this._v("Context")]),this._v(" object upon creation that provides definitions of its surroundings and the functions that are helpful. The following items are present in the "),t("code",[this._v("Context")]),this._v(" object:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("serviceDefinition")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The dataservice definition, originally from the "),t("code",[this._v("pluginDefinition.json")]),this._v(" file within a plug-in.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("serviceConfiguration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("logger")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("makeSublogger")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("addBodyParseMiddleware")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("plugin")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[i("strong",[e._v("pluginDef")]),e._v(": The contents of the "),i("code",[e._v("pluginDefinition.json")]),e._v(" file that contains this dataservice.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("server")]),e._v(": An object that contains information about the server's configuration such as:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("app")]),e._v(": Information about the product, which includes the "),i("em",[e._v("productCode")]),e._v(" (for example: "),i("code",[e._v("ZLUX")]),e._v(").")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("user")]),e._v(": Configuration information of the server, such as the port on which it is listening.")])])])])])}],!1,null,null,null);r.options.__file="mvd-dataservices.md";t.default=r.exports}}]);