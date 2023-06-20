import { Children } from 'react';
import styles from './LinkMain.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function LinkMain({ to, children }) {

  const location = useLocation();

  return (

    <Link className={`${styles.link} 
    ${location.pathname === to
        ?
        styles.highlighted
        : ''}`}
      to={to}>
      {children}
    </Link>
  )
}
