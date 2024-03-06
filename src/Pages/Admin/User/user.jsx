import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from './Table'

export default function User() {
  const [dataUser, setDataUser] = useState([])
  const [meta, setMeta] = useState()

  useEffect(() => {
  (async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/libManager/user', {
        withCredentials: true
      })

      console.log(response);
      setDataUser(response.data.data.data)
      setMeta(response.data.data)

    } catch (error) {
      console.error(error);
    }
  })()
  }, [])

  return (
    <>
      {
        meta ? (
          <>
            <Table dataUser={dataUser} setDataUser={setDataUser} meta={meta} /> 
          </>
        )
        : ''
      }
    </>
  )
}
