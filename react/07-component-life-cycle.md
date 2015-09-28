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

### componentWillUnmount 
this method runs before the component will unmount

## Questions

* Describe 5 methods in the component life cycle
* What kinds of things would we do in the componentWillMount method?
* What kinds of things would we do in the componentDidMount method?
* What kinds of things would we do in the componentWillUnmount method?
* In [this](https://facebook.github.io/react/tips/initial-ajax.html) example, inside the `componentDidMount` method, we are using `.bind(this)`. What does this do? What happens if we omit the `bind` method?

## Assignment

* Read [this](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/) article on the react component life cycle
* Github Assignment 
* OMDB Assignment 
