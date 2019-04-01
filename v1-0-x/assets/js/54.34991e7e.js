(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{212:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"troubleshooting-api-ml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-api-ml","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting API ML")]),e._v(" "),a("p",[e._v("As an API Mediation Layer user, you may encounter problems with the functioning of API ML. This article presents known API ML issues and their solutions.")]),e._v(" "),a("h2",{attrs:{id:"enable-api-ml-debug-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-api-ml-debug-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable API ML Debug Mode")]),e._v(" "),a("p",[e._v("Use debug mode to activate the following functions:")]),e._v(" "),a("ul",[a("li",[e._v("Display additional debug messages for the API ML")]),e._v(" "),a("li",[e._v("Enable changing log level for individual code components")])]),e._v(" "),a("p",[a("strong",[e._v("Important:")]),e._v(" We highly recommend that you enable debug mode only when you want to troubleshoot issues.\nDisable debug mode when you are not troubleshooting. Running in debug mode while operating API ML can adversely affect\nits performance and create large log files that consume a large volume of disk space.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v('Set the MFS_LOG_LEVEL parameter to "debug" in the MFSxPRM member. The member resides in the RUNHLQ.CMFSOPTN data set.'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MFS_LOG_LEVEL="debug"\n')])])])]),e._v(" "),a("li",[e._v("Restart the API ML internal services (Gateway, Discovery Service, and Catalog) as applicable to the problem that you are troubleshooting.\nYou successfully enabled debug mode.")]),e._v(" "),a("li",[e._v("Repeat the procedure that initially caused the problem.")]),e._v(" "),a("li",[e._v("Review the debug messages and contact Support, if necessary.")]),e._v(" "),a("li",[e._v("After you finish troubleshooting the error, set the MFS_LOG_LEVEL parameter back to the initial setting:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MFS_LOG_LEVEL=""\n')])])])]),e._v(" "),a("li",[e._v("Restart all API ML services (Gateway, Discovery Service, and Catalog).\nYou successfully disabled debug mode.")])]),e._v(" "),a("h2",{attrs:{id:"change-the-log-level-of-individual-code-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-log-level-of-individual-code-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Change the Log Level of Individual Code Components")]),e._v(" "),a("p",[e._v("You can change the log level of a particular code component of the API ML internal service at run time.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Enable API ML Debug Mode as described in Enable API ML Debug Mode.\nThis activates the application/loggers endpoints in each API ML internal service (Gateway, Discovery Service, and Catalog).")])]),e._v(" "),a("li",[a("p",[e._v("List the available loggers of a service by issuing the GET request for the given service URL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET scheme://hostname:port/application/loggers\n")])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("scheme")])]),e._v(" "),a("p",[e._v("API ML service scheme (http or https)")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("hostname")])]),e._v(" "),a("p",[e._v("API ML service hostname")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("port")])]),e._v(" "),a("p",[e._v("TCP port where API ML service listens on. The port is defined by the configuration parameter MFS_GW_PORT for the Gateway,\nMFS_DS_PORT for the Discovery Service (by default, set to gateway port + 1), and MFS_AC_PORT for the Catalog\n(by default, set to gateway port + 2).")])])]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" One way to issue REST calls is to use the http command in the free HTTPie tool: https://httpie.org/.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTPie command:\nhttp GET https://lpar.ca.com:10000/application/loggers\n\nOutput:\n{"levels":["OFF","ERROR","WARN","INFO","DEBUG","TRACE"],\n "loggers":{\n   "ROOT":{"configuredLevel":"INFO","effectiveLevel":"INFO"},\n   "com":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   "com.ca":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   ...\n }\n}\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Alternatively, you extract the configuration of a specific logger using the extended "),a("strong",[e._v("GET")]),e._v(" request:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET scheme://hostname:port/application/loggers/{name}\n")])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("{name}")])]),e._v(" "),a("p",[e._v("is the logger name")])])])]),e._v(" "),a("li",[a("p",[e._v("Change the log level of the given component of the API ML internal service. Use the POST request for the given service URL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POST scheme://hostname:port/application/loggers/{name}\n")])])]),a("p",[e._v("The POST request requires a new log level parameter value that is provided in the request body:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n\n"configuredLevel": "level"\n\n}\n')])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("level")])]),e._v(" "),a("p",[e._v("is the new log level: "),a("strong",[e._v("OFF")]),e._v(", "),a("strong",[e._v("ERROR")]),e._v(", "),a("strong",[e._v("WARN")]),e._v(", "),a("strong",[e._v("INFO")]),e._v(", "),a("strong",[e._v("DEBUG")]),e._v(", "),a("strong",[e._v("TRACE")])])])]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http POST https://hostname:port/application/loggers/com.ca.mfaas.enable.model configuredLevel=WARN\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"known-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),a("h3",{attrs:{id:"api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled","aria-hidden":"true"}},[e._v("#")]),e._v(" API ML stops accepting connections after z/OS TCP/IP stack is recycled")]),e._v(" "),a("p",[a("strong",[e._v("Symptom:")])]),e._v(" "),a("p",[e._v("When z/OS TCP/IP stack is restarted, it is possible that the internal services of API Mediation Layer\n(Gateway, Catalog, and Discovery Service) stop accepting all incoming connections, go into a continuous loop,\nand write a numerous error messages in the log.")]),e._v(" "),a("p",[a("strong",[e._v("Sample message:")])]),e._v(" "),a("p",[e._v("The following message is a typical error message displayed in STDOUT:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2018-Sep-12 12:17:22.850. org.apache.tomcat.util.net.NioEndpoint -- Socket accept failed java.io.IOException: EDC5122I Input/output error. \n\n.at sun.nio.ch.ServerSocketChannelImpl.accept0(Native Method) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:478) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:287) ~.na:1.8.0.\n.at org.apache.tomcat.util.net.NioEndpoint$Acceptor.run(NioEndpoint.java:455) ~.tomcat-coyote-8.5.29.jar!/:8.5.29. \n.at java.lang.Thread.run(Thread.java:811) .na:2.9 (12-15-2017).\n")])])]),a("p",[a("strong",[e._v("Solution:")])]),e._v(" "),a("p",[e._v("Restart API Mediation Layer.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v("  To prevent this issue from occurring, it is strongly recommended not to restart TCP/IP stack while the API ML is running.")])])}],!1,null,null,null);n.options.__file="troubleshoot-apiml.md";t.default=n.exports}}]);