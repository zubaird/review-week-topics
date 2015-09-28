var MessageBox = React.createClass({

  deleteMessage: function(message){
    this.state.messages.splice(this.state.messages.indexOf(message),1);
    this.setState({
      messages: this.state.messages
    });
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

  getInitialState: function() {
    return {
      isVisible: true,
      messages: ["eat","sleep","learn react"]
    };
  },

  render: function() {
    var inlineStyles = {
      display: this.state.isVisible ? "block" : "none"
    };

    var messages = this.state.messages.map(function(message) {
      return <div><SubMessage message={message} onDelete={this.deleteMessage}/></div>;
    }.bind(this));

    return (
      <div className ="container jumbotron" style={inlineStyles}>
        <br />
        <h2>Hello World</h2>
        <form onSubmit={this.handleAdd}>
        <input ref="newMessage" type="text" autoFocus/>
        <input type="submit" className="btn btn-primary btn-xs" value="add"/>
        {messages}
        </form>
      </div>
    );
  }
});

// OWNEE (gettin the subprops)
var SubMessage = React.createClass({

  // this makes sure it is a string + required
  propTypes: {
      message: React.PropTypes.string.isRequired
  },
  handleDelete: function(e){
    e.preventDefault();
    this.props.onDelete(this.props.message)
  },
  render: function() {
    return (
      <div>
        {this.props.message} &nbsp;
        <button className="btn btn-danger btn-xs" onClick= {this.handleDelete}>X</button>
      </div>
    );
  }
});

React.render(<MessageBox />,document.body);



