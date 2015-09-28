var instructors = ["Elie", "Matt", "Ian"]

var Instructor = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  render: function(){
    return <li className="instructor">{this.props.name}</li>
  }
})

var InstructorList = React.createClass({
  render: function() {
    var people = instructors.map(function (instructor, i) {
      return (
          <Instructor key = {i} name={instructor}/>
      );
    });
    return (
      <ul>
        {people}
      </ul>
    );
  }
// // Can also be written like this:
  // people:instructors.map(function (instructor,i) {
  //     return (
  //       <Instructor key = {i} name={instructor}/>
  //     );
  //   }),
  // render: function() {
  //   return (
  //     <ul>
  //       {this.people}
  //     </ul>
  //   );
  // }
});

React.render(<InstructorList/>,document.getElementById("container"))