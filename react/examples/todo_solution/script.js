var TodoList = React.createClass({
  getInitialState: function() {
    return {
      messages: ["eat","sleep","learn react"]
    };
  },
  deleteMessage: function(message){
    this.state.messages.splice(this.state.messages.indexOf(message),1);
    this.setState({
      messages: this.state.messages
    });
  },
  editMessage: function(oldVal, newVal){
    this.state.messages.forEach(function(message){
      if(message === oldVal){
        this.state.messages[this.state.messages.indexOf(message)] = newVal;
        this.setState({
          messages:this.state.messages
        });
      }
    }.bind(this))
  },
  handleAdd: function(e){
    e.preventDefault();
    var newMessage = this.refs.newMessage.getDOMNode().value;
    var newMessages = this.state.messages.concat([newMessage]);
    this.setState({
      messages:newMessages
    });
    this.refs.newMessage.getDOMNode().value = "";
  },
  render: function() {
    var messages = this.state.messages.map(function(message,i) {
      return (
      <div key={i} >
        <Todo ref="todo" message={message} onEdit={this.editMessage} onDelete={this.deleteMessage}/>
      </div>
      )
    }.bind(this));
    return (
      <div className ="container">
        <br />
        <h2>Todo App</h2>
        <form onSubmit={this.handleAdd}>
        <input ref="newMessage" type="text" autoFocus/>
        &nbsp;
        <input type="submit" className="btn btn-success" value="add"/>
        </form>
        {messages}
      </div>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function(){
    return {
      isVisible: false
    }
  },
  propTypes: {
      message: React.PropTypes.string.isRequired
  },
  handleDelete: function(e){
    e.preventDefault();
    this.props.onDelete(this.props.message)
  },
  handleEdit: function(oldValue,newValue){
    this.props.onEdit(oldValue,newValue)
    this.setState({
      isVisible: !this.state.isVisible
    })
  },
  render: function() {
    return (
      <li> {this.props.message} &nbsp;
        <button className="btn btn-danger btn-xs" onClick= {this.handleDelete}>X</button>
        &nbsp;
        <button className="btn btn-info btn-xs" onClick= {this.handleEdit}>Edit</button>
        <EditTodo handleEdit={this.props.onEdit} display={this.state.isVisible} value={this.props.message}/>
      </li>
    );
  }
});

var EditTodo = React.createClass({
  getInitialState: function(){
    return {
      // need to start off with its value
      newValue: this.props.value
    }
  },
  changeValue: function(e){
    this.setState({
      newValue: e.target.value
    })
  },
  handleEdit: function(){
    this.props.handleEdit(this.props.value, this.state.newValue)
    // set state here?
  },
  render: function(){
    var displayStyle = {
      display: this.props.display ? "block" : "none",
    }
    // need to set the value to change state each time!
    return (
      <div style={displayStyle}>
        <input type="text" value={this.state.newValue} onChange={this.changeValue}/>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
})

React.render(<TodoList />,document.body);
