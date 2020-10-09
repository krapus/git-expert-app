import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import  GifGrid  from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['El chavo'])
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />            
                {
                    categories.map((category) => {
                        return <GifGrid category= {category} key= {category}></GifGrid>
                    }) 
                }
            
        </div>
    )
}


export default GifExpertApp
