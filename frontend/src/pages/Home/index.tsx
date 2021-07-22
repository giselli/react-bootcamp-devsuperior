import { ReactComponent as MainImage } from 'assets/images/car-header1.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css'

function Home() {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div className="home-image-container">
                        <MainImage />
                    </div>
                    <div>
                        <h1>O carro perfeito para você</h1>
                        <p>Conheça nossos carros e dê um passo na realização do seu sonho</p>
                    </div>
                  
                </div>
            </div>
            <div className="entorno-botao">
            <div>
                        <Link to="/products">
                            <ButtonIcon />
                        </Link>
                    </div>
            </div>
        </div>

    );
}

export default Home;
