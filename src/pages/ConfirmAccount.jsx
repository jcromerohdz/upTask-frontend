import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alert from '../components/Alert'

const ConfirmAccount = () => {

  const [alertMsg, setAlertMsg] = useState({})

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `http://localhost:4000/api/users/confirm/${id}`
        const { data } = await axios.get(url)

        setAlertMsg({
          msg: data.msg,
          error: false
        })
       
      } catch (error) {
        setAlertMsg({
          msg: error.response.data.msg,
          error: true
        })
      }
    }

    confirmAccount()

  }, [])

  const { msg } = alertMsg

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Confirm your account and start to create your {' '} 
        <span className='text-slate-700'>
          projects
        </span>
      </h1>
      <div>
        {msg && <Alert alertMsg={alertMsg} />}
      </div>
    </>
  )
}

export default ConfirmAccount