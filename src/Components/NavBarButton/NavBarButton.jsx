import React, {Children} from 'react'
import styles from './NavBarButton.module.css'


const NavBarButton = (props) => {
  return (
    <div className={styles.container}>
      {Children.toArray(props.children)}
    </div>
  )
}

export default NavBarButton
