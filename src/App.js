import "./App.css";
import FormUser from "./components/FormUser";
import SessionGlobal from "./components/SessionGlobal";
import google from "./images/google.png";

function App() {
  return (
    <>
      <main className="container">
        <SessionGlobal
          logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          style="facebook"
        ></SessionGlobal>
        <SessionGlobal logo={google} style="google"></SessionGlobal>

        <FormUser />
      </main>
    </>
  );
}

export default App;
