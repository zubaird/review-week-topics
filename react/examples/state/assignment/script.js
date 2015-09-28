var PresidentsList = React.createClass({
  getInitialState: function(){
    return {
      presidents: ["Washington", "Adams","Jefferson"]
    }
  },
  addNewPresident: function(president){
    this.setState({
      presidents: this.state.presidents.concat([president])
    })
  },
  render: function() {
    return (
      <div>
        <AddPresident addNew={this.addNewPresident}/>
        <President lastNames={this.state.presidents}/>
      </div>
    );
  }
});

var AddPresident = React.createClass({
  handleAddNewPresident: function(e){
    e.preventDefault();
    this.props.addNew(e.target.childNodes[0].value)
    e.target.childNodes[0].value = ""
    e.target.childNodes[0].focus();
  },
  render: function(){
    return (
    <div>
      <form onSubmit={this.handleAddNewPresident}>
        <input type="text" autoFocus/>
        <input  type="submit" value="Add a President"/>
      </form>
    </div>
    )
  }
});

var President = React.createClass({
  render: function(){
    var list = this.props.lastNames.map(function(president, i){
      return (
        <li key ={i}>{president}</li>
        )
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
      )
  }
})

React.render(<PresidentsList/>, document.body)