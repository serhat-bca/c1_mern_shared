const ReactLogo = (props) => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      width={props.width}
    />
  );
};

const App = () => {
  const releaseYear = 2013;
  const devCompany = "Meta, Inc";
  console.log("Release year: ", releaseYear);
  console.log("Developer Company: ", devCompany);

  return (
    <>
      <div>
        <h1>Hello React</h1>
        <ReactLogo width="100" />
        <ReactLogo width="75" />
        <ReactLogo width="50" />
        <p>
          React was developed by {devCompany} and was first released in{" "}
          {releaseYear},{new Date().getFullYear() - releaseYear}
          years ago.{" "}
        </p>
      </div>
      <p></p>
    </>
  );
};

export default App;
