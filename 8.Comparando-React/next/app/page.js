import Image from 'next/image'
import styles from './page.module.css'


function Componente(){
  return (
    <>
    <p> Estou trabalhando com Next </p>
    </>
  )
}

export default function Home() {
  return (

    <main className={styles.main}>
      <p>Olá, mundo!</p>
      <Componente />
    </main>
  )
}
