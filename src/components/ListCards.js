import React from 'react';
import Card from './Card';

const dataCards = [
    {
        level: 'Basic',
        quality: '1 BTC',
        content: [
            '3 Days',
            'Views',
            'Featured',
            'Private',
            'Basic Quarters'
        ]
    },
    {
        level: 'Suite',
        quality: '2 BTC',
        content: [
            '3 Days',
            'Views',
            'Featured',
            'Private',
            'Suite Quarters'
        ]
    },
    {
        level: 'Executive',
        quality: '3 BTC',
        content: [
            '3 Days',
            'Views',
            'Featured',
            'Private',
            'Executive Quarters'
        ]
    }
]

const ListCards = () => {
    return (
        <section className='px-5 py-10 lg:px-10 lg:py-20 lg:max-w-screen-lg mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                dataCards.map((item, index) => (
                    <Card
                        key={index}
                        level={item.level}
                        quality={item.quality}
                        content={item.content}
                    ></Card>
                ))
            }
        </section>
    );
};

export default ListCards;