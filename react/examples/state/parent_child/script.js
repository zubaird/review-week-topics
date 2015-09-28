var Parent = React.createClass({
  getInitialState: function(){
    return {
      names: ["tom", "sarah"]
    }
  },
  render: function() {
    console.log("Parent's State", this.state)
    return (
      <div>
        <Child firstName={this.state.names}/>
      </div>
    );
  }
});

var Child = React.createClass({
  render: function() {
    console.log("Child's Props", this.props)
    return (
      <div>
        CHECK YOUR CHROME CONSOLE!
      </div>
    );
  }
});

React.render(<Parent/>, document.body)