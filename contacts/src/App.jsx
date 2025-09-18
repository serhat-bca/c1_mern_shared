const Contact = (props) => {
  return (
    <div>
      {/* objects cannot be displayed as
    a react child */}
      <br />
      Name: {props.contact.name}
      <br />
      DOB: {props.contact.dob}
      <br />
      State: {props.contact.state}
    </div>
  );
};

const App = () => {
  const jd = { name: "John Doe", dob: "2/3/1997", state: "NY" };
  const jm = { name: "John Max", dob: "12/10/2003", state: "MA" };

  return (
    <div>
      <h1>Contacts</h1>
      <Contact contact={jd} />
      <Contact contact={jm} />
    </div>
  );
};

export default App;
