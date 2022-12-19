import "./app.css";
import Authed from "./components/Authed";
import Editor from "./components/Editor";

export function App() {
  return (
    <Authed
      auth={() => <Editor docId="textDoc" />}
      unauth={() => <Editor docId="publicTextDoc" />}
    />
  );
}
