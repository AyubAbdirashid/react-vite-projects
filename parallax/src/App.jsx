import React from "react";
import './index.css'
import './App.css'
import boxes from './component/boxes';
import Box from './component/Box';
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(boxes);
  const [page, setPage] = useState(true);

  const styless = {
    backgroundColor: page ? 'grey' : '#fff'
  }

  function toggle(id) {
    setData(prevData => {
      return prevData.map((box) => {
        return box.id === id ? {
          ...box,
          on: !box.on
        } : box
      });
    });

    setPage((prevPage) => !prevPage);
  }

  const boxMapped = data.map((box) => {
    return (
      <Box
        key={box.id}
        on={box.on}
        id={box.id}
        toggle={toggle}
      />
    );
  });

  return (
    <div className="mode" style={styless}>
      {boxMapped}
    </div>
  );
}

export default App;