import React, {useState} from 'react';

import logo from './assets/logo.svg'

//components
import { FormInput } from './components/FormInput'
import { GifGrid } from './components/GifGrid';

export function GifExpertApp (){

    const categoriesA = [
        'Anime'
    ]
    const [categories, setCategories] = useState(categoriesA)
    
    const handdleAddCat = ( argument ) => {
        // setCategories(( e ) => e.concat(argument)) this solution is bad
        if(categories.includes( argument )) {
            return 
        }
        else if( argument === ""){ 
            return
        }
        else if( !categories.includes( argument )){
            setCategories([argument,...categories ] )
        }
    }
    const handdleReset = ( ) => {
        // setCategories(( e ) => e.concat(argument)) this solution is bad
       setCategories(categoriesA)
    }


    return (
        <div className='div'>
            <div className='logo-cont animate__animated animate__bounceInDown'>
                <img src={logo} alt={"logo"}></img>
                <h1>GIPHY</h1>
            </div>
            <FormInput add={ handdleAddCat } reset={handdleReset}/>
            <div className='categories'>
                <ul>
                    {categories.map( category =>
                        <GifGrid
                        key={category}
                        category={category}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}
