import './Sobre.css';

const Sobre = () => {
  return (
    <div className='sobre' id='sobre'>
        <div className='sobre-container'>
            <div className='sobre-img'>
                <img src="/img/bolo-unic.jpg" alt="bolo-unic-img" ></img>
            </div>
            <div className='sobre-info'>
                <p>Apaixonada pela arte da confeitaria, a enfermeira Renata encontra uma verdadeira realização ao fazer bolos para eventos como hobby. Com sua habilidade e criatividade, ela dedica-se a criar bolos saborosos e visualmente deslumbrantes, capazes de encantar qualquer pessoa. Além disso, Renata também se dedica à produção de bolos gelados, encontrando conforto e satisfação na delicada montagem das camadas e na escolha dos ingredientes. Para ela, a confeitaria é uma forma de expressão e uma maneira de trazer doçura e alegria ao cotidiano.</p>
            </div>
        </div>
    </div>
  );
};

export default Sobre;