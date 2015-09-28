var books = ["Cat's Cradle", "Grapes of Wrath", "Infinite Jest"]

var Book = React.createClass({
  render: function() {
    return (
      <li>{this.props.title}</li>
    );
  }
});

var BookList = React.createClass({
  books: books.map(function(book,index){
    return (
        <Book key={index} title={book}/>
      )
  }),
  render: function() {
    this.showChildren();
    return (
      <ul>
        {this.books}
      </ul>
    )
  }
});

React.render(<BookList/>,document.getElementById("bookList"))