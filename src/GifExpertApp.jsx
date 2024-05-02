
import {useState} from 'react';
import { AddCategory , GifGrid} from './components';



const apiKey= "vnJAwg6NmkkAi33mQdAKwodR5iYMNsFB";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (newCategory) =>{
        //const nombre='Valorant';
        /*setCategories(categories.push(nombre)); No debemos usar .map en arrays con react pq se rompe*/ 
        setCategories([ newCategory,...categories ]);
    };

    
 
  return (
    <>

    {/*titulo*/}
    <h1>Gif Search Engine</h1>
    <h2>GifExpertApp</h2>
    {/* Input */}
    <AddCategory
     /*setCategories={ setCategories } 1  */
     onNewCategory={(value)=>onAddCategory(value)}
     />    


    {/* Listado de Gif */}
        <ol>
            {
                categories.map((category)=>(
                <GifGrid  
                key={category}
                category={category}
                />
                ))
            }
        </ol>


    {/*Gif Item*/}
    
    
    </>
  )
}


