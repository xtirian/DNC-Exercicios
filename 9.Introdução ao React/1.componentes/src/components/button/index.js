import React from "react";
import styles from './styles.module.css'

export default function button(props) {
  return (
    <div>
      <button className={styles.btn}> {props.nome} </button>
    </div>
  );
}
