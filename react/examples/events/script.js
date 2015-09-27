var App = React.createClass({
  sayHi: function(){
    alert("Hi!");
  },
  render: function() {
    return (
      <div>
        <button style={{padding:"20px", marginBottom:"20px"}} onClick={this.sayHi}>
          Hello World!
        </button>

        <Form/>
      </div>
    );
  }
});

var Form = React.createClass({
  _handleChange: function(e){
    console.log(e.nativeEvent);
    console.log("checked?", event.target.checked)
  },
  _handleHover: function(e){
    console.log("Bye mouse!")
  },
  _handleSubmit: function(e){
    e.preventDefault()
    console.log("SO AWESOME!");
  },
  _handleKey: function(e){
    console.log(e.keyCode);
  },
  render: function() {
    return (
      <div onMouseLeave={this._handleHover} className="form">
        <form onSubmit={this._handleSubmit}>
          <div>
            <input onKeyUp={this._handleKey} type="text" autoFocus/>
          </div>
          <div>
            <label>Checkbox time</label>
            <input onChange={this._handleChange} type="checkbox"/>
          </div>
          <div>
            <input type="submit" value="Submit me!"/>
          </div>
        </form>
      </div>
    );
  }
});

React.render(<App/>,document.body)