import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import img1 from '../assets/images/img1.jpg';

class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Cek cek',
                    subTitle: 'cek',
                    imgSrc: img1,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id:1,
                    title: 'Cek cek',
                    subTitle: 'cek',
                    imgSrc: img1,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id:2,
                    title: 'Cek cek',
                    subTitle: 'cek',
                    imgSrc: img1,
                    link: 'https://youtube.com',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

render () {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}
}

export default Carousel;