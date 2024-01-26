import "../src/App.css";
import Formulario from "./components/Formulario";

import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./components/PDF";
import { Document,Page } from "@react-pdf/renderer";
function App() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    fecha: "",
  });

  const [form2, setForm2] = useState({
    tituloPdf: "",
    datosPDF: '',
  });

  const [form3, setForm3] = useState({
    tituloImage: "",
    imagen: null,
  });



  const [datos, setData] = useState({});
  const [datos2, setData2] = useState({});
  const [datos3, setData3] = useState({});



  const [imagen, setImagen] = useState();
  const [selectPdf, setSelectPdf] = useState();



  const handleChangeData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeData2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm2((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(form2);
  };

  const handleChangeData3 = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm3((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(form3);
  };

  const handleData = (e) => {
    e.preventDefault();

    setData(form);
  };

  const handleData2 = (e) => {
    e.preventDefault();

    setData2(form2);
    console.log(form2)
  };

  const handleData3 = (e) => {
    e.preventDefault();

    setData3(form3);
  
  };



  // imagen

  const handleFileChange = (e) => {
    setImagen(URL.createObjectURL(e.target.files[0]));



   };


   const handlePdf = (e) => {
    setSelectPdf(URL.createObjectURL(e.target.files[0]));
   };
   



  return (
    <>
      <div className="flex gap-8 justify-center">
        <Formulario>
          <h2 className="text-center">Primer Formulario </h2>
          <form action="" onSubmit={handleData}>
            <input
              className="mt-2 mb-2 w-full p-2 block"
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={(e) => handleChangeData(e)}
            />
            <input
              className="mt-2 mb-2 p-2 block"
              type="text"
              placeholder="Apellido"
              name="apellido"
              onChange={(e) => handleChangeData(e)}
            />
            <input
              className="mt-2 mb-2 p-2 block"
              type="tel"
              placeholder="Telefono"
              name="telefono"
              onChange={(e) => handleChangeData(e)}
            />
            <input
              className="mt-2 mb-2 p-2"
              type="date"
              placeholder="Fecha"
              name="fecha"
              onChange={(e) => handleChangeData(e)}
            />
            <input
              className="bg-slate-800   py-1 px-5 block cursor-pointer text-white"
              type="submit"
              placeholder="Enviar"
            />
          </form>
        </Formulario>

        <Formulario>
          <h2 className="text-center">Segundo Formulario </h2>
          <form action="" onSubmit={handleData2}>
            <input
              className="mt-2 mb-2 p-2 block"
              type="text"
              id="tituloPdf"
              placeholder="Titulo"
              name="tituloPdf"
              onChange={(e) => handleChangeData2(e)}
            />

            <input
              className="mt-2 mb-2 p-2 block"
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf"
              onChange={handlePdf}
            />
            <input
              className="mt-2 mb-2 p-2 cursor-pointer bg-slate-800 text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </Formulario>

        <Formulario>
          <h2 className="text-center">Tercer Formulario </h2>
          <form action="" onSubmit={handleData3}>
            <input
              className="mt-2 mb-2 p-2 block"
              type="text"
              id="tituloImage"
              placeholder="Titulo"
              name="tituloImage"
              onChange={(e) => handleChangeData3(e)}
            />

            <input
              className="mt-2 mb-2 p-2 block"
              type="file"
              id="imagen"
              name="imagen"
           
              onChange={handleFileChange}

            />
            <input
              className="mt-2 mb-2 p-2 cursor-pointer bg-slate-800 text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </Formulario>

        {/*<Formulario>
          <h2 className="text-center mt-7">Segundo Formulario</h2>
          <input
            className="mt-2 mb-2 p-2"
            type="text"
            placeholder="Titulo"
            name="titulo"
          />
          <PDFDownloadLink document={<PDF />} fileName="Prueba.pdf">
            {({ blob, url, loading, error }) =>
              loading ? (
                "Cargando..."
              ) : (
                <div className="bg-slate-800 max-w-[150px] flex items-center justify-center  p-3 text-white">
                  Descargar PDF
                </div>
              )
            }
          </PDFDownloadLink>
          </Formulario>*/}
      </div>

     <div className="flex gap-64 mx-auto">

     <div>
        <h2>Datos del Usuario</h2>
        <h3>Nombre :{datos.nombre}</h3>
        <h3>Apellido : {datos.apellido}</h3>
        <h3>Telefono : {datos.telefono}</h3>
        <h3>Fecha : {datos.fecha}</h3>
      </div>



      <div>
        <h2>Datos del PDF</h2>
        <h3>Titulo :{datos2.tituloPdf}</h3>
        <h3>Archivo PDF :{datos2.datosPDF} </h3>
        <Document file={selectPdf}>
 <Page pageNumber={1} />
</Document>





     
      </div>


      <div>
        <h2>Datos de la imagen</h2>
        <h3>titulo : {datos3.tituloImage} </h3>
        <h3>Imagen :{datos3.imagen}</h3>
        <img src={imagen} alt="Archivo subido" />

      
       
      </div>

     </div>
  

    </>
  );
}

export default App;
