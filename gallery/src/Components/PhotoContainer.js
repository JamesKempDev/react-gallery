import React, { useState } from 'react';

const PhotoContainer = ({ data }) => {

    // convert data to array

    let output = [];
    data.map((item) => {
        output.push(item);
    })

    return (
        <div className="photo-container">
            <h2>Results</h2>

            {output.length === 0 ? <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul> : 
            <ul>
                {output.map((item) => {
                    return <li><img alt='pic' src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`} /></li>
                })}
            </ul>
            }
            

        </div >
    )
}


export default PhotoContainer;