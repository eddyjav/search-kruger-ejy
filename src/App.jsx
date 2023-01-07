import { useState } from "react";
import SearchBar from "./components/searchBar";
// import "./App.css";

const people = [
  {
    id: "peolpe-01",
    title: "Juan Perez",
  },
  {
    id: "peolpe-02",
    title: "Andres Paez",
  },
  {
    id: "peolpe-03",
    title: "Noemi Saenz",
  },
  {
    id: "peolpe-04",
    title: "Alvaro Portes",
  },
  {
    id: "peolpe-05",
    title: "Jose Vieunza",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimientos",
  },
  {
    id: "calendar-02",
    title: "Revision ed propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento apra donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal del equipo",
  },
  {
    id: "calendar-05",
    title: "Revision de pendientes clientes",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "participa en la encuesta",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
        break;
    }
  };

  const handleItemSelected = (item) => {
    setSelection(item);
  };

  return (
    <div>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendar
      </button>
      <button onClick={handleClick} name="emails">
        Emails
      </button>

      {selection ? <div>You selected: {selection.title}</div> : ""}

      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
