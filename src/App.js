import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'O que é importante?',
        content: 'Família, amigos e paz'
    },
    {
        title: 'Qual a gata mais fofa do mundo?',
        content: 'Nidalee!'

    },
    {
        title: 'Qual sentido da vida?',
        content: 'A resposta não tá numa página de React do Murilo, né?'

    }

];


const options = [
    
    {
        label: 'Strawberry Mix',
        value: 'red'

    },

    {

        label: 'Green Leaf Marijuju',
        value: 'green'

    },
    
    {

        label: 'A Shade of Blue',
        value: 'blue'


    }

];






export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} /> 
            </Route>    
            <Route path="/dropdown">    
                <Dropdown   
                    label="Select a color"  
                    options={options}   
                    selected={selected} 
                    onSelectedChange={setSelected} 
                />  
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/list">
                <Search />
            </Route>

            
        </div>

    )

};