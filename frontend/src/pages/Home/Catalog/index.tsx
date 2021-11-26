import ProductCard from "components/ProductCard";
import './styles.css'

function Catalog() {
  return (
    <div className="catalog-container container">
        <div className="pb-5 pt-5 text-center">
        <div className="row">
          <div className="col-md-10 col-xl-7 me-auto ms-auto">
            <div className="col-sm-12 col-lg-9 col-md-10 me-auto ms-auto">
              <form>
                <div className="align-items-center g-2 row">
                  <div className="col-sm">
                    <input type="text" className="form-control pb-2 pe-3 ps-3 pt-2" placeholder="Digite a sua busca" />
                  </div>
                  <div className="col-sm-auto text-end">
                    <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">
                      <span className="align-middle">BUSCAR</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Catalog;
