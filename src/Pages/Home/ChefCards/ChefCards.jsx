import React, { useEffect, useState } from 'react';
import {  ClapSpinner } from 'react-spinners-kit';
import ChefCard from './ChefCard';



const ChefCards = () => {
    const [chefCards, setChefCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://foodie-recepie-server-sumiyaakhi.vercel.app/chefCard')
            .then(res => res.json())
            .then(data => setChefCards(data))
            .catch(error => console.error(error))
        setIsLoading(false);
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-primary font-agbalumo text-center pb-8'>Some Categories of our chef's!</h1>
            <hr />
            <div className="flex flex-col items-center justify-center min-h-screen my-8">
                {isLoading ? (
                    <div className="flex items-center justify-center">
                       
                       <ClapSpinner className="w-10 h-10"></ClapSpinner>
                    </div>
                ) : (
                    

                        <div className='mx-16 md:grid grid-cols-3 gap-8 pb-8'>

                            {
                                chefCards.map(chefCard => <ChefCard
                                    key={chefCard.id}
                                    chefCard={chefCard}
                                ></ChefCard>)
                            }
                        </div>

                
                )}
            </div>

        </div>
    );
};

export default ChefCards;