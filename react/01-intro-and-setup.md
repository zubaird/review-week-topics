# Introduction and Setup

## Objectives

* Understand how this self guided curriculum works
* Explain the role of the virtual DOM in React
* List advantages for using JSX

### How This Curriculum Works

Before you move on to the next lesson, you should:

* Answer all the readme questions
* Complete all of the assignments in the readme

### Keys for Success

* STAY CURIOUS! Keep googling and searching for answers, the React community is growing rapidly and there are already many excellent resources online to learn more about it.
* Feeling stuck? Do your best to google for the answer, and if you are unable to find a solution, post your questions on StackOverflow! If you are absolutely stuck, ask an instructor, but we will ask to see all the research you have done to solve the problem first!

Now let's get started!

### What is React?

According to the official React introduction, React is a-

> A JavaScript Library For Building User Interfaces

Essentially, React is a view library by Facebook.

React is a powerful tool for only a couple reasons:
* Does one thing and does it well. That "one thing" being a view library.
* Everything is a **component** in React.
* Updates the DOM very quickly using React's **virtual DOM**.

### What does React code look like?

`index.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- React Library -->
    <script src="build/react.js"></script>
    <!-- React JSX Transformer Library -->
    <script src="build/JSXTransformer.js"></script>
  </head>
  <body>
    <!-- Hello World App Insertion Point -->
    <div id="hello"></div>
    <!-- Hello World App -->
    <script type="text/jsx" src="hello.jsx"></script>
  </body>
</html>
```

`helloworld.jsx`:

```
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);
```

### What is JSX?

Notice `helloworld.jsx` isn't JS, it is JSX.
JSX is JavaScript with some [React sugar](https://facebook.github.io/react/docs/jsx-in-depth.html) built into it.
JSX enables you to write HTML-esque code straight into your JS.
It is very similiar to other templating libraries.

Let's take a look at `helloworld.jsx` again`:
```

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```
Notice `<h1>Hello, world!</h1>` is inserted into the middle of the code.
That looks like HTML! Not JS!

JSX is optional and React can actually be written in JS:

```
React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example')
);
```

Most people agree the JSX version is much cleaner,
easier to read, and easier to write.
If you have a negative gut-reaction to JSX,
[just give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes).

### Components

React forces you to break your application down into components.
A component is any individual piece of functionality in your UI.
Components allow for reusability, easier testing, and encapsulation.

### Useful Helps

To use react, you must have a server running. You can use `python -m SimpleHTTPServer` or create an alias to open and start the server! In your `.zshrc` add the following `alias serve="open http://localhost:3000 && python -m SimpleHTTPServer 3000"` (make sure to restart terminal or type `source .zshrc in the home directory`)

### Hello, React!

We're going to start by setting up a very simple React app to say Hello World - React-style!

Staying true to an iterative approach to coding, we'll start slow, defining everything within a single `index.html` file and scale from there, learning about patterns for structuring larger React apps.

1. Create an `index.html` file.
1. Add the development version of React. For now, we're going to utilize a CDN - `<script src="https://fb.me/react-0.13.3.js"></script>`.
1. Next, add the script for the JSX transformer `<script src="https://fb.me/JSXTransformer-0.13.3.js"></script>`


#### Final Code as one file


``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Render</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/JSXTransformer.js"></script>
  <script type="text/jsx">
    React.render(<h1>Hello World</h1>, document.body);
  </script>
</head>
<body>
</body>
</html>
```

#### Final Code with Two Files

`index.html`

``` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World!</title>
  <script src="https://fb.me/react-0.13.3.js"></script>
  <script src="https://fb.me/JSXTransformer-0.13.3.js"></script>
  <script src="helloworld.js" type="text/jsx"></script>

</head>
<body>
</body>
</html>
```

`helloworld.js`

``` 
var HelloWorld = React.createClass({
    render: function(){
      return <h1>Hello World!</h1>
    }
})

React.render(<HelloWorld/>, document.body)
```

## Things are breaking!

- Unexpected token <
	- make sure you have a type of "text/jsx" for your script tag
- Unexpected end of input at http://localhost:8080/hello%20world/helloworld.js:15:undefined
	- Make sure your component has a self closing tag 
  - Make sure ALL of your tags close (even the self closing tags must have a /) 
		 	

## Questions + Next Steps

* What is JSX?
* Why is it preferable to use JSX?
* Is React a templating language?
* Why is React different than other frameworks like Angular, Ember and Backbone?
* What is the virtual DOM? 
* In our Hello World example, if you open the chrome developer tools you will see this warning in the console, "You are using the in-browser JSX transformer. Be sure to precompile your JSX for production - http://facebook.github.io/react/docs/tooling-integration.html#jsx". What does this mean? How do we handle this in production?

## Assignment 

- Rebuild the Hello World Example from scratch. Work your way through the bugs you encounter (see the Things are Breaking section if you are stuck).

## Resources

* [React Docs](http://facebook.github.io/react/index.html)
* [Intro to React](http://developer.telerik.com/featured/introduction-to-the-react-javascript-framework/)
