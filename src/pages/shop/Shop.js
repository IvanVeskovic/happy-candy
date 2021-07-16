import { useEffect, useState } from "react";
import Card from '../../components/card/Card';

import Heading from '../../components/heading/Heading';

import allProducts from '../../img/all.png';
import donutsProducts from '../../img/donuts.jpg';
import cakesProducts from '../../img/cakes.jpg';
import shakesProduct from '../../img/shakes.jpg';

import CategoryBox from "../../components/categoryBox/CategoryBox";
import Spinner from "../../components/spinner/Spinner";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";

const Shop = () => {
        const [list, setList] = useState([]);
        const [filteredList, setFilteredList] = useState([]);
        const [filter, setFilter] = useState('all');
        const [isLoading, setIsloading] = useState(true);
        const [search, setSearch] = useState('');
        const [limit, setLimit] = useState(15);
        // const [showMessage, setShowMessage] = useState(false);



        useEffect(() => {
            const getListForShop = async () => {
                setIsloading(true);
                const request = await fetch(`http://localhost:8000/products`)
                const data = await request.json();
                setList(data);
                setFilteredList(data);
                setIsloading(false);
            }
            getListForShop();
        }, []);

        useEffect(() => {
            setFilteredList(list.filter(el => filter === 'all' ? el : el.type === filter))
            setLimit(15);
        },[filter])

        const handleSearch = (value) => {
            // setFilteredList([]);
            setSearch(value);
            // setIsloading(true);
            setTimeout(() => {
                if(value === '') {
                    setFilteredList(list)
                    // setIsloading(false);
                } else {
                    setFilteredList(list.filter(item => item.name.includes(search)))
                    // setIsloading(false);
                }
            }, 300);
        }

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
                <div className="row mt-lg mb-sm">
                <Search search={search} handleSearch={handleSearch} />
                        {
                        isLoading && <Spinner />
                        }
                        {/* {
                            showMessage
                            &&
                            <Message text='No candy like that, sorry :(' />
                        } */}
                    
                    <div className="shop__content">
                        {/* {   list && handleListAllProducts()}; */}
                        {   
                            filteredList.filter((item, index) => index < limit).map(item => (
                                <Card title={item.name} img={item.img} key={item.id} price={item.price} item={item} />
                            ))
                        }

                    </div>
                </div>
                        
                        {
                            limit <= filteredList.length   
                            && 
                            <Button width="25%" bgColor='#55efc4' text='Show More' classType='btn--second' limit={limit} callbackFunction={() => setLimit(prevValue => prevValue + 15)} />
                        }
                
            </div>
        );
}
 
export default Shop;