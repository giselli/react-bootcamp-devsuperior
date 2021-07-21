import './styles.css';

import ProductImg from 'assets/images/car-card1.svg';
import ProductPrice from 'components/ProductPrice';

function ProductCard() {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src= {ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Nome do produto</h6>
                <ProductPrice />
            </div>
        </div>
    );
}

export default ProductCard;
