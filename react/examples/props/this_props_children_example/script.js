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