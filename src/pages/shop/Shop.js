import { useContext, useEffect, useState } from "react";
import Card from '../../components/card/Card';

import Heading from '../../components/heading/Heading';

import allProducts from '../../img/all.png';
import donutsProducts from '../../img/donuts.jpg';
import cakesProducts from '../../img/cakes.jpg';
import shakesProduct from '../../img/shakes.jpg';
import CategoryBox from "../../components/categoryBox/CategoryBox";
import { ShopContext } from "../../components/ShopContext";

const Shop = () => {
        const [list, setList] = useState([]);
        const [filter, setFilter] = useState('all');

        const [text] = useContext(ShopContext);


        useEffect(() => {
            const getListForShop = async () => {
                const request = await fetch(`http://localhost:8000/products`)
                .then(res => res.json())
                .then(data => setList(data))
                .catch(err => console.log(err));
            }
            getListForShop();
        }, []);

        return (
            <div className='shop mb-lg' >

                <div className="row">
                    <div className="shop__category">
                        <CategoryBox title='Show All' img={allProducts} setFilter={setFilter} filter={filter} />
                        <CategoryBox title='Donuts' img={donutsProducts} setFilter={setFilter} filter={filter} />
                        <CategoryBox title='Cakes' img={cakesProducts} setFilter={setFilter} filter={filter} />
                        <CategoryBox title='Shakes' img={shakesProduct} setFilter={setFilter} filter={filter} />
                    </div>
                </div>

                <Heading title='Shop All Day' />

                <div className="row mt-lg">
                    <div className="shop__content">
                        {/* {   list && handleListAllProducts()}; */}
                        {   
                            list
                            .filter(el => filter === 'all' ? el : el.type === filter)
                            .map(item => (
                                <Card title={item.name} img={item.img} width='100%' key={item.id} price={item.price} item={item} />
                            ))
                        }
                    </div>
                </div>
                
            </div>
        );
}
 
export default Shop;