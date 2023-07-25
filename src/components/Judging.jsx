"use client";
import React, { useState } from "react";
import Radio from "../components/Radio";
import toast from "react-hot-toast";

const Judging = () => {
  const [input, setInput] = useState("");
  const [judges, setJudges] = useState({
    professors: [],
    industry: [],
    students: [],
    current: "",
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (judges.current === "") {
      toast.error("Please select a type of judge!");
      return;
    }

    setJudges({
      ...judges,
      [judges.current]: [...judges[judges.current], input],
    });
  };

  const removeJudge = (judge, index) => {
    console.log(judge, index);
    setJudges({
      ...judges,
      [judge]: judges[judge].filter((a, i) => i !== index),
    });
  };

  return (
    <div>
      <Radio
        options={Object.keys(judges).filter(
          (a) => typeof judges[a] === "object"
        )}
        field="current"
        user={judges}
        setUser={setJudges}
      />
      <textarea onChange={handleInput} />
      <button onClick={handleSubmit}>ADD JUDGES</button>

      {Object.keys(judges)
        .filter((a) => typeof judges[a] === "object")
        .map((judge) => (
          <>
            <p>{judge} Judges</p>
            {judges[judge].map((name, index) => (
              <div key={index}>
                {name}
                <button onClick={() => removeJudge(judge, index)}>
                  REMOVE
                </button>
              </div>
            ))}
          </>
        ))}
    </div>
  );
};

export default Judging;
