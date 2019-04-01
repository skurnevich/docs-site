(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{262:function(e,t,i){"use strict";i.r(t);var r=i(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("The Zowe Application Server and ZSS utilize the same deployment and Application/Plugin structure, and share some configuration parameters. It is possible to run ZSS and the Zowe Application Server from the same system, in which case you would be running under z/OS USS. This configuration requires that IBM's version of nodeJS is installed beforehand.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Getting started with the server requires the following steps:")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("Follow each step and you will be on your way to your first Zowe Application Server instance.")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Because all of the code is on github, yet ZSS must run on z/OS and the Zowe Application Server can optionally run on z/OS as well, having git on z/OS is the most convenient way to work with the source code. The alternative would be to utilize FTP or another method to transfer contents to z/OS.\nIf you'd like to go this route, you can find git for z/OS free of charge here: http://www.rocketsoftware.com/product-categories/mainframe/git-for-zos")]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("To get started, first clone or download the GitHub capstone repository "),i("a",{attrs:{href:"https://github.com/zowe/zlux",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/zowe/zlux"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[i("strong",[e._v("Note:")]),e._v(" Make sure that you have your SSH key set up and added to GitHub. For how to do this, see "),i("a",{attrs:{href:"https://help.github.com/articles/connecting-to-github-with-ssh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generating SSH keys"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Because we will be configuring ZSS on z/OS's USS, and the Zowe Application Server on a LUW host, you will need to place the contents on both systems.\nIf you are using git, use the following commands.")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),i("p",[e._v("Read the "),i("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Configuration-for-zLUX-App-Server-&-ZSS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration"),i("OutboundLink")],1),e._v(" wiki page for a detailed explanation of the primary items that you will want to configure for your first server.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),i("p",[e._v("Application plug-ins can contain server and web components. The web components must be built, as webpack is involved in optimized packaging. Server components are also likely to need building if they require external dependencies from NPM, use native code, or are written in typescript.")]),e._v(" "),i("p",[e._v("This example server only needs transpilation and packaging of web components, and therefore we do not need any special build steps for the host running ZSS.")]),e._v(" "),i("p",[e._v("Instead, on the host that runs the Zowe Application Server, run the script that will automatically build all included application plug-ins. Simply,")]),e._v(" "),e._m(22),i("p",[e._v("This will take some time to complete.")]),e._v(" "),e._m(23),e._v(" "),i("p",[e._v("If you are running the Zowe Application Server separate from ZSS, ensure the ZSS installation configuration is deployed. You can accomplish this through:")]),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),i("p",[e._v("At this point, all server files have been configured and the application plug-ins built, so ZSS and the Zowe Application Server are ready to run.\nFirst, from the z/OS system, start ZSS.")]),e._v(" "),e._m(28),i("p",[e._v("If the zssServer server did not start, two common sources of error are:")]),e._v(" "),e._m(29),e._v(" "),i("p",[e._v("Second, from the system with the Zowe Application Server, start it with a few parameters to hook it to ZSS.")]),e._v(" "),e._m(30),i("p",[e._v("Valid parameters for nodeServer are as follows:")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),i("p",[e._v("After which we would be able to connect to the Zowe Application Server at port 19998.")]),e._v(" "),i("p",[i("strong",[e._v("NOTE:")]),e._v(" the parameter parsing is provided by "),i("a",{attrs:{href:"https://github.com/zowe/zlux-proxy-server/blob/master/js/argumentParser.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("argumentParser.js"),i("OutboundLink")],1),e._v(", which allows for a few variations of input, depending on preference. For example, the following are all valid ways to specify the ZSS host:")]),e._v(" "),e._m(34),e._v(" "),i("p",[e._v("When the Zowe Application Server has started, one of the last messages you will see as bootstrapping completes is that the server is listening on the HTTP/s port. At this time, you should be able to use the server.")]),e._v(" "),e._m(35),e._v(" "),i("p",[e._v("Now that ZSS and the Zowe Application Server are both started, you can access this instance by pointing your web browser to the Zowe Application Server.\nIn this example, the address you will want to go to first is the location of the window management application: the Zowe Desktop. The URL is:")]),e._v(" "),e._m(36),e._v(" "),i("p",[e._v("Once here, a Login window opens with a few example application plug-ins in the taskbar at the bottom of the window. To try the application plug-ins to see how they interact with the framework, can login with your mainframe credentials.")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._m(40),e._v(" "),i("p",[e._v('This section does not cover dynamic runtime inclusion of application plug-ins, but rather application plug-ins that are defined in advance.\nIn the configuration file, a directory can be specified which contains JSON files that tell the server what application plug-in to include and where to find it on disk. The backend of these application plug-ins use the Server\'s Plugin structure, so much of the server-side references to application plug-ins use the term "Plugin".')]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),i("p",[e._v("When running the Zowe Application Server, simply specify a few flags to declare which ZSS instance the Zowe Application Framework will proxy ZSS requests to:")]),e._v(" "),e._m(49)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"stand-up-a-local-version-of-the-example-zowe-application-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stand-up-a-local-version-of-the-example-zowe-application-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Stand up a local version of the Example Zowe Application Server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("zlux-app-server")]),this._v(" repository is an example of a server built upon the application framework. Within the repository, you will find a collection of build, deploy, and run scripts and configuration files that will help you to configure a simple Zowe Application Server with a few applications included.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"server-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Server layout")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At the core of the application infrastructure backend is an extensible server, written for nodeJS and utilizing expressJS for routing. It handles the backend components of an application, and can serve as a proxy for requests from applications to additional servers, as needed. One such proxy destination is the ZSS, the Zowe Application Framework backend component for "),t("strong",[this._v("Z Secure Services")]),this._v(", a so called agent for the Zowe Application Server. If you want to set up a Zowe Application Framework installation, contact Rocket to obtain the ZSS binary to use in the installation process.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"zss-and-zowe-application-server-overlap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zss-and-zowe-application-server-overlap","aria-hidden":"true"}},[this._v("#")]),this._v(" ZSS and Zowe Application Server overlap")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Another way to set up Zowe Application Framework is to have the Zowe Application  Server running under LUW, while keeping ZSS under USS. This is the configuration scenario presented below. In this scenario, you must clone these github repositories to two different systems, and they will require compatible configurations. If this is your initial setup, it is fine to have identical configuration files and "),t("code",[this._v("/plugins")]),this._v(" folders to get started.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"first-time-installation-and-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#first-time-installation-and-use","aria-hidden":"true"}},[this._v("#")]),this._v(" First-time Installation and Use")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",{attrs:{start:"0"}},[i("li",[i("a",{attrs:{href:"#0-optional-install-git-for-zos"}},[e._v("(Optional) Install git for z/OS")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#1-acquire-the-source-code"}},[e._v("Acquire the source code")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#2-acquire-external-components"}},[e._v("Acquire external components")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#3-set-the-server-configuration"}},[e._v("Set the server configuration")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#4-build-application-plug-ins"}},[e._v("Build application plug-ins")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#5-deploy-server-configuration-files"}},[e._v("Deploy server configuration files")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#6-run-the-server"}},[e._v("Run the server")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#7-connect-in-a-browser"}},[e._v("Connect in a browser!")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_0-optional-install-git-for-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-optional-install-git-for-z-os","aria-hidden":"true"}},[this._v("#")]),this._v(" 0. (Optional) Install git for z/OS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-acquire-the-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-acquire-the-source-code","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Acquire the source code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('git clone --recursive git@github.com:zowe/zlux.git\ncd zlux\ngit submodule foreach "git checkout master"\ncd zlux-build\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At this point, you have the latest code from each repository on your system.\nContinue from within "),t("code",[this._v("zlux-app-server")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-acquire-external-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-acquire-external-components","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Acquire external components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Applications and external servers can require contents that are not in the Zowe github repositories. In the case of the "),t("code",[this._v("zlux-app-server")]),this._v(", there is a a ZSS binary component which cannot be found in the repositories. To obtain the ZSS binary component, contact the Zowe project.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After you obtain the ZSS binary component, you should receive "),t("em",[this._v("zssServer")]),this._v(".\nThis must be placed within "),t("em",[this._v("zlux-build/externals/Rocket")]),this._v(", on the z/OS host.\nFor example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mkdir externals\nmkdir externals/Rocket\n\n//(on z/OS only)\nmv zssServer externals/Rocket\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-set-the-server-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-the-server-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Set the server configuration")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In short, ensure that within the "),i("code",[e._v("config/zluxserver.json")]),e._v(" file, "),i("strong",[e._v("node.http.port")]),e._v(" or "),i("strong",[e._v("node.https.port")]),e._v(" and the other HTTPS parameters are set to your liking on the LUW host, and that "),i("strong",[e._v("zssPort")]),e._v(" is set on the z/OS host.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Before you continue, if you intend to use the terminal, at this time (temporarily) it must be pre-configured to know the destination host.\nEdit "),i("em",[e._v("../tn3270-ng2/_defaultTN3270.json")]),e._v(" to set "),i("em",[e._v("host")]),e._v(" and "),i("em",[e._v("port")]),e._v(" to a valid TN3270 server telnet host and port and then save the file.\nEdit "),i("em",[e._v("../vt-ng2/_defaultVT.json")]),e._v(" to set "),i("em",[e._v("host")]),e._v(" and "),i("em",[e._v("port")]),e._v(" to a valid ssh host and port and then save the file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_4-build-application-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-build-application-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Build application plug-ins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Prerequisites:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("NPM is used when building application plug-ins. The version of NPM needed for the build to succeed should be at least 5.4. You can update NPM by executing "),i("code",[e._v("npm install -g npm")]),e._v(".")]),e._v(" "),i("li",[e._v("You must have "),i("code",[e._v("ant")]),e._v(" and "),i("code",[e._v("ant-contrib")]),e._v(" installed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("//Windows\nbuild.bat\n\n//Otherwise\nbuild.sh\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_5-deploy-server-configuration-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-deploy-server-configuration-files","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Deploy server configuration files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ant deploy\n")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("On the other hand, if you are running ZSS and the Zowe Application Server on the same host, "),i("em",[e._v("build.sh")]),e._v(" and "),i("em",[e._v("build.bat")]),e._v(" execute "),i("em",[e._v("deploy")]),e._v(" and therefore this task was accomplished in "),i("a",{attrs:{href:"#4-build-application-plug-ins"}},[e._v("Step 4")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("However, if you need to change the server configuration files or if you want to add more application plug-ins to be included at startup, you must update the deploy content to reflect this. Simply running "),t("code",[this._v("deploy.bat")]),this._v(" or "),t("code",[this._v("deploy.sh")]),this._v(" will accomplish this, but files such as "),t("code",[this._v("zluxserver.json")]),this._v(" are only read at startup, so a reload of the Zowe Application Server and ZSS would be required.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_6-run-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-run-the-server","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. Run the server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd ../zlux-app-server/bin\n./zssServer.sh\n")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[e._v("The "),i("em",[e._v("zssPort")]),e._v(" chosen is already occupied. To fix this, edit "),i("em",[e._v("config/zluxserver.json")]),e._v(" to choose a new one, and re-run "),i("em",[e._v("build/deploy.sh")]),e._v(" to make the change take effect.")]),e._v(" "),i("li",[e._v("The zssServer binary does not have the APF bit set. Because this server is meant for secure services, it is required. To fix this, execute "),i("code",[e._v("extattr +a zssServer")]),e._v(". Note that you might need to alter the execute permissions of "),i("code",[e._v("zssServer.sh")]),e._v(" in the event that the previous command is not satisfactory (for example: "),i("code",[e._v("chmod +x zssServer.sh")]),e._v(")")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd ../zlux-app-server/bin\n\n// Windows:\nnodeServer.bat <parameters>\n\n// Others:\nnodeServer.sh <parameters>\n")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("em",[e._v("-h")]),e._v(": Specifies the hostname where ZSS can be found. Use as "),i("code",[e._v("-h \\<hostname\\>")])]),e._v(" "),i("li",[i("em",[e._v("-P")]),e._v(": Specifies the port where ZSS can be found. Use as "),i("code",[e._v("-P \\<port\\>")]),e._v(". This overrides "),i("em",[e._v("zssPort")]),e._v(" from the configuration file.")]),e._v(" "),i("li",[i("em",[e._v("-p")]),e._v(": Specifies the HTTP port to be used by the Zowe Application Server. Use as "),i("code",[e._v("-p <port>")]),e._v(". This overrides "),i("em",[e._v("node.http.port")]),e._v(" from the configuration file.")]),e._v(" "),i("li",[i("em",[e._v("-s")]),e._v(": Specifies the HTTPS port to be used by the Zowe Application Server. Use as "),i("code",[e._v("-s <port>")]),e._v(". This overrides "),i("em",[e._v("node.https.port")]),e._v(" from the configuration file.")]),e._v(" "),i("li",[i("em",[e._v("--noChild")]),e._v(": If specified, tells the server to ignore and skip spawning of child processes defined as "),i("em",[e._v("node.childProcesses")]),e._v(" in the configuration file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the example where we run ZSS on a host named "),t("code",[this._v("mainframe.zowe.com")]),this._v(", running on zssPort = 19997, the Zowe Application Server running on Windows could be started with the following:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("nodeServer.bat -h mainframe.zowe.com -P 19997 -p 19998")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("-h myhost.com")])]),this._v(" "),t("li",[t("strong",[this._v("-h=myhost.com")])]),this._v(" "),t("li",[t("strong",[this._v("--hostServer myhost.com")])]),this._v(" "),t("li",[t("strong",[this._v("--hostServer=myhost.com")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_7-connect-in-a-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-connect-in-a-browser","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. Connect in a browser")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("http(s)://<zLUX App Server>:<node.http(s).port>/ZLUX/plugins/org.zowe.zlux.bootstrap/web/index.html")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("tn3270-ng2: This application communicates with the Zowe Application Server to enable a TN3270 connection in the browser.")]),e._v(" "),i("li",[e._v("z/OS Subsystems: This application shows various z/OS subsystems installed on the host the ZSS runs on. This is accomplished through discovery of these services by the application's portion running in the ZSS context.")]),e._v(" "),i("li",[e._v("sample-angular-app: A simple app that show how a zLUX application frontend (here, Angular) component can communicate with an App backend (REST) component.")]),e._v(" "),i("li",[e._v("sample-react-app: Similar to the Angular application, but using React instead to show how you have the flexibility to use a framework of your choice.")]),e._v(" "),i("li",[e._v("sample-iframe-app: Similar in functionality to the Angular and React sample application, but presented by means of inclusion of an iframe, to show that pre-existing pages can be included.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"deploy-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploy example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// All paths relative to zlux-app-server/js or zlux-app-server/bin\n// In real installations, these values will be configured during the install.\n  "rootDir":"../deploy",\n  "productDir":"../deploy/product",\n  "siteDir":"../deploy/site",\n  "instanceDir":"../deploy/instance",\n  "groupsDir":"../deploy/instance/groups",\n  "usersDir":"../deploy/instance/users"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"application-plug-in-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-plug-in-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Application plug-in configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To include application plug-ins, be sure to define the location of the "),t("code",[this._v("Plugins")]),this._v(" directory in the configuration file, through the top-level attribute "),t("em",[this._v("pluginsDir")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("strong",[e._v("NOTE:")]),e._v(" In this repository, the directory for these JSON files is "),i("code",[e._v("/plugins")]),e._v(". To separate configuration files from runtime files, the "),i("code",[e._v("zlux-app-server")]),e._v(" repository copies the contents of this folder into "),i("code",[e._v("/deploy/instance/ZLUX/plugins")]),e._v(". So, the example configuration file uses the latter directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"plugins-directory-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins-directory-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins directory example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// All paths relative to zlux-app-server/js or zlux-app-server/bin\n// In real installations, these values will be configured during the install.\n//...\n  "pluginsDir":"../deploy/instance/ZLUX/plugins",\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"zss-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zss-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" ZSS Configuration")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Running ZSS requires a JSON configuration file that is similar or the same as the one used for the Zowe Application Server. The attributes that are needed for ZSS, at minimum, are:"),i("em",[e._v("rootDir")]),e._v(", "),i("em",[e._v("productDir")]),e._v(", "),i("em",[e._v("siteDir")]),e._v(", "),i("em",[e._v("instanceDir")]),e._v(", "),i("em",[e._v("groupsDir")]),e._v(", "),i("em",[e._v("usersDir")]),e._v(", "),i("em",[e._v("pluginsDir")]),e._v(" and "),i("strong",[e._v("zssPort")]),e._v(". All of these attributes have the same meaning as described above for the Zowe Application Server, but if the Zowe Application Server and ZSS are not run from the same location, then these directories can be different.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("strong",[this._v("zssPort")]),this._v(" attribute is specific to ZSS. This is the TCP port on which ZSS will listen to be contacted by the Zowe Application Server. Define this port in the configuration file as a value between 1024-65535.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"connecting-zowe-application-server-to-zss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-zowe-application-server-to-zss","aria-hidden":"true"}},[this._v("#")]),this._v(" Connecting Zowe Application Server to ZSS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("em",[this._v("-h")]),this._v(": Declares the host where ZSS can be found. Use as "),t("code",[this._v("-h \\<hostname\\>")])]),this._v(" "),t("li",[t("em",[this._v("-P")]),this._v(": Declares the port at which ZSS is listening. Use as "),t("code",[this._v("-P \\<port\\>")])])])}],!1,null,null,null);n.options.__file="zlux-app-server.md";t.default=n.exports}}]);