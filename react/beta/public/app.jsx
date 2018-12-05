// All by Felipe Alfonso Gonzalez
// f.alfonso.go@gmail.com 

//component in React 
var Greeter = React.createClass({
  // usage of Default props 
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'Default message'
    };
  },
  getInitialState: function () {
     return {
        name: this.props.name
     };
  },
  onButtonClick: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;
        //after to send the name as a var I clear the field
        this.refs.name.value = '';



        this.setState({
          name: name
        });

       // alert(name);

  },
  render: function () {

    // usage of props
    var name = this.state.name;
    var message = this.props.message;
  
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set name</button>
        </form>
      </div>
    );
 
  }
});


// var props
var firstname = 'Andrew';
ReactDOM.render(
  // we pass the var through React JSX
  <Greeter name={firstname} message="This is a message"/>,
  document.getElementById('app')
);



