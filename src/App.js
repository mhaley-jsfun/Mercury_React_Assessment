import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("success");
  const [show, setShow] = useState(false);

  const handleGetJoke = () => {
    setStatus("loading");
    setShow(false);
    setTimeout(() => {
      if (Math.random() * 100 < 50) setStatus("failed");
      else setStatus("success");
    }, 2000);
  };

  return (
    <div className="container">
      <Header onGetJoke={handleGetJoke} />

      <div className="divider" />

      <div>
        {status === "loading" ? (
          <div style={{ fontSize: 18, textAlign: "center", color: "rgb(102,102,102)", paddingTop: 40 }}>
            LOADING YOUR JOKE...
          </div>
        ) : status === "failed" ? (
          <div style={{ fontSize: 18, textAlign: "center", color: "rgb(204,0,0)", paddingTop: 40 }}>
            THERE WAS AN ERROR LOADING YOUR JOKE.
          </div>
        ) : (
          <>
            <div style={{ fontSize: 400, color: "rgb(238,238,238)", position: "absolute", zIndex: -10 }}>“</div>
            <div style={{ fontSize: 30, paddingLeft: 80, paddingTop: 130 }}>
              If you see a robbery at an Apple Store...
            </div>
            <div style={{ marginTop: 150, display: "flex", justifyContent: "center" }}>
              <div className={!show ? "show-button" : "hide-button"} onClick={() => setShow((prev) => !prev)}>
                {!show ? "Show" : "Hide"} Punchine
              </div>
            </div>
            {show && (
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div style={{ fontSize: 30, paddingTop: 120, paddingRight: 80 }}>Does that make you an iWitness?</div>
                <div style={{ fontSize: 400, color: "rgb(238,238,238)", position: "absolute", zIndex: -10 }}>”</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
