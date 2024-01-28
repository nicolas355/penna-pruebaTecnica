import "../src/App.css";
import Formulario from "./components/Formulario";
import React from "react";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./components/PDF";
import { Document, Page } from "@react-pdf/renderer";
import axios from "axios";
import { api } from "./lib/api";
import { FileUpload } from "./components/FileUpload";
import FormUsers from "./components/FormUsers";
import { UserData } from "./lib/interfaces";
import GetUsers from "./components/getUsers";
import GetPdf from "./components/GetPdf";

function App() {


  return (
    <>
      <div className="flex gap-8 justify-center ">
        <Formulario>
          <FileUpload type="image" />
        </Formulario>

        <Formulario>
          <FileUpload type="pdf" />
        </Formulario>

        <Formulario>
          <FormUsers type="users" />
        </Formulario>

 

     
        <GetUsers/>


        <GetPdf/>

        

      
      </div>
    </>
  );
}

export default App;
