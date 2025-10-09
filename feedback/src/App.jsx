import { useState } from "react";

const DiplayTracker = ({ tracker }) => {
  // if (tracker.length === 0) {
  //   return <p>No Feedback</p>;
  // }
  // return <p>Feedback History: {tracker.join("-")}</p>;
  return tracker.length === 0 ? (
    <p>No Feedback</p>
  ) : (
    <p>Feedback History: {tracker.join("-")}</p>
  );
};

const App = () => {
  const [rec, setRec] = useState({ yes: 0, no: 0 });
  const [tracker, setTracker] = useState([]);

  const recYes = () => {
    setRec({ ...rec, yes: rec.yes + 1 });
    setTracker([...tracker, "Y"]);
    console.log("Tracker: ", tracker);
  };

  const recNo = () => {
    setRec({ ...rec, no: rec.no + 1 });
    // setTracker([...tracker, "N"]);
    setTracker(tracker.concat("N")); // instead of push use concat
    console.log("Tracker: ", tracker);
  };

  return (
    <div>
      <h2>Feedback Application</h2>
      <p>Do you recommend this product?</p>
      <button onClick={recYes}>Yes</button>
      <button onClick={recNo}>No</button>
      <p>Recommended: {rec.yes}</p>
      <p>Not Recommended: {rec.no}</p>
      {tracker.length !== 0 && <DiplayTracker tracker={tracker} />}
    </div>
  );
};

export default App;
