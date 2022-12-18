import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "preact/hooks";
import "./app.css";
import { firestore } from "./firebase";

export function App() {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(true);
  const [debouncedValue, setDebouncedValue] = useState("");
  const isLoading = useRef(true);

  useEffect(() => {
    if (value === debouncedValue) return;

    setSaved(false);

    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  useEffect(() => {
    const updateFirestore = async () => {
      try {
        await setDoc(doc(firestore, "text", "textDoc"), {
          value: debouncedValue,
        });
      } catch (e) {
        console.error(e);
      }

      setSaved(true);
    };

    if (!isLoading.current) {
      updateFirestore();
    }
  }, [debouncedValue]);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const docRef = await getDoc(doc(firestore, "text", "textDoc"));

        if (docRef.exists()) {
          setValue(docRef.data()?.value ?? "");
        }
      } catch (e) {
        console.error(e);
      }

      isLoading.current = false;
    };

    onLoad();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#272727",
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          marginBottom: "0.2em",
        }}
      >
        <span
          style={{
            color: "var(--text-light)",
            fontSize: "0.8em",
            padding: "0.2em 0",
          }}
        >
          {saved ? "Saved" : "..."}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            flexDirection: "column",
          }}
        >
          {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
            <div
              key={i}
              style={{
                color: "var(--text-light)",
                display: "flex",
                lineHeight: "1.2em",
                fontSize: "1.2em",
                margin: "0 auto",
              }}
            >
              {i}
            </div>
          ))}
        </div>
        <textarea
          value={value}
          onInput={(e) => {
            console.log(e);
            setValue(e.currentTarget.value ?? "");
          }}
          type="text"
          style={{
            lineHeight: "1.2em",
            fontSize: "1.2em",
            width: "100%",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
}
