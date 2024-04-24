import { toggle } from 'GlobalStates/darkmode';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Darkmode.module.css'
import moon from './moon.png'
import sun from './sun.png'
const Darkmode = () => {

  const dispatch = useDispatch()
  const darkmode = useSelector((state) => state.darkmode.value);

  const darkmodeToggle = () => {
    
    darkmode ? document.documentElement.style.setProperty('--background-color', '#282c34') : document.documentElement.style.setProperty('--background-color', 'white');
    darkmode ? document.documentElement.style.setProperty('--text-color', 'white') : document.documentElement.style.setProperty('--text-color', '#282c34');

    dispatch(toggle())
  }

  return (
    <div>
      <input type="checkbox" className={styles.checkbox} id="checkbox" checked={darkmode} onChange={darkmodeToggle} />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <img src={moon} style={{ height: "22px" }} alt="moon"></img>
        <img src={sun} style={{ height: "22px" }} alt="moon"></img>
        <span className={styles.ball} />
      </label>
    </div>
  )
}

export default Darkmode
