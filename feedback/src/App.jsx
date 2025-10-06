import { useState } from "react";

const App = () => {
  const [recommend, setRecommend] = useState(0);
  const [notRecommend, setNotRecommend] = useState(0);
  const [rec, setRec] = useState({ yes: 0, no: 0 });

  const recYes = () => {
    setRec({ ...rec, yes: rec.yes + 1 });
  };

  return (
    <div>
      <h2>Feedback Application</h2>
      <p>Do you recommend this product?</p>
      <button onClick={recYes}>Yes</button>
      <button onClick={() => setNotRecommend(notRecommend + 1)}>No</button>
      <p>Recommended: {rec.yes}</p>
      <p>Not Recommended: {rec.no}</p>
    </div>
  );
};

export default App;
