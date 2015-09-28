var Button = React.createClass({
      changeText: function(){
        this.props.text = "BOOM!"
        console.log(this.props.text)
      },
      render: function() {
        return (
          <button onClick={this.changeText}>{this.props.text}</button>
        );
      }
    });

    React.render(<Button text="Click Me!"/>,document.body)