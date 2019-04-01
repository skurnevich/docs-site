(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{248:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"application-to-application-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-to-application-communication","aria-hidden":"true"}},[e._v("#")]),e._v(" Application-to-application communication")]),e._v(" "),a("p",[e._v("Zowe application plug-ins can opt-in to various application framework abilities, such as the ability to have a Logger, use of a URI builder utility, and more. One ability that is unique to a Zowe environment with multiple application plug-ins is the ability for one application plug-in to communicate with another. The application framework provides constructs that facilitate this ability. The constructs are: the Dispatcher, Actions, Recognizers, Registry, and the features that utilize them such as the framework's Context menu.")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#why-use-application-to-application-communication"}},[e._v("Why use application-to-application communication?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#actions"}},[e._v("Actions")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#recognizers"}},[e._v("Recognizers")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#dispatcher"}},[e._v("Dispatcher")])])]),e._v(" "),a("h2",{attrs:{id:"why-use-application-to-application-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-application-to-application-communication","aria-hidden":"true"}},[e._v("#")]),e._v(" Why use application-to-application communication?")]),e._v(" "),a("p",[e._v('When working with a computer, people often use multiple applications to accomplish a task, for example checking a dashboard before using a detailed program or checking email before opening a bank statement in a browser. In many environments, the relationship between one program and another is not well defined (you might open one program to learn of a situation, which you solve by opening another program and typing or pasting in content). Or perhaps a hyperlink is provided or an attachment, which opens a program using a lookup table of which the program is the default for handling a certain file extension. The application framework attempts to solve this problem by creating structured messages that can be sent from one application plug-in to another. An application plug-in has a context of the information that it contains. You can use this context to invoke an action on another application plug-in that is better suited to handle some of the information discovered in the first application plug-in. Well-structured messages facilitate knowing what application plug-in is "right" to handle a situation, and explain in detail what that application plug-in should do. This way, rather than finding out that the attachment with the extension ".dat" was not meant for a text editor, but instead for an email client, one application plug-in might instead be able to invoke an action on an application plug-in, which can handle opening of an email for the purpose of forwarding to others (a more specific task than can be explained with filename extensions).')]),e._v(" "),a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),a("p",[e._v("To manage communication from one application plug-in to another, a specific structure is needed. In the application framework, the unit of application-to-application communication is an Action. The typescript definition of an Action is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export class Action implements ZLUX.Action {\n    id: string;           // id of action itself.\n    i18nNameKey: string;  // future proofing for I18N\n    defaultName: string;  // default name for display purposes, w/o I18N\n    description: string;\n    targetMode: ActionTargetMode;\n    type: ActionType;   // "launch", "message"\n    targetPluginID: string;\n    primaryArgument: any;\n\n    constructor(id: string, \n                defaultName: string,\n                targetMode: ActionTargetMode, \n                type: ActionType,\n                targetPluginID: string,\n                primaryArgument:any) {\n       this.id = id;\n       this.defaultName = defaultName;\n       // proper name for ID/type\n       this.targetPluginID = targetPluginID; \n       this.targetMode = targetMode;\n       this.type = type;\n       this.primaryArgument = primaryArgument;\n    }\n\n    getDefaultName():string {\n      return this.defaultName;\n    }\n}\n')])])]),a("p",[e._v("An Action has a specific structure of data that is passed, to be filled in with the context at runtime, and a specific target to receive the data. The Action is dispatched to the target in one of several modes, for example: to target a specific instance of an application plug-in, an instance, or to create a new instance. The Action can be less detailed than a message. It can be a request to minimize, maximize, close, launch, and more. Finally, all of this information is related to a unique ID and localization string such that it can be managed by the framework.")]),e._v(" "),a("h3",{attrs:{id:"action-target-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-target-modes","aria-hidden":"true"}},[e._v("#")]),e._v(" Action target modes")]),e._v(" "),a("p",[e._v("When you request an Action on an application plug-in, the behavior is dependent on the instance of the application plug-in you are targeting.\nYou can instruct the framework how to target the application plug-in with a target mode from the "),a("code",[e._v("ActionTargetMode")]),e._v(" "),a("code",[e._v("enum")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export enum ActionTargetMode {\n  PluginCreate,                // require pluginType\n  PluginFindUniqueOrCreate,    // required AppInstance/ID\n  PluginFindAnyOrCreate,       // plugin type\n  //TODO PluginFindAnyOrFail\n  System,                      // something that is always present\n}\n")])])]),a("h3",{attrs:{id:"action-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Action types")]),e._v(" "),a("p",[e._v("The application framework performs different operations on application plug-ins depending on the type of an Action. The behavior can be quite different, from simple messaging to requesting that an application plug-in be minimized. The types are defined by an "),a("code",[e._v("enum")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export enum ActionType {       // not all actions are meaningful for all target modes\n  Launch,                      // essentially do nothing after target mode\n  Focus,                       // bring to fore, but nothing else\n  Route,                       // sub-navigate or "route" in target\n  Message,                     // "onMessage" style event to plugin\n  Method,                      // Method call on instance, more strongly typed\n  Minimize,\n  Maximize,\n  Close,                       // may need to call a "close handler"\n} \n')])])]),a("h3",{attrs:{id:"loading-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-actions","aria-hidden":"true"}},[e._v("#")]),e._v(" Loading actions")]),e._v(" "),a("p",[e._v("Actions can be created dynamically at runtime, or saved and loaded by the system at login.")]),e._v(" "),a("h3",{attrs:{id:"dynamically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamically","aria-hidden":"true"}},[e._v("#")]),e._v(" Dynamically")]),e._v(" "),a("p",[e._v("You can create Actions by calling the following Dispatcher method: "),a("code",[e._v("makeAction(id: string, defaultName: string, targetMode: ActionTargetMode, type: ActionType, targetPluginID: string, primaryArgument: any):Action")])]),e._v(" "),a("h3",{attrs:{id:"saved-on-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saved-on-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Saved on system")]),e._v(" "),a("p",[e._v("Actions can be stored in JSON files that are loaded at login. The JSON structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "actions": [\n    {\n      "id":"org.zowe.explorer.openmember",\n      "defaultName":"Edit PDS in MVS Explorer",\n      "type":"Launch",\n      "targetMode":"PluginCreate",\n      "targetId":"org.zowe.explorer",\n      "arg": {\n        "type": "edit_pds",\n        "pds": {\n          "op": "deref",\n          "source": "event",\n          "path": [\n            "full_path"\n          ]\n        }\n      }    \n    }\n  ]\n}\n')])])]),a("h2",{attrs:{id:"recognizers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recognizers","aria-hidden":"true"}},[e._v("#")]),e._v(" Recognizers")]),e._v(" "),a("p",[e._v("Actions are meant to be invoked when certain conditions are met. For example, you do not need to open a messaging window if you have no one to message. Recognizers are objects within the application framework that use the context that the application plug-in provides to determine if there is a condition for which it makes sense to execute an Action. Each recognizer has statements about what condition to recognize, and upon that statement being met, which Action can be executed at that time. The invocation of the Action is not handled by the Recognizer; it simply detects that an Action can be taken.")]),e._v(" "),a("h3",{attrs:{id:"recognition-clauses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recognition-clauses","aria-hidden":"true"}},[e._v("#")]),e._v(" Recognition clauses")]),e._v(" "),a("p",[e._v("Recognizers associate a clause of recognition with an action, as you can see from the following class:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export class RecognitionRule {\n  predicate:RecognitionClause;\n  actionID:string;\n\n  constructor(predicate:RecognitionClause, actionID:string){\n    this.predicate = predicate;\n    this.actionID = actionID;\n  }\n}\n")])])]),a("p",[e._v("A clause, in turn, is associated with an operation, and the subclauses upon which the operation acts. The following operations are supported:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export enum RecognitionOp {\n  AND,\n  OR,\n  NOT,\n  PROPERTY_EQ,        \n  SOURCE_PLUGIN_TYPE,      // syntactic sugar\n  MIME_TYPE,        // ditto\n}\n")])])]),a("h3",{attrs:{id:"loading-recognizers-at-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-recognizers-at-runtime","aria-hidden":"true"}},[e._v("#")]),e._v(" Loading Recognizers at runtime")]),e._v(" "),a("p",[e._v("You can add a Recognizer to the application plug-in environment in one of two ways: by loading from Recognizers saved on the system, or by adding them dynamically.")]),e._v(" "),a("h4",{attrs:{id:"dynamically-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamically-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Dynamically")]),e._v(" "),a("p",[e._v("You can call the Dispatcher method, "),a("code",[e._v("addRecognizer(predicate:RecognitionClause, actionID:string):void")])]),e._v(" "),a("h4",{attrs:{id:"saved-on-system-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saved-on-system-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Saved on system")]),e._v(" "),a("p",[e._v("Recognizers can be stored in JSON files that are loaded at login. The JSON structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "recognizers": [\n    {\n      "id":"<actionID>",\n      "clause": {\n        <clause>\n      }\n    }\n  ]\n}\n\n')])])]),a("p",[a("strong",[e._v("clause")]),e._v(" can take on one of two shapes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"prop": ["<keyString>", <"valueString">]\n')])])]),a("p",[e._v("Or,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"op": "<op enum as string>",\n"args": [\n  {<clause>} \n]\n')])])]),a("p",[e._v("Where this one can again, have subclauses.")]),e._v(" "),a("h3",{attrs:{id:"recognizer-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recognizer-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Recognizer example")]),e._v(" "),a("p",[e._v("Recognizers can be simple or complex. The following is an example to illustrate the mechanism:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "recognizers":[\n    {\n      "id":"org.zowe.explorer.openmember",\n      "clause": {\n        "op": "AND",\n        "args": [\n         {"prop":["sourcePluginID","com.rs.mvd.tn3270"]},{"prop":["screenID","ISRUDSM"]} \n        ]\n      }\n    }\n  ]\n}\n')])])]),a("p",[e._v("In this case, the Recognizer detects whether it is possible to run the "),a("code",[e._v("org.zowe.explorer.openmember")]),e._v(" Action when the TN3270 Terminal application plug-in is on the screen ISRUDSM (an ISPF panel for browsing PDS members).")]),e._v(" "),a("h2",{attrs:{id:"dispatcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher","aria-hidden":"true"}},[e._v("#")]),e._v(" Dispatcher")]),e._v(" "),a("p",[e._v("The dispatcher is a core component of the application framework that is accessible through the Global "),a("code",[e._v("ZLUX")]),e._v(" Object at runtime. The Dispatcher interprets Recognizers and Actions that are added to it at runtime. You can register Actions and Recognizers on it, and later, invoke an Action through it. The dispatcher handles how the Action's effects should be carried out, acting in combination with the Window Manager and application plug-ins to provide a channel of communication.")]),e._v(" "),a("h2",{attrs:{id:"registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Registry")]),e._v(" "),a("p",[e._v("The Registry is a core component of the application framework, which is accessible through the Global "),a("code",[e._v("ZLUX")]),e._v(" Object at runtime. It contains information about which application plug-ins are present in the environment, and the abilities of each application plug-in. This is important to application-to-application communication, because a target might not be a specific application plug-in, but rather an application plug-in of a specific category, or with a specific featureset, capable of responding to the type of Action requested.")]),e._v(" "),a("h2",{attrs:{id:"pulling-it-all-together-in-an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulling-it-all-together-in-an-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Pulling it all together in an example")]),e._v(" "),a("p",[e._v("The standard way to make use of application-to-application communication is by having Actions and Recognizers that are saved on the system. Actions and Recognizers are loaded at login, and then later, through a form of automation or by a user action, Recognizers can be polled to determine if there is an Action that can be executed. All of this is handled by the Dispatcher, but the description of the behavior lies in the Action and Recognizer that are used. In the Action and Recognizer descriptions above, there are two JSON definitions: One is a Recognizer that recognizes when the Terminal application plug-in is in a certain state, and another is an Action that instructs the MVS Explorer to load a PDS member for editing. When you put the two together, a practical application is that you can launch the MVS Explorer to edit a PDS member that you have selected within the Terminal application plug-in.")])])}],!1,null,null,null);i.options.__file="mvd-apptoappcommunication.md";t.default=i.exports}}]);