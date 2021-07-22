import ProductCard from "components/ProductCard";
import './styles.css'

function Catalog() {
    return (
        <div className=" container my-4">
            <div className="row">
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
                <div className="cardindividual col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
