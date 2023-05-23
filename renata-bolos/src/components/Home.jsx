import './Home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='home-container'>
            <div className='home-info'>
                <h1>Renata Bolos</h1>
                <p>Nossos bolos são feitos com ingredientes frescos e selecionados, garantindo uma explosão de sabores em cada mordida. Seja para um aniversário especial, um casamento dos sonhos ou qualquer ocasião que mereça um doce momento, estamos prontos para torná-lo inesquecível.</p>
                <p>Convidamos você a explorar nossa galeria de bolos exclusivos e personalizados, onde você encontrará uma variedade deliciosa de sabores, coberturas tentadoras e decorações surpreendentes. Acreditamos que cada comemoração merece um bolo único e feito sob medida.</p>
                <button><a href="#bolos"> Ver Bolos</a></button>
            </div>
            <div className='home-img'>
                <img src="/img/home-logo.png" alt="Logo-img" ></img>
            </div>
        </div>
    </div>
  );
};

export default Home;