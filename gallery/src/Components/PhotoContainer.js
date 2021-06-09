import React from 'react';
import NotFound from './NotFound';

const PhotoContainer = ({ data }) => {

    // convert data to array

    let output = [];
    data.forEach((item) => {
        output.push(item);
    })

    return (
        <div className="photo-container">
            <h2>Results</h2>

            {output.length === 0 ? <NotFound /> : 
            <ul>
                {output.map((item) => {
                    return <li key={item.id}><img alt='pic' src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`} /></li>
                })}
            </ul>
            }
            

        </div >
    )
}


export default PhotoContainer;