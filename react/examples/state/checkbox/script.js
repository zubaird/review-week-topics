var Checkbox = React.createClass({
    getInitialState: function(){
      return {
        isChecked: "no"
      }
    },
    toggleChecked: function(e){
      this.setState({
        isChecked: e.target.checked ? "yes" : "no"
      })
    },
    render: function(){
      return (
        <div>
          <h1>Is it checked? The answer is: {this.state.isChecked}</h1>
          <input type="checkbox" onChange={this.toggleChecked}/>
        </div>
        )
  }
})

React.render(<Checkbox/>, document.body)