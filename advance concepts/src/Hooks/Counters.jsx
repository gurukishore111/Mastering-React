import React, { useState, useEffect } from "react";

function Counters(props) {
  useState(0);

  const [count, setstate] = useState(0);
  const [name, setName] = useState("");
  //this.state.count
  //use state is not used in if statement ..because it called conti...
  //useEffect is contain three method of lifeclass

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;
  }, [count, name]);

  return (
    <div>
      <input
        placeholder="Enter the name "
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name} has clicked {count} times
      <br />
      <button onClick={() => setstate(count + 1)}>Increase</button>
    </div>
  );
}

export default Counters;
