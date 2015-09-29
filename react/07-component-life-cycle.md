# The Component Life Cycle 

## Objectives

- Understand the component life cycle
- Manipulate components throughout the component life cycle

## Introduction

As we build larger React applications that contain multiple components, there will be times where we want to change props, state or any other information depending on the component life cycle. For example, You might want to per­form cer­tain actions when a new com­po­nent instance is ini­tial­ized or destroyed. You can read all about the various methods [here](https://facebook.github.io/react/docs/<component-specs class="html"></component-specs>), but here are some methods we will discuss in more detail:

### componentWillMount 
this method runs before the component mounts

### componentDidMount 
this method runs after the component is mounted

Here is an example that will focus on the input of a component when mounted:

```
    var App = React.createClass({
      getInitialState: function() {
        return {
          txt: ""
        };
      },
      componentDidMount: function(){
        React.findDOMNode(this.refs.nameInput).focus();
      },
      update: function(e){
        this.setState({txt: e.target.value})
      },
      render:function(){
        return (
          <div>
            <input name="one" ref="nameInput" onChange={this.update} />
            <h1>{this.state.txt}</h1>
          </div>
          );
      }
    });

    React.render(<App/>, document.body);

```

### componentWillUnmount 
this method runs before the component will unmount

You can see these methods in action with this example:
```
    var App = React.createClass({
      getInitialState: function(){
        return {
          text: ""
        }
      },
      componentWillMount: function(){
        console.log('WILL MOUNT JUST RAN!')
      },
      componentDidMount: function(){
        console.log('DID MOUNT JUST RAN!')
      },
      componentWillUnmount: function(){
        console.log('WILL UNMOUNT JUST RAN!')
      },
      remove: function(){
        React.unmountComponentAtNode(document.body)
      },
      render: function() {
        return (
          <div>
            <h1>Hello world!</h1>
            <button onClick={this.remove}>Remove</button>
          </div>
        );
      }
    });

    React.render(<App/>, document.body)
```

## Questions

* Describe 5 methods in the component life cycle
* What kinds of things would we do in the componentWillMount method?
* What kinds of things would we do in the componentDidMount method?
* What kinds of things would we do in the componentWillUnmount method?
* In [this](https://facebook.github.io/react/tips/initial-ajax.html) example, inside the `componentDidMount` method, we are using `.bind(this)`. What does this do? What happens if we omit the `bind` method?

## Assignment

* Read [this](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/) article on the react component life cycle
* Github Assignment 
    - Create a component called GithubProfile
    - When this component mounts, make an ajax called `http://api.github.com/users/` plus whatever the children props are for that component (`this.props.children`).
    - Your component should render the username and an image of the user  
    - You should use `componentWillMount` to make your AJAX call.
* OMDB Assignment 
    - Create two components, MovieSearchForm and Movie
    - MovieSearchForm should render a form and the Movie component (which should have no information at first)
    - A user should be able to search for a title of the movie, and when they submit the form, an ajax call should be made to `http://omdbapi.com?t=` + the value of what the user searched. 
    - The Movie component should then be updated with the title of the movie and the image poster.
    - You do not **need** to use any component life cycle methods, but you absolutely can.
