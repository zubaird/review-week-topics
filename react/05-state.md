# State

## Objectives

* Understand what `state` is in React and how to use it
* Use setState to change the state of components
* Combine props, events and state to builder more robust react applications

## Introduction

Up until now, we have used react to display information staticly (there has been no dynamic updating of the DOM). In order to make our app dynamic, we need to introduce a way to re-render the DOM. Our tool to do that is state. - When a component state data changes, the render function will be called again to re-render the change in state. Let's see this in an example using `this.state` 

## How is it different than props?

You can read a great answer [here](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md). Pay close attention to the chart as well as the portion discussing "Does this go inside props or state?"

## Using state to count clicks

```
    var App = React.createClass({
      getInitialState: function(){
        return {
          count: 0
        }
      },
      count: function(){
        this.setState({
          count: this.state.count + 1
        })
      },
      render: function() {
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.count}>Click me!</button>
          </div>
        );
      }
    });

    React.render(<App/>, document.body)
```

## Using state to display typing

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
        e.target.previousSibling.value = "";
        e.target.previousSibling.focus();
      },
      render: function() {
        return (
          <div>
            <h1>{this.props.children}</h1>
            <h1>{this.state.text}</h1>
            <input id="typing" type="text" onKeyUp={this.changeText} autoFocus/>
            <button onClick={this.clearText}>Clear Text</button>

          </div>
        );
      }
    });

    React.render(<App>Type in here!</App>, document.body)
```

## Using state to toggle information based on a checkbox 

```
    var Checkbox = React.createClass({
        getInitialState: function(){
          return {
            isChecked: false
          }
        },
        toggleChecked: function(e){
          this.setState({
            isChecked: e.target.checked ? "yes" : "no"
          })
        },
        render: function(){

            if(!this.state.isChecked){
            return (
              <div>
                <h1>Is it checked? {this.state.isChecked} NAHHH</h1>
                <input type="checkbox" onChange={this.toggleChecked}/>
              </div>
              )
            }
            else {
              return (
                <div>
                  <h1>Is it checked? {this.state.isChecked} WOOHOO!</h1>
                  <input type="checkbox" onChange={this.toggleChecked}/>
                </div>
                )
            }
      }
    })

    React.render(<Checkbox/>, document.body)
```



## Questions

* What is state?
* What does the getInitialState method do? What does it return?
* What does the setState method do?
* What are the differences between state and props? When do you use each?


## Assignment

* Read [this](https://medium.com/react-tutorials/react-state-14a6d4f736f5) Tutorial
* TODO