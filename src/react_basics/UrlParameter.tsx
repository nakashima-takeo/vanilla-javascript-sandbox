import React from "react";
import { useLocation, useParams } from "react-router-dom";

type State = {
  array: number[];
};

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const state = useLocation().state as State | undefined;
  console.log(state?.array);
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>Url Parameter</h1>
      <p>id: {id}</p>
      {query.has("name") && <p>name: {query.get("name")}</p>}
    </div>
  );
};
