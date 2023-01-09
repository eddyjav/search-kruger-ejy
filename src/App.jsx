import { useState } from "react";
import SearchBar from "./components/searchBar";
import { productos } from "./data";
import { countries } from "./dataC";
import { names } from "./dataN";
import "./styles/style.css";

// const  = [
//   {
//     id: "peolpe-01",
//     title: "Juan Perez",
//   },
//   {
//     id: "peolpe-02",
//     title: "Andres Paez",
//   },
//   {
//     id: "peolpe-03",
//     title: "Noemi Saenz",
//   },
//   {
//     id: "peolpe-04",
//     title: "Alvaro Portes",
//   },
//   {
//     id: "peolpe-05",
//     title: "Jose Vieunza",
//   },
// ];

// const countries = [
//   {
//     id: "countries-01",
//     title: "Sesión de seguimientos",
//   },
//   {
//     id: "countries-02",
//     title: "Revision ed propuestas",
//   },
//   {
//     id: "countries-03",
//     title: "Evento apra donar juguetes",
//   },
//   {
//     id: "countries-04",
//     title: "Junta semanal del equipo",
//   },
//   {
//     id: "countries-05",
//     title: "Revision de pendientes clientes",
//   },
// ];

// const names = [
//   {
//     id: "email-01",
//     title: "Reporte de resultados",
//   },
//   {
//     id: "email-02",
//     title: "Requisitos para cambio",
//   },
//   {
//     id: "email-03",
//     title: "Estatus de funcionalidad",
//   },
//   {
//     id: "email-04",
//     title: "Próximos eventos",
//   },
//   {
//     id: "email-05",
//     title: "participa en la encuesta",
//   },
// ];

function App() {
  const [data, setData] = useState([...productos, ...countries, ...names]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...productos, ...countries, ...names]);
        setCurrentOption("all");
        break;
      case "productos":
        setData([...productos]);
        setCurrentOption("productos");
        break;
      case "countries":
        setData([...countries]);
        setCurrentOption("countries");
        break;
      case "names":
        setData([...names]);
        setCurrentOption("names");
        break;

      default:
        break;
    }
  };

  const handleItemSelected = (item) => {
    setSelection(item);
  };

  //!ToSee if include in Array/const console.log(countries?.includes(selection));

  return (
    <div className="container-search">
      <div className="title-t">
        <img
          className="logo-k"
          src="/logoKrB.png"
          alt="logokruger"
          width="50"
        />
        <h2>ruugle</h2>
      </div>
      <hr />

      {selection ? (
        <div className="c-legends">
          <p>
            <b>You selected</b>{" "}
          </p>
          {productos.includes(selection) ? (
            <p>
              <b>👉 {selection.title} 👈</b>
              <br />
              <b> {"Unid. - Kg. :"}</b> {selection.priceKg}$
              <br /> <b>{selection.presentation}: </b>
              {selection.pricePresentation}$
            </p>
          ) : (
            <b>👉 {selection.title} 👈</b>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="c-buttons">
        <button
          className="buttonCreate btn btn-warning mt-2 btn-block"
          onClick={handleClick}
          name="all"
        >
          All
        </button>
        <button
          className="buttonCreate btn btn-warning mt-2 btn-block"
          onClick={handleClick}
          name="productos"
        >
          Products
        </button>
        <button
          className="buttonCreate btn btn-warning mt-2 btn-block"
          onClick={handleClick}
          name="countries"
        >
          Countries
        </button>
        <button
          className="buttonCreate btn btn-warning mt-2 btn-block"
          onClick={handleClick}
          name="names"
        >
          Names
        </button>
      </div>

      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
