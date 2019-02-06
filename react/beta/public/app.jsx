// All by Felipe Alfonso Gonzalez
// Software Craftsman 
// f.alfonso.go@gmail.com 

// variable to create a nested component : ->
var GreeterMessage = React.createClass({



   render: function () {
    var name = this.props.name;
   var message = this.props.message;
  
     return (
       <div>
         <h1>Hello {name}!!</h1>
         <p>{message}</p>
       </div>

     );
   }
});

var GreeterForm = React.createClass({

    onFormSubmit: function  (e) {
      e.preventDefault();

      var name = this.refs.name.value;



      if (name.length > 0) {
        this.refs.name.value = '';
        this.props.onNewName(name);
      }
    },

      render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
      <input type="text" ref="name" />
      <button>Set name</button>
    </form>
    );
  }
});


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
  handleNewName: function (name) {
     this.setState({
       name: name
     });

  },
  render: function () {

    // usage of props
    var name = this.state.name;
    var message = this.props.message;
  
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
     

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



