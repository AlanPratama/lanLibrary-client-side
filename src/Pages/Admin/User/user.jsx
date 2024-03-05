import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from './Table'

export default function User() {
  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
  (async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/libManager/user', {
        withCredentials: true
      })

      console.log(response);
      setDataUser(response.data.data.data)
      console.log(dataUser);

    } catch (error) {
      console.error(error);
    }
  })()
  }, [])

  return (
    <>
    <Table dataUser={dataUser} setDataUser={setDataUser} /> 
    </>
  )
}
