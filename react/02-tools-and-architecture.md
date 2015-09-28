# React Developer Tools and Component Based Architecture

## Objectives

- Use the Chrome React Dev Tools to examine and debug applications 
- Examine other React applications using react-detector
- Include React using Bower

## Installing React Developer Tools

You can install them [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Using the React Developer Tools

Anytime you are working with a page that is using react, you can open up the Chrome developer tools and head to the React tab and check out what the component structure looks like as well as state and props (which we will learn about later on).

### Installing react-detector

Another very useful Chrome extention is react-detector, which will show you webistes that are using react. You can then head to the Chrome developer tools and in the react console, you can examine the components in greater detail. You can install it [here](https://chrome.google.com/webstore/detail/react-detector/jaaklebbenondhkanegppccanebkdjlh?hl=en-US)

### Using Bower as a replacement for the CDN

If you want to start using Bower instead of a CDN, learn some more about it [here](../bower) and then run `bower init` and then `bower install react --save`. Make sure to add `bower_components` to your `.gitignore`.

## Questions
 
* What is a React component?
* Take a look at the following pages using react-detector and the react developer tools, how are they using React? What does their component structure look like? (or pick a couple apps from [this](https://github.com/facebook/react/wiki/Sites-Using-React) link and examine them)
    - [https://www.airbnb.com/](https://www.airbnb.com/)
    - [https://www.facebook.com/](https://www.facebook.com/)
    - [https://www.codecademy.com/](https://www.codecademy.com/)
    - [https://www.coursera.org/](https://www.coursera.org/)
    - [http://imgur.com/](http://imgur.com/)
    - [https://instagram.com/](https://instagram.com/)
* What are props? 

## Assignment

* Read [this](https://facebook.github.io/react/docs/thinking-in-react.html) article. It is a great entry point to thinking about React components and architecture.
* Rebuild the Hello World Assignment using Bower instead of the React CDN. 


