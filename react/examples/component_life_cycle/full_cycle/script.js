var App = React.createClass({
  getInitialState: function(){
    return {
      text: ""
    }
  },
  componentWillMount: function(){
    console.log('WILL MOUNT JUST RAN!')
  },
  componentDidMount: function(){
    console.log('DID MOUNT JUST RAN!')
  },
  // componentWillReceiveProps: function(nextProps) {
  //   console.log("next props?", nextProps)
  //   this.setState({
  //     text: "awesome"
  //   });
  // },
  componentWillUnmount: function(){
    console.log('WILL UNMOUNT JUST RAN!')
  },
  remove: function(){
    React.unmountComponentAtNode(document.body)
  },
  render: function() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
});

React.render(<App/>, document.body)