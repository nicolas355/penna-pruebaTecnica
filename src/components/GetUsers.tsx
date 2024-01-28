import React from 'react'
import { UserData } from '../lib/interfaces';
import { useEffect,useState } from 'react';
import { api } from '../lib/api';

const GetUsers = () => {

    const [users, setUsers] = useState<UserData[]>([]);


    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await api.getUsers();
          setUsers(response.users);
          console.log('hola',response, )
  
        } catch (error) {
          console.error("Error al obtener usuarios:", error.response.data);
        }
      };
  
      fetchUsers();
    }, []);
  


  return (
    <div>

<ul>
          {users.map((user) => (
            <>
              <p>Nombre: {user.nombre}</p>
              <p>Email: {user.numero}</p>
              <p>Nombre: {user.apellido}</p>
              <p>Email: {user.fecha}</p>
          
            </>
          ))}
        </ul>
      
    </div>
  )
}

export default GetUsers
