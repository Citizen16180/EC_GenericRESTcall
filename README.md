# EC_GenericRESTcall
<h1>ODA custom component to do fusion REST calls</h1>
This custom Component for Oracle Digital Assistant can be used to perform REST api calls using the Oracle FUSION endpoints

The following documentation explains the process of installing and using this custom
component which will help you integrate Oracle ODA with any instance of Engagement
Cloud.

<h2>INSTALLATION</h2>

<b>What Do You Need?</b>

    Access to an Oracle Digital Assistant instance.
    A JavaScript IDE or text editor. For example, this tutorial uses Microsoft Visual Studio Code in its screenshots. If you feel comfortable using a text editor, then that's fine too.

    Node.js and Node Package Manager (NPM) installed for global access. If you used a Node installer (Windows, Mac), then both the node and npm executables should be available to you.

    To test if you have Node.js and NPM installed, open a terminal window and try the following commands separately:

    $ node -v

    $ npm -v

<b>Install the Oracle Bots Node.js SDK</b><br>
<code> npm install -g @oracle/bots-node-sdk </code><br>

<b>To verify the success of your installation, enter this command:</b><br>
<code> bots-node-sdk -v</code>

<b>The command should print the Oracle Bots Node.js SDK version. </b><br>
<code> $ bots-node-sdk -v
Version: 2.5.4</code><br>

<h3>Package the Component Project for Deployment</h3><br>
Download the GItHub reposetory<br>
Extract the archive<br>
Open a terminal or command prompt(windows)<br>
Using the terminal navigate to the folder where the archive was extracted e.g EC_GenericRESTcall-main<br>
Enter this command:<br>
<code>npm pack</code><br>
or<br>
<code>bots-node-sdk pack</code><br>
The result should be a new .tgz archive in the new folder

<h3>Deploy the custom compoennt to a skill in ODA</h3><br>
-Navigate to your skill and go to Components tab and click Service button.<br>
-Provide a Name to the service (It can be any name you want) .<br>
-Make sure the Embedded Container is selected.<br>
-And click upload a component package.<br>
-Select the tgz archive<br>
-Click Create<br>
-Wait for the status to Change to Ready<br>
-If the status will change to ready the installation is finished and you can use the component in your conversation flow.<br>

<h2>How to use it in the conversation flow</h2>
Properties (Custom Component Variables)

<table style="border-collapse:collapse;margin-left:37.5pt" cellspacing="0"><tbody><tr style="height:23pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s6" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Variable Name</p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s6" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Type</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s6" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Required</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s7" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Value</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s6" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Description</p></td></tr><tr style="height:48pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;"><span class="s8" style=" background-color: #F6F6F6;">var_username</span></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">yes</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">User for calling the REST</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 5pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"><span class="s10" style=" background-color: #F6F6F6;">It is used to store the</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">user's name of EC used</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">to do the REST call</span></p></td></tr><tr style="height:35pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s12" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">var_password</p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">yes</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Weekly password for EC</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s11" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">It is used to store the weekly password of EC</p></td></tr><tr style="height:49pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;"><span class="s8" style=" background-color: #F6F6F6;">var_ecdomain</span></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">yes</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Endpoints for EC REST api</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 5pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"><span class="s10" style=" background-color: #F6F6F6;">used to provide the</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">endpoint for EC REST</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">call</span></p></td></tr><tr style="height:73pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s12" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">var_operation</p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">yes</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">GET/POST/PATCH/KA</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s11" style="padding-top: 5pt;padding-left: 5pt;padding-right: 6pt;text-indent: 0pt;text-align: left;">used to specify the REST operation (GET/POST/PATCH/KA -</p><p class="s11" style="padding-left: 5pt;padding-right: 43pt;text-indent: 0pt;text-align: left;">Knowledge article search)</p></td></tr><tr style="height:36pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;"><span class="s8" style=" background-color: #F6F6F6;">var_contentType</span></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">yes</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">application/vnd.oracle.adf.res ourceitem+json</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 5pt;padding-right: 6pt;text-indent: 0pt;text-align: left;"><span class="s10" style=" background-color: #F6F6F6;">Specify the Content Type</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">of the REST call</span></p></td></tr><tr style="height:23pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s12" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">var_payload</p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">optional</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">E.g:</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s13" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Payload for POST or</p></td></tr></tbody></table>
<table style="border-collapse:collapse;margin-left:37.5pt" cellspacing="0"><tbody><tr style="height:22pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br></p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br></p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s14" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">{"Title":"${srTitle}"}'</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s13" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">PATCH</p></td></tr><tr style="height:61pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;"><span class="s8" style=" background-color: #F6F6F6;">var_FieldsToExtract</span></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">optional</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">API_NAME-DIPLAY_LABLE</p><p class="s9" style="padding-left: 4pt;text-indent: 0pt;text-align: left;">,API_NAME-DIPLAY_LABLE</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;"><span class="s10" style=" background-color: #F6F6F6;">a comma separated list of</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">the fields you want to</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">retrieved from the REST</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">call response</span></p></td></tr><tr style="height:48pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s12" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">var_KAcontentEndpoint</p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">optional</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">ENDPOINT FOR EC KA QUESTION</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s11" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Used to provide the endpoint for Knowledge article search</p></td></tr><tr style="height:87pt"><td style="width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;"><span class="s8" style=" background-color: #F6F6F6;">var_ODAchannel</span></p></td><td style="width:41pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">text</p></td><td style="width:62pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">optional</p></td><td style="width:130pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s9" style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">web</p></td><td style="width:137pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="padding-top: 5pt;padding-left: 5pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"><span class="s10" style=" background-color: #F6F6F6;">Specify where the ODA</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">will be used e.g Web,</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">Facebook so on . Only</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">web is supported at this</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">point to have html</span><span class="s11"> </span><span class="s10" style=" background-color: #F6F6F6;">rendering</span></p></td></tr></tbody></table>

