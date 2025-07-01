# Random-Color-Genorator

A random color generator node module <br> <br/> 


# **Setting up**
Making sure you install all the right tools

## Step 1 — Install Xcode's Command Line Tools 

Xcode is an integrated development environment (IDE) that is comprised of software development tools for macOS. You won’t need Xcode to write Node.js programs, but Node.js and some of its components will rely on Xcode’s Command Line Tools package.

Execute this command in the Terminal to download and install these components:

>xcode-select --install
>
You’ll be prompted to start the installation, and then prompted again to accept a software license. Then the tools will download and install automatically. <br><br/>

--------

## Step 2 — Installing and Setting Up Homebrew 🍺 

To install Homebrew, type this command into your Terminal window:

>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

The command uses curl to download the Homebrew installation script from Homebrew’s Git repository on GitHub.

You’ll be prompted to enter your password during the process.

Press the letter y for “yes” whenever you are prompted to confirm the installation.

Now let’s verify that Homebrew is set up correctly. Execute this command:

>brew doctor
If no updates are required at this time, you’ll see this in your Terminal:

Output
Your system is ready to brew.
Otherwise, you may get a warning to run another command such as brew update to ensure that your installation of Homebrew is up to date.

Now that Homebrew is installed, you can install Node.js.  <br><br/>

--------

## Step 3 — Installing Node.js

With Homebrew installed, you can install a wide range of software and developer tools. We’ll use it to install Node.js and its dependencies.

You can use Homebrew to search for everything you can install with the brew search command, but to provide us with a shorter list, let’s instead search for packages related to Node.js:

>brew search nodejs

You’ll see a list of packages you can install, like this:

>Output
==> Formulae
node.js
nodejs
Both of these packages install Node.js on your system. They both exist just in case you can’t remember if you need to use nodejs or node.js.

Execute this command to install the nodejs package:

>brew install nodejs
>
You’ll see output similar to the following in your Terminal. Homebrew will install many dependencies, but will eventually download and install Node.js itself:

>Output
>==> Installing dependencies for node: icu4c
>==> Installing node dependency: icu4c
>
>==> Installing node
>==> Downloading https://homebrew.bintray.com/bottles/node-11.0.0.sierra.bottle.tar.gz
>######################################################################## 100.0%
>==> Pouring node-11.0.0.sierra.bottle.tar.gz
>...
>
>==> Summary
>🍺  /usr/local/Cellar/node/11.0.0: 3,936 files, 50.1MB

--------

## Additional steps - Checking versions 

To check the version of Node.js that you installed, type

>node -v
>
This will output the specific version of Node.js that is currently installed, which will by default be the most up-to-date stable version of Node.js that is available.

>Output
v11.0.0
>

Check the version of npm with

>npm -v

You’ll see the version displayed:

>Output
6.4.1
>

To update your version of Node.js, you can first update Homebrew to get the latest list of packages, and then upgrade Node.js itself:

>brew update
>brew upgrade nodejs


# **How to use**

Open up your terminal and open the applications folder 
Mac example 
>cd application
>
Ater run node.js
>node.js 
