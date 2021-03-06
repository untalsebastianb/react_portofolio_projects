
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals }) => {
    return (
        <>
            <Search />
            {
                myList?.length > 0 &&
                <Categories title='My List'>
                    <Carousel>
                    {
                        myList?.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            }
            
            {
                trends?.length > 0 &&
                <Categories title='Favorites'>
                    <Carousel>
                        {
                        trends?.map(item => 
                        <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
                
            }

            {
                originals?.length > 0 &&
                <Categories title='Originals'>
                    <Carousel>
                        {
                            originals?.map(item =>
                            <CarouselItem key={item.d} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
        </>

    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}
export default connect(mapStateToProps, null)(Home);