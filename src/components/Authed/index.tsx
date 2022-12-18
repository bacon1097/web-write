import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import "./index.css";

export interface AuthedProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Authed = ({ children, ...props }: AuthedProps): JSX.Element => {
  const [authed, setAuthed] = useState(false);
  const [codeInput, setCodeInput] = useState("");

  return authed ? (
    <>{children}</>
  ) : (
    <div
      {...props}
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: 15,
          background:
            "linear-gradient(0deg, var(--background), rgba(255, 255, 255, 0.1))",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <div
          style={{ margin: "15px", display: "flex", flexDirection: "column" }}
        >
          <span
            style={{ marginBottom: 10, fontSize: "1.2em", textAlign: "center" }}
          >
            Enter code:
          </span>
          <input
            value={codeInput}
            onInput={(e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
              setCodeInput(e.currentTarget.value);
            }}
            type="password"
            style={{ textAlign: "center" }}
          />
        </div>
        <div
          className="button"
          onClick={() => {
            if (codeInput === "1097") {
              setAuthed(true);
            } else {
              alert("Incorrect code");
            }
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Authed;
