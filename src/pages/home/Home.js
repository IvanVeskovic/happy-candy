import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";

import donutSvg from '../../img/donut-svg.svg';
import cakeSvg from '../../img/cake-svg.svg';
import shakeSvg from '../../img/shake-svg.svg';

import ContentBox from "../../components/contentBox/ContentBox";
import { useEffect, useState } from "react";
import BreakSection from "../../components/breakSection/BreakSection";

const Home = () => {
    const [randomDonuts, setRandomDonuts] = useState([]);
    const [numberOfRandomDonuts, setNumberOfRandomDonuts] = useState(5);

    useEffect(() => {
        const abort = new AbortController();
        fetch(`http://localhost:8000/products`, {signal: abort.signal})
            .then(res => res.json())
            .then(data => setRandomDonuts((data.sort(() => 0.5 - Math.random())).slice(0, numberOfRandomDonuts)))
            .catch(err => console.log(err))

            return () => abort.abort();
    },[numberOfRandomDonuts])

    useEffect(() => {
        const screenWidth = window.screen.width;
        if(screenWidth < 600){
            setNumberOfRandomDonuts(3);
        } else if (screenWidth < 900) {
            setNumberOfRandomDonuts(4)
        }
    }, [])

    return ( 
        <div className="home">
            <Header />
            <Heading title='Random donuts for you' />

            <div className="row">
                <div className="home__wraper">
                {
                    randomDonuts.map(donut => (
                        <Card title={donut.name} img={donut.img} width='18%' key={donut.id} item={donut} price={donut.price} />
                    ))
                }
                </div>
            </div>

            <BreakSection />

            <Heading title='From us' />
            <div className="row">
                <div className="home__wraper">
                    <ContentBox title='Donuts' img={donutSvg} text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum' />
                    <ContentBox title='Cakes' img={cakeSvg} text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Syd' />
                    <ContentBox title='Shakes' img={shakeSvg} text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin ' />
                </div>
            </div>
        </div>
     );
}
 
export default Home;