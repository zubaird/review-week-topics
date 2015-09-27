# Introduction and Setup

## Objectives

* Understand how this self guided curriculum works
* Explain the role of the virtual DOM in React
* List advantages for using JSX

### How This Curriculum Works

Before you move on to the next lesson, you should:

* Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
* Answer all questions in ONE MARKDOWN FILE

Be prepared to review your exercises with instructors and peers as well as engage in discussions about the questions.

Let's get started!

### What is React?

According to the official React introduction,  is a-

> A JavaScript Library For Building User Interfaces

### Essential Things To Know, Terms and Concepts

- AJAX + Server 
  + `alias serve="open http://localhost:3000 && python -m SimpleHTTPServer 3000"`
- JSX
- 

### Hello, React!

We're going to start by setting up a very simple React app to say Hello World - React-style!

Staying true to an iterative approach to coding, we'll start slow, defining everything (markup and Angular syntax) within a single `index.html` file - a true single page app! - and scale from there, learning about patterns for structuring complicated Angular apps.

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
		 	

## Questions + Next Steps

* What is JSX?
* Why is it preferable to use JSX?
* Is React a templating language?
* Why is React different than other frameworks like Angular, Ember and Backbone?
* SOMETHING ABOUT ADDING A CLASS
* THIS WARNING! You are using the in-browser JSX transformer. Be sure to precompile your JSX for production - http://facebook.github.io/react/docs/tooling-integration.html#jsx
* ADDING MULTIPLE ELEMENTS JS SEMICOLON INSERTION


## Resources

* [React Docs](http://facebook.github.io/react/index.html)
* 
* 
