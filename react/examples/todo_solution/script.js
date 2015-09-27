// render is REQUIRED, but this just DEFINES the class
// state - usually data that changes over time
// props - allow us to push data to our child components

// OWNER (setting the subprops)
var MessageBox = React.createClass({

  deleteMessage: function(message){
    this.state.messages.splice(this.state.messages.indexOf(message),1);
    this.setState({
      messages: this.state.messages
    });
  },
  handleAdd: function(e){
    // React autobinds this
    // React also hands event delegation for us!
      // It uses synthetic events
      // consistent behavior accross all browsers
      // in callbacks it handels this, by mapping to a top level node
    console.log(e.target);
    var newMessage = this.refs.newMessage.getDOMNode().value;
    var newMessages = this.state.messages.concat([newMessage]);
    this.setState({
      messages:newMessages
    });
    // clear form value!
    this.refs.newMessage.getDOMNode().value = "";

  },

  getInitialState: function() {
    return {
      isVisible: true,
      messages: ["this is ","a part of","a really long","dope message, sauce"]
    };
  },

  render: function() {

    var inlineStyles = {
      display: this.state.isVisible ? "block" : "none"
    };

    // we get a warning if this is not a string!
    // var subMessage = "Testing this submessage out";

    // to change this, we added an item to the array
    var messages = this.state.messages.map(function(message) {
      // console.log(this); //gives us the window
      return <div><SubMessage message={message} onDelete={this.deleteMessage}/></div>;
    }.bind(this)); // we want to bind the component

    return (
      <div className ="container jumbotron" style={inlineStyles}>
        <br />
        <h2>Hello World</h2>
        <input ref="newMessage" type="text"/>
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
        {messages}
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
    this.props.onDelete(this.props.message)
  },
  getDefaultProps: function() {
    return {
      message: "This is awesome"
    };
  },
  render: function() {
    return (
      <div>
        {this.props.message}
        <button className="btn btn-danger btn-xs" onClick= {this.handleDelete}>X</button>
      </div>
    );
  }
});

var message = "Yo!";


// third argument is a callback (not used much)
var reactComponent = React.render(<MessageBox />,document.body);




