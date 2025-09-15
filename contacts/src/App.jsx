const Contact = (props) => {
  return (
    <div>
      <br />
      Name: {props.name}
      <br />
      DOB: {props.dob}
      <br />
      State: {props.state}
    </div>
  );
};

const App = () => {
  const jd = { name: "John Doe", dob: "2/3/1997", state: "NY" };
  const jm = { name: "John Max", dob: "12/10/2003", state: "MA" };

  return (
    <div>
      <h1>Contacts</h1>
      <Contact name="John Doe" dob="2/3/1997" state="NY" />
      <Contact name="John Max" dob="12/10/2003" state="MA" />
    </div>
  );
};

export default App;
