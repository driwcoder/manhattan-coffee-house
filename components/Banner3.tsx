import styles from '../app/page.module.css'

const Banner3 = () => {
  return (
    <section id='contatos' className={styles.banner3}>
      <h2>Contatos & Endereço</h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.6044045761114!2d-41.815240935541006!3d-22.406266060754774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9631026df2b6ad%3A0x2b714ce26e64bdde!2sLagoon%20Pub!5e0!3m2!1spt-BR!2sbr!4v1697595740903!5m2!1spt-BR!2sbr'
        width='800'
        height='450'
        loading='lazy'
      ></iframe>

      <div className={styles.contatos}>
        <p>Telefone & Whatsapp: (21) 99999-5555</p>
        <p>E-mail: contato@manhattan.com.br</p>
        <p>
          Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
        </p>
      </div>
    </section>
  )
}

export default Banner3
