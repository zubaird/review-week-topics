# Bower

## What is it?

Bower is a package manager for all of your front-end dependencies! Instead of heading to `jquery.org` and downloading the source code or using a CDN to include it, we can use bower.

## Why?

It's often times much easier (esspecially as you build and work on larger applications). It's nice to have a centralized location for all of your front-end dependencies so that other developers can see what libraries/frameworks you are using. It also means you do not have to rely on internet connectivity (unlike a CDN) so you can develop offline. You can also easily install, update and remove packages with ease.

## How?

To get started, run `npm install -g bower` (you might have to prefix this with `sudo` this depending on your computer's settings). Also note that Bower requires node, npm and git.

## I have it installed...now what?

Just like `npm` we want to create a `json` file that will store our application's information and more importantly, a list of our dependencies. 
Instead of running `npm init` to generate a `package.json`, let's run `bower init` to generate a `bower.json`. You can press enter through all of the choices (you can read online what some of these options are if you are confused).

To install a package simply run `bower install NAME_OF_PACKAGE --save`. Once you have run this, you will see that a `bower_components` folder has been created (this is very similar to our `node_modules` folder). The `bower_components` folder will contain all of the source code for the package you installed. 

REMEMBER - your `bower_components` folder is going to become quite large quickly, so make sure to add `bower_components` to your `.gitignore`. 
