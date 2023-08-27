import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>

            <h1>Checkout these epic destinations</h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem
                            src= "./image2.jpeg"
                            text= "Explore the space you have always been curious for..."
                            label= "SpaceS"
                            path= "services"
                        />
                          <CardItem
                            src= "./image2.jpeg"
                            text= "Explore the space you have always been curious for..."
                            label= "SpaceS"
                            path= "services"
                        />
                        </ul >
                        <ul  className='cards__items'>
                          <CardItem
                            src= "./image2.jpeg"
                            text= "Explore the space you have always been curious for..."
                            label= "SpaceS"
                            path= "services"
                        />
                          <CardItem
                            src= "./image2.jpeg"
                            text= "Explore the space you have always been curious for..."
                            label= "SpaceS"
                            path= "services"
                        />
                          <CardItem
                            src= "./image2.jpeg"
                            text= "Explore the space you have always been curious for..."
                            label= "SpaceS"
                            path= "services"
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
