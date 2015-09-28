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
    // This works if we are not using refs...
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