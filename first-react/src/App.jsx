const App = () => {
  const releaseYear = 2013;
  const devCompany = "Meta, Inc";
  console.log("Release year: ", releaseYear);
  console.log("Developer Company: ", devCompany);

  return (
    <div>
      <h1>Hello React</h1>
      <p>
        React was developed by {devCompany} and was first released in{" "}
        {releaseYear},{new Date().getFullYear() - releaseYear}
        years ago.{" "}
      </p>
    </div>
  );
};

export default App;
