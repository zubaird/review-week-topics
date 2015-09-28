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