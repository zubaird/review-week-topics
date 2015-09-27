var Test = React.createClass({
  getInitialState: function() {
    return {
      checked:false
    };
  },
  renderPage: function(){
    return (
      <div>
        <input onChange={this.handleCheck} type="checkbox" defaultChecked={this.state.checked} />
        <button onClick={this.sayHi}>{this.props.text}</button>
        <h2>{this.displayMessage()}</h2>
        <h1>Hello from Unchecked Page!!</h1>
      </div>
    );
  },
  renderOtherPage: function(){
    return (
      <div>
        <input onChange={this.handleCheck} type="checkbox" defaultChecked={this.state.checked} />
        <button onClick={this.sayHi}>{this.props.text}</button>
        <h2>{this.displayMessage()}</h2>
        <h1>Hello from Checked Page!!</h1>
      </div>
    );
  },
  sayHi: function(){
    console.log("AWESOME!");
  },
  handleCheck: function(){
    this.setState({
      checked: !this.state.checked
    });
  },
  displayMessage:function(){
    return this.state.checked ? "Checked" : "Unchecked";
  },
  render: function() {
    if(this.state.checked){
      return this.renderOtherPage();
    }
    else {
      return this.renderPage();
    }

  }
});

React.render(<Test text="AWESOME!"/>, document.body);