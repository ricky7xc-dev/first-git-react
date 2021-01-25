import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';



function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Halooooooo</p>
                <p>Paragraf 2</p>
                <p>Paragraf 3</p>
                
                <p>Paragraf 4</p>
            </Content>
        </div>

    );
}

export default AboutPage;