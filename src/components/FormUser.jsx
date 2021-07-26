import React, { useState } from "react";
import { db, auth } from "../firebase";

const FormUser = () => {
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
      <h1>Registrarse</h1>

      <input
        type="text"
        className="email"
        placeholder="Escribe tu email"
        name="email"
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <input
        type="text"
        className="password"
        placeholder="Escribe tu password"
        name="password"
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <button type="submit">Registrarme</button>
    </form>
  );
};

export default FormUser;
