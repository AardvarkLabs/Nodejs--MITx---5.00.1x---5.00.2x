var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is form a component!</p>
      </div>
    );
  }
});



ReactDOM.render(
  // we pass the var through React JSX
  <Greeter/>,
  document.getElementById('app')
);



