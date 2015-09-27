var App = React.createClass({
  getInitialState: function() {
    return {
      txt: "blah",
      id: 0
    };
  },
  componentDidMount: function(){
    this.refs.nameInput.getDOMNode().focus();
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

React.render(<App txt="this is the text prop" />, document.body);

