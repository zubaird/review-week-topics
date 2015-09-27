var instructors = ["Elie", "Matt", "Ian"]

var Person = React.createClass({
  render: function(){
    return <h1 className="instructor">{this.props.name}</h1>
  }
})

var People = React.createClass({
  render: function() {
    var people = instructors.map(function (instructor) {
      return (
        <Person name={instructor}/>
      );
    });
    return (
      <div>
        {people}
      </div>
    );
  }
});

React.render(<People/>,document.getElementById("container"))