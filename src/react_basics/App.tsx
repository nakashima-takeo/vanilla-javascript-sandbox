import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);
  return (
    <div>
      <Link to="/css">CSS</Link>
      <br />
      <Link to="/rendering">Rendering</Link>
      <br />
      <Link to="/atmic-design">AtmicDesign</Link>
      <br />
      <Link to="/sample">Sample</Link>
      <br />
      <br />
      <Link to="/NotFound4044">NotFound</Link>
      <br />
      <Link to="/sample/NotFound4044/1">NotFound in SamplePage</Link>
      <br />
      <button onClick={onClickBack}>Back</button>
      <br />
    </div>
  )
}

export default App;
