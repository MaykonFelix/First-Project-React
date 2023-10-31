import React, { useState, useEffect } from "react";
import Card from "./components/card";
import "./App.css";

export default function App() {
  const [studentName, setStudentName] = useState("Vai Aparecer aqui...");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function hadleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };

    setStudents((prevState: string) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/maykonfelix")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        });
      });
    //corpo do useEffect
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil GitHub" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome.."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={hadleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
