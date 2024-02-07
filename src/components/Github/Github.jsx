import React, { useState, useEffect } from 'react';
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data =  useLoaderData()
 //   const [data, setData] = useState({}); // Set initial state as object

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json()) // Return JSON response
    //         .then((res) => {
    //             setData(res);
    //             console.log(res.followers);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <>
            <h2 className='bg-orange-700 font-bold text-lg text-center text-white py-4'>
                Github Followers: {data.followers}
            </h2>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
    );
}

export default Github;

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
