import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LinkMain({ to }) {
  
  const location = useLocation();
  
  return (

    <Link to={to}>

    </Link>
  )
}
