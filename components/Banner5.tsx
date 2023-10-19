import styles from '../app/page.module.css'

const Banner5 = () => {
  return (
    <div className={styles.banner5}>
      <h1>Horários de Funcionamento</h1>
      <div >
        <p>SEGUNDA</p>
        <div className={styles.linha}></div>
        <p>FECHADO</p>
      </div>
      <div>
        <p>TERÇA</p>
        <div className={styles.linha}></div>
        <p>09:00 - 22:00</p>
      </div>
      <div>
        <p>QUARTA</p>
        <div className={styles.linha}></div>
        <p>09:00 - 22:00</p>
      </div>
      <div>
        <p>QUINTA</p>
        <div className={styles.linha}></div>
        <p>09:00 - 22:00</p>
      </div>
      <div>
        <p>SEXTA</p>
        <div className={styles.linha}></div>
        <p>09:00 - 22:00</p>
      </div>
      <div>
        <p>SÁBADO</p>
        <div className={styles.linha}></div>
        <p>09:00 - 22:00</p>
      </div>
      <div>
        <p>DOMINGO</p>
        <div className={styles.linha}></div>
        <p>12:00 - 22:00</p>
      </div>
    </div>
  )
}

export default Banner5