import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Explore, Create, & Inspire...</h1>
                <p className="pl-desc">
                    Creativity is subjective.
                    Envision your goals and code them down with passion.
                    Feel free to check out the major projects I've worked on.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={ item.link } />
                ))}
            </div>
        </div>

    )
}

export default ProductList;