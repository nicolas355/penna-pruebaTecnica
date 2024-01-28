import React, { useState,useEffect } from 'react'
import { api } from '../lib/api';

interface PdfFile {
    titulo:string,
    path:string
  }


const GetPdf = () => {

 


    const [pdf, setPDf] = useState<PdfFile[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await api.getPdf();
          
            setPDf(response?.data.files);

    
          } catch (error) {
            console.error("Error al obtener usuarios:", error.response.data);
          }
        };
    
        fetchUsers();
      }, []);
    

  return (
    <div>

<ul>
          {pdf.map((file) => (
            <>
                    <p> {file.titulo} </p>
                    <iframe src={file.path} width="400" height="400"></iframe>

          
            </>
          ))}
        </ul>


      
    </div>
  )
}

export default GetPdf
