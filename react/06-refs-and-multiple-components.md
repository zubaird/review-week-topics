# Refs and Multiple Components

## Objectives

- Understand what Refs are
- Build React Applications with multiple components
- Connect components to each other using Refs

## Introduction

While building applications there are many times we want to gain access to nodes inside of our components. While we can sometimes use built in JavaScript DOM traversal methods (nextSibling, previousSibling etc.), those methods are quite clunky and do not make use of anything with React! So how do we do this? `refs` to the rescue! Refs can be values or even callbacks, you can read more about them [here](https://facebook.github.io/react/docs/more-about-refs.html)

Let's revisit our typing assignment and refactor to use refs!

```
    var App = React.createClass({
      getInitialState: function(){
        return {
          text: ""
        }
      },
      changeText: function(e){
        this.setState({
          text: e.target.value
        })
      },
      clearText: function(e){
        this.setState({
          text: ""
        })
        // USING REFS!
        React.findDOMNode(this.refs.textInput).value = "";
        React.findDOMNode(this.refs.textInput).focus();
      },
      render: function() {
        return (
          <div>
            <h1>{this.props.children}</h1>
            <h1>{this.state.text}</h1>
            <input ref="textInput" id="typing" type="text" onKeyUp={this.changeText} autoFocus/>
            <button onClick={this.clearText}>Clear Text</button>

          </div>
        );
      }
    });

    React.render(<App>Type in here!</App>, document.body)
```

Notice what we have done here. Our input now has a `ref=textInput` and we are using a method called React.findDOMNode and passing in `this.refs` and the name of our ref to access the underlying node.

### Quick Note

In your exploration of React you may see a method called getDOMNode. This method is **Deprecated**. You can read more about .findDOMNode [here](https://facebook.github.io/react/docs/component-api.html)

### Summary from the React Docs

Refs are a great way to send a message to a particular child instance in a way that would be inconvenient to do via props and state. They should, however, not be your go-to abstraction for flowing data through your application. By default, use the Reactive data flow and save refs for use cases that are inherently non-reactive.

## Questions

* What are refs? Why do we use them?
* How do we access information from refs? What method do we use?
* What are some of the benefits of refs? What are some drawbacks or anti-patterns to watch out for? (Check out the summary from the react docs for some hints)

## Assignment

* Read [this](https://facebook.github.io/react/docs/more-about-refs.html#summary) summary on refs - it is essential to understand when and when not to use them.
* Read [this](http://stackoverflow.com/questions/25941585/react-refs-with-components) post on when to NOT use refs
* Watch [this](https://egghead.io/lessons/react-using-refs-to-access-components) video and build the application. Refactor this app to use the React.findDOMNode method.
* Form Challenge
  - 