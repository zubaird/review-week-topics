# React Events

## Objectives

- Understand what React events are and how they work
- Include React events in our components
- Understand the limitations of props for components 

Just like in our previous JavaScript applications, we manipulated the DOM by listening for certain events (click, mouse events, submit, key events, etc.) and we will do the same exact thing with our virtual DOM!

## Adding your first event

Let's start by creating a component called Button which will render a button with the text "Click Me" (try to do this using props). Try this first before you look at the solution!

```
    var Button = React.createClass({
      render: function() {
        return (
          <button>{this.props.text}</button>
        );
      }
    });

    React.render(<Button text="Click Me!"/>,document.body)
```

Now that we have a button, let's add a function to be run when a click event occurs, we will call this function sayHi and then attach it to the button.

```
    var Button = React.createClass({
      sayHi: function(){
        alert("hi!")
      },
      render: function() {
        return (
          <button onClick={this.sayHi}>{this.props.text}</button>
        );
      }
    });

    React.render(<Button text="Click Me!"/>,document.body)
```

Notice that we are using the keyword `this` to refer to our component which has the sayHi method attached to it. Without the keyword `this`, sayHi will not be defined!

Now let's write a method that tries to change the props of the component when the button is clicked. Something like this:

```
    var Button = React.createClass({
      changeText: function(){
        this.props.text = "BOOM!"
        console.log(this.props.text)
      },
      render: function() {
        return (
          <button onClick={this.changeText}>{this.props.text}</button>
        );
      }
    });

    React.render(<Button text="Click Me!"/>,document.body)
```

We can see in our console that the props have changed, but nothing is being rendered or changed on the page! This is because a component cannot update its own props, but can update its state and the props of its children. Props can only change when a component's parent renders the component again with different properties. This means that we will have to use something different and that is called `state` - we will examine that next! But first, some more practice.

## Questions 

* What are some events you can add in React?
* How do you add an event to a component in react?
* How do you gain access to the native event object?
* When you trigger a react event, you gain access to an event object, but when you examine that object you will see that many of the values are `null` and that you can not get access to properties like `target` or `clientX` and `clientY`. What kind of object is this? 
* How do you gain access to the native event object in react?

## Assignment

* Read through some of the react events in the [docs](https://facebook.github.io/react/docs/events.html)
* Read how DOM events bubble up and become component events [here](http://www.newmediacampaigns.com/blog/react-bubble-events) 
* Build an application that contains two components, one called App and another called Form. 
    * Your App component should contain a button tag that when clicked alerts "Hi!". Your App component should also contain your Form component.
    * Your Form component should contain a form with a text input, checkbox and submit button. When the form is submitted you should prevent the default action (refreshing the page) and console.log "SO AWESOME!". When there is a keypress inside of the text input, you should console.log the keyCode of the character you just typed. When the checkbox is checked, you should console.log the nativeEvent (research nativeEvent with react)


