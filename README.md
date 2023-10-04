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



