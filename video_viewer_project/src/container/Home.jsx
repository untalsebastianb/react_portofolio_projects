
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const Home = () => {
    const initialState = useInitialState(API)
    return (
        <div className='App'>
            <Header />
            <Search />
            {
                initialState.mylist?.length > 0 &&
                <Categories title='My List'>
                    <Carousel>
                    {
                        initialState.mylist?.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            }
            
            {
                initialState.trends?.length > 0 &&
                <Categories title='Favorites'>
                    <Carousel>
                        {
                        initialState.trends?.map(item => 
                        <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
                
            }

            {
                initialState.originals?.length > 0 &&
                <Categories title='Originals'>
                    <Carousel>
                        {
                            initialState.originals?.map(item =>
                            <CarouselItem key={item.d} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            <Footer />
        </div>

    )
}

export default Home;