import React, { useState } from "react";
import { db, auth } from "../firebase";
import "../App.css";

const FormUser = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  console.log({ email, password });

  const registro = async (e) => {
    e.preventDefault();

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      await db.collection("registro").doc(res.user.uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={registro}>
      <h1>{login ? "Ingresa tu cuenta" : "Registro"}</h1>

      {login ? (
        <>
          <input
            type="text"
            className="email"
            placeholder="Escribe tu email"
            name="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            className="password"
            placeholder="Escribe tu password"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <input
            type="text"
            className="email"
            placeholder="Escribe tu email"
            name="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            className="names"
            placeholder="Escribe tu Nombre completo"
            name="names"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            className="password"
            placeholder="Escribe tu email"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            className="password"
            placeholder="Escribe tu código postal"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
        </>
      )}
      {login ? (
        <button
          type="submit"
          className={login ? "login" : "registrar"}
          onClick={() => setLogin(!login)}
        >
          Entrar
        </button>
      ) : (
        <button
          type="submit"
          className={login ? "login" : "registrar"}
          onClick={() => setLogin(!login)}
        >
          Crear Cuenta
        </button>
      )}
    </form>
  );
};

export default FormUser;
