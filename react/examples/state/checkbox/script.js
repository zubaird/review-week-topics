var Checkbox = React.createClass({
    getInitialState: function(){
      return {
        isChecked: false
      }
    },
    toggleChecked: function(e){
      this.setState({
        isChecked: e.target.checked ? "yes" : "no"
      })
    },
    render: function(){

        if(!this.state.isChecked){
        return (
          <div>
            <h1>Is it checked? {this.state.isChecked} NAHHH</h1>
            <input type="checkbox" onChange={this.toggleChecked}/>
          </div>
          )
        }
        else {
          return (
            <div>
              <h1>Is it checked? {this.state.isChecked} WOOHOO!</h1>
              <input type="checkbox" onChange={this.toggleChecked}/>
            </div>
            )
        }
  }
})

React.render(<Checkbox/>, document.body)