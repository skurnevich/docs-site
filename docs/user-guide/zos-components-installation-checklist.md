# Installation and Configuration Checklist for Zowe z/OS Components for Production Purposes

Perform the steps in this checklist to streamline your installation of Zowe z/OS Components.

## Preparing and Installing
| Task | Description | Results | Time Estimate |  
|----|-----------|----|-------------|
| Planning | 1. [Plan the Installation](/docs/user-guide/installandconfig.md)  <span style="color:red">Add missing steps</span> <br />2. Address [USS considerations for Zowe](/docs/user-guide/configure-uss.md) <br />3. Address [System requirements](/docs/user-guide/systemrequirements.md):  <span style="color:red">Update link here</span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;* [z/OS](/docs/user-guide/systemrequirements-zos.md)   <br />&nbsp;&nbsp;&nbsp;&nbsp;* [Node.js](/docs/user-guide/systemrequirements-zos.md)  <br /> &nbsp;&nbsp;&nbsp;&nbsp;* [Java](/docs/user-guide/systemrequirements-zos.md)  <br /> &nbsp;&nbsp;&nbsp;&nbsp;* [z/OSMF](/docs/user-guide/systemrequirements-zos.md) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(recommended for full functionality)<br />&nbsp;&nbsp;&nbsp;&nbsp;* [z/OSMF HA](/docs/user-guide/zowe-ha-overview.md)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(required for production)           | Add results  |  1 day                     | 
| [Install z/OS Components](/docs/user-guide/install-zos.md) | **Option 1: [Install Zowe runtime from a convenience build](/docs/user-guide/install-zowe-zos-convenience-build.md)**  <br />(for development purposes / not production)  <br /> **Option 2: [Install Zowe with SMP/E](/docs/user-guide/install-zowe-smpe.md)** <br />(for production or development purposes)<br /> **Option 3: [Install Zowe with a portable software instance](/docs/user-guide/install-zowe-pswi.md)** <br />(for production or development purposes)                      | Add results                |   1 hour                     |

## Configuring Zowe z/OS Components

| Task | Description | Results | Time Estimate |  
|----|-----------|----|-------------|
|Configure base | 1. Initialize Zowe<br />&nbsp;&nbsp;&nbsp;&nbsp;**Option 1: [Initialize Zowe](/docs/user-guide/initialize-zos-system.md) manually using zwe command group** <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. [Prepare zowe.yaml configuration file](/docs/appendix/zowe-yaml-configuration.md) if haven't done yet<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. [Initialize Zowe custom data sets](/docs/user-guide/initialize-mvs-datasets.md) _(zwe init mvs)_<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. [APF authorize load libraries](/docs/user-guide/apf-authorize-load-library.md) _(zwe init apfauth)_<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. [Initialize Zowe security configurations](/docs/user-guide/initialize-security-configuration.md) _(zwe init security)_ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e. [Install Zowe main started tasks](/docs/user-guide/install-stc-members.md) _(zwe init stc)_<br />&nbsp;&nbsp;&nbsp;&nbsp;**Option 2: [Configure Zowe with z/OSMF workflows](/docs/user-guide/configure-zowe-zosmf-workflow.md)** <br /><br />2. [Configure the z/OS system for Zowe](/docs/user-guide/configure-zos-system.md)<br />3. [Grant users permission to access z/OSMF](/docs/user-guide/grant-user-permission-zosmf.md) <br />4. [Install and configure the Zowe cross memory server (ZWESISTC)](/docs/user-guide/configure-xmem-server.md) |Add results| 4 hours| 
| [Configure the Caching Service storage](/docs/user-guide/configure-caching-service-ha.md)  <span style="color:red">Correct link, add / before docs</span> | **Infinispan** and **VSAM** _(zwe init vsam)_ storage methods are recommended in general and required to use Zowe in High Availability mode. <br />**inMemory** method is designed only for a quick start of the service for test purposes. | Add results |1 hour |
| Configure certificates | Zowe is able to use PKCS12 certificates or certificates held in a z/OS Keyring.<br /><br /> **Option 1: Use zwe command group** _(zwe init cerificates)_ <br />&nbsp;&nbsp;&nbsp;&nbsp;[Configure PKCS12 certificates](/docs/user-guide/configure-certificates-keystore.md) or [Configure JCERACFKS certificates in a key ring](/docs/user-guide/configure-certificates-keyring.md) <br /><br />**Option 2: [Set up Zowe certificates in keyring using workflows](/docs/user-guide/certificates-setup.md)**  <span style="color:red">Add keyring word?</span> | Add results |2 hours  |In-progress, <br />Complete 
| [Configure High Availability](/docs/user-guide/zowe-ha-overview.md) (optional) |Zowe has high availability feature built-in, but your system should be properly configured to enable it <br />1. [Configure Sysplex for high availability](/docs/user-guide/configure-sysplex.md) <br />2. [Configure z/OSMF for high availability in Sysplex](/docs/user-guide/systemrequirements-zosmf-ha.md) <br />3. [Define haInstances section in your zowe.yaml](/docs/appendix/zowe-yaml-configuration.md)<br />| Add results |2 hours  |

## Starting and Stopping Zowe 

| Task | Description | Results | Time Estimate |  
|----|-----------|----|-------------|
|[Start and stop the cross memory server `ZWESISTC` on z/OS](/docs/user-guide/start-zowe-zos.md#starting-and-stopping-the-cross-memory-server-zwesistc-on-zos)  <span style="color:red">Check typo ZWE...</span> | The cross memory server is run as a started task from the JCL in the PROCLIB member `ZWESISTC`, it can be started through SDSF <br />`/S ZWESISTC,REUSASID=YES` | The cross-memory server is started | 5 minutes|
|Start and stop the Zowe main server `ZWESLSTC` on z/OS | **Option 1: [Use zwe to start and stop the main Zowe server](/docs/user-guide/start-zowe-zos.md#starting-and-stopping-zowe-main-server-zweslstc-on-zos-with-zwe-server-command)** <br/>**Option 2: [Manually start and stop the Zowe main server `ZWESLSTC`](/docs/user-guide/start-zowe-zos.md#starting-and-stopping-zowe-main-server-zweslstc-on-zos-manually)** | Zowe is started and ready to be used | 20 minutes |

## Verify Zowe installation on z/OS
 <span style="color:red">I would suggest to make one task out of these three tasks and make these tasks just an optional steps, then we can add common description, something like  <br/>"Zowe can be configured to run only components you need, so not all components may have been started. Which components have been started depends on your setting of the component enabled status in Zowe configuration file (usually zowe.yaml)." <br/> And so results will be  <br/>"Verified enabled components are started successfully and working correctly"</span>


| Task | Description | Results | Time Estimate | 
|----|-----------|----|-------------|
| [Verify Zowe Application Framework installation](/docs/user-guide/verify-zowe-runtime-install.md#verifying-zowe-application-framework-installation) | Open the Zowe Desktop from a supported browser | Add results | 20 minutes| 
| [Verify API Mediation installation](/docs/user-guide/verify-zowe-runtime-install.md#verifying-api-mediation-installation) |Use a REST API client to review the value of the status variable of the API Catalog service routed through the API Gateway | Add results | 15 minutes |
|[Verify z/OS Services installation](/docs/user-guide/verify-zowe-runtime-install.md#verifying-zos-services-installation) |Zowe z/OS services usually are registered with Zowe APIML Discovery| Add results | 15 minutes |





