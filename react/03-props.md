# Props

## Objectives

- Understand what props are and how they interact with Components
- Define propTypes and how they are used
- Style your react components inline and using an external stylesheet

## Introduction

So far, our React components have been quite simple and have no customization. The first way we can customize our components is by using properties or `props`. You can think of props very similarly to attributes in HTML elements (forgot what attributes are? [here](https://www.google.com/search?q=html+attributes&oq=html+attributes&aqs=chrome..69i57l2j69i59j69i60l3.1677j0j1&sourceid=chrome&es_sm=119&ie=UTF-8) is a refresher). Remember that our HTML elements can be changed by the values of the attributes we place inside them (an `<input type="text">` is very different than `<input type="submit">`)

## Adding props to a Component

Let's build a simple component to say Hello, but instead of world, let's change the component to reference our name!

```
    var HelloName = React.createClass({
      render : function() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
      }
    });

    React.render(<HelloName name = "Elie"/>, document.body)
```

## Validating our Props

We can also add validations on our props to ensure they are certain data types and that they are present! Check out [this](https://facebook.github.io/react/docs/reusable-components.html) link for more information. 

Say we want to create a component called AnswerToEverything, which has a prop that should be a number and required. How would you do that? 

Solution:

```
    var AnswerToEverything = React.createClass({
      propTypes: {
        number: React.PropTypes.number.isRequired
      },
      render : function() {
        return (
            <h1>Hello {this.props.number}</h1>
        )
      }
    });

    React.render(<AnswerToEverything number={42}/>, document.body)
```

What happens if we don't include the number property or if we change it to be something that is not a number?

Note: If you're using `bower` to connect React, be sure to `react.js` and not `react.min.js`. Validation warning errors will not show up in the console if you use the minified version.

## Creating Multiple Components

So far all of our applications have had just one component, but as we have seen in larger applications there are many components! Let's create a small application that has two components. `Book` and `BookList`. Our `BookList` will be a `<ul>` that contains `Book` components which will be `<li>`s. We are going to take an array of books which we will call `var books = ["Cat's Cradle", "Grapes of Wrath", "Infinite Jest"]` and iterate over the books to print out each title as the prop for a `Book` Component. Try this yourself first and check out the solution for help.

This is what it looks like:

```
var books = ["Cat's Cradle", "Grapes of Wrath", "Infinite Jest"]

var Book = React.createClass({
  render: function() {
    return (
      <li>{this.props.title}</li>
    );
  }
});

var BookList = React.createClass({
  books: books.map(function(book){
    return (
        <Book title={book}/>
      )
  }),
  render: function() {
    return (
      <ul>
        {this.books}
      </ul>
    )
  }
});

React.render(<BookList/>,document.getElementById("bookList"))  
```

## A Warning

If we look in the chrome console we see the following warning: 

"Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of BookList. See https://fb.me/react-warning-keys for more information."

Check out [this](http://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js) stackoverflow for why this is encouraged by React. How can we refactor our previous example to remove this warning? 

Hint: We are using `map` to iterate over our array. The callback function to map takes in additional parameters including the index, can we use that as our unique key to remove the warning?

Solution:

```
  var BookList = React.createClass({
    books: books.map(function(book,index){
      return (
          <Book key={index} title={book}/>
        )
    }),
    render: function() {
      return (
        <ul>
          {this.books}
        </ul>
      )
    }
  });
```

## Let's add a bit of style

Right now our components are a bit dull, let's add an external stylesheet and make our books look just a bit nicer! React components take in a property called className where we can attach CSS classes, just add a `className` and style away!

### Why className and not class? 

According to the React docs:

"Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively."

### Accessing a Child component's props

A parent component can access its child components using `this.props.children`. We will see this more when we discuss larger applications and refs, but you can read more [here](https://facebook.github.io/react/tips/children-props-type.html). Here is an example with this.props.children

```
  var App = React.createClass({
    render: function() {
      return (
        <h1>{this.props.children}</h1>
      );
    }
  });

  React.render(<App>Hello Everyone!</App>, document.body)
```

Here is another example:

```
  var Parent = React.createClass({
    render: function(){
      return (
        <h1><Child>Hello!</Child></h1>
      )
    }
  });

  var Child = React.createClass({
    render: function(){
      console.log(this.props)
      return (
        <h1>{this.props.children}</h1>
      )
    }
  });

  React.render(<Parent/>, document.body)
```

## Questions

* What are props?
* React defines props as "immutable", what does that mean?
* What is a PropType?
* How are props passed from parent to child components and how do parent components reference their children's props?
* Why does React give us this warning? "Each child in an array or iterator should have a unique "key" prop."

## Assignment 

* Read [this](https://medium.com/react-tutorials/react-properties-ef11cd55caa0) article. It is a fantastic explanation of props. 
* Now let's imagine we had an array of instructors ["Matt", "Ian", "Elie"]. How could we iterate over this array and print out each one? Validate that each instructor is a string as well. Style your components with CSS using the `className` prop!