<br>
<b>Examples in YAML conmversation flow</b><br>
<code> 
# GET REST CALL
  
  GET:
    component: "EC_GenericRESTcall"
    properties:
      var_password: "kzJ77956"    
      var_username: "john.doe"  
      var_ecdomain: "https:/xxxxx.oracledemos.com:443/crmRestApi/resources/11.13.18.05/serviceRequests?q=ReportedByPartyId=100000000409225"
      var_operation: "GET"
      var_ODAchannel: "web"
      var_contentType: "application/vnd.oracle.adf.resourceitem+json"
      var_FieldsToExtract: "SrNumber-SR Number,StatusTypeCdMeaning-Status"

  viewGETTresults:
    component: "System.Output"
    properties:
      text: "Here is the requested information:\n ${user.payload}"
      keepTurn: true
    transitions:
      next: "helpAgain"

      
</code><br>

<code> 
# POST REST CALL
  POST:
    component: "EC_GenericRESTcall"
    properties:
      var_password: "kzJ77956"    
      var_username: "john.doe"  
      var_ecdomain: "https://xxxxx.oracledemos.com:443/crmRestApi/resources/11.13.18.05/serviceRequests"
      var_operation: "POST"
      var_ODAchannel: "web"
      var_contentType: "application/vnd.oracle.adf.resourceitem+json"
      var_FieldsToExtract: "SrNumber-SR Number,StatusTypeCdMeaning-Status"
      var_payload: '{"Title":"${srTitle}"}'

  viewPOSTresults:
    component: "System.Output"
    properties:
      text: "The following SR has been created:\n${user.payload}"
      keepTurn: true
    transitions:
      next: "helpAgain"
    
</code>
<br>

<code> 
# PATCH REST CALL
  PATCH:
    component: "EC_GenericRESTcall"
    properties:
      var_password: "kzJ77956"    
      var_username: "john.doe"  
      var_ecdomain: "https://xxxxx.oracledemos.com:443/crmRestApi/resources/11.13.18.05/serviceRequests/${SrNumber}"
      var_operation: "PATCH"
      var_ODAchannel: "web"
      var_contentType: "application/vnd.oracle.adf.resourceitem+json"
      var_payload: '{"Title":"${srTitle}"}'
      var_FieldsToExtract: "SrNumber-SR Number,StatusTypeCdMeaning-Status"

  viewPATCHresults:
    component: "System.Output"
    properties:
      text: "The following Service Request has been changed\n${user.payload}"
      keepTurn: true
    transitions:
      next: "helpAgain"

    
</code>

<br>

<code> 
#Knowledge base search 
  KA:
    component: "EC_GenericRESTcall"
    properties:
      var_password: "kzJ77956"    
      var_username: "john.dunbar"  
      var_ecdomain: "https://xxxxx.oracledemos.com/srt/api/latest/search/question?startOverFlag=true&question=${question}&expand=true"
      var_KAcontentEndpoint: "https://xxxxx.oracledemos.com/km/api/latest/content/answers/"
      var_operation: "KA" 
      var_contentType: "application/json"       
      var_payload: '{"transactionId":0}'

  viewAnswer:
    component: "System.CommonResponse"
    properties:
      keepTurn: true 
      maxPrompts: 
      autoNumberPostbackActions:
      metadata: 
        responseItems:         
        - type: "text"  
          text: '${user.payload}'      
    transitions: 
      actions: 
        next: "helpAgain"

    
</code>
