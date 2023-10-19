import Link from 'next/link'
import styles from '../app/page.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
      <p>Desenvolvido por <Link href='https://github.com/driwcoder' target='_blank' className={styles.link}><span>DriwCoder</span></Link></p>
    </div>
  )
}

export default Footer