import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container" id='contact'>
        <img src="/img/pngegg.png" alt="Logo-img" ></img>
        <h2>Peça já o seu!!!</h2>
        <p>Mande agora uma mensagem em nossas redes sociais:</p>
        <div className="social-icons">
          <a href="mailto:matheusticiano34@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/ticiano.matheus/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="footer-info">
          <p3>Copyright ©Renata Bolos</p3>
        </div>
      </div>
    </div>
  );
};

export default Footer;