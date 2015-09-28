var HelloName = React.createClass({
  getDefaultProps : function() {
    return {
      name : "Awesome",
    };
  },
  render: function() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
});

React.render(<HelloName/>, document.body)