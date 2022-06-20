import React from 'react'
import { logout } from '../../store/AccessTokenStore'

export default function Logout() {
  return (
    <>
    <div>Logout</div>
    <button onClick={logout}>LOGOUT</button>
    </>
  )
}
