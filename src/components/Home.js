import React from 'react'
import './Home.css'
import Products from './Products'

const Home = () => {




    return (
        <div className='home'>

            <div className='home__container'>

                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon image" />


                <div className="home__row">
                    <Products
                        id={1}
                        img="https://cdn01.sapnaonline.com/product_media/9789387779020/md_9789387779020.jpg"
                        title="Khalil Gibran"
                        price={22}
                        rating={5}
                    />
                    <Products
                        id={2}
                        img="https://kbimages1-a.akamaihd.net/7dca02a4-6278-4389-bbb9-da29b2b48541/1200/1200/False/a-game-of-thrones-the-story-continues-books-1-5-a-game-of-thrones-a-clash-of-kings-a-storm-of-swords-a-feast-for-crows-a-dance-with-dragons-a-song-of-ice-and-fire.jpg"
                        title="Game of Thrones"
                        price={60}
                        rating={4}
                    />




                </div>
                <div className="home__row">
                    <Products
                        id={3}
                        img="https://images-na.ssl-images-amazon.com/images/I/71Ltu94Vr8L.jpg"
                        title="R.R Martin"
                        price={60}
                        rating={3}

                    />
                    <Products
                        id={4}
                        img="http://prodimage.images-bn.com/pimages/9780345535528_p0_v2_s1200x630.jpg"
                        title="Collection"
                        price={40}
                        rating={4}

                    />
                    <Products
                        id={5}
                        img="https://rukminim1.flixcart.com/image/416/416/jqmnv680/book/1/4/7/ample-education-basics-of-computer-class-1-original-imafchvepgxmtyzw.jpeg?q=70"
                        title="CS fundamentals"
                        price={50}
                        rating={4}

                    />
                </div>
                <div className="home__row">
                    <Products
                        id={6}
                        img="https://www.zdnet.com/a/img/resize/8e85c80fbecb1ed2c90444500e598f4abb62602e/2021/02/12/c491b8db-5955-41c1-ae04-1b971ed85ee5/philips-346b1c.jpg?width=1200&fit=bounds&auto=webp"
                        title="Science and Technology"
                        price={40}
                        rating={3}



                    />

                </div>
                <div className="home__row">
                    <Products
                        id={7}
                        img="https://media.kohlsimg.com/is/image/kohls/1495109?wid=600&hei=600&op_sharpen=1"
                        title="Men's clothing"
                        price={10}
                        rating={4}



                    />
                    <Products
                        id={8}
                        img="https://5.imimg.com/data5/GV/EI/MY-26510312/women-denim-shirt-500x500.jpg"
                        title="Ladies clothing"
                        price={9}
                        rating={3}



                    />
                    <Products
                        id={9}
                        img="https://4.imimg.com/data4/IO/CV/GLADMIN-185583/ladies-denim-shirt-500x500.jpg"
                        title="Ladies clothing"
                        price={5}
                        rating={4}



                    />

                </div>
            </div>


        </div>
    )
}

export default Home