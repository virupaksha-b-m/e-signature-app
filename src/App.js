import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Name");
  const [date, setdate] = useState("Date");

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <h4>{date}</h4>
      <div>
        <p className="p-5">
          Hell i am web developer, exploring web development application only. i
          worked on industrial Project, i . e by accenture where we have to
          develop an web application for there requirments.Accessibility tip:
          Using color to add meaning only provides a visual indication, which
          will not be conveyed to users of assistive technologies like screen
          readers. Please ensure the meaning is obvious from the content itself
          (e.g., the visible text with a sufficient color contrast) or is
          included through alternative means, such as additional text hidden
          with the .visually-hidden class.
        </p>
        <div className="sign">
          <input
            className="p-2 text-center"
            type="date"
            onChange={(e) => setdate(e.target.value)}
          />
          <input
            className="p-2 text-center"
            type="text"
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
