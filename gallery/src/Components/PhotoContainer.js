import React from 'react';
import NotFound from './NotFound';

const PhotoContainer = ({ data, isLoading }) => {

    // Convert data to array. Set up empty array and push a new item to it in a loop from the data prop

    let output = [];
    data.forEach((item) => {
        output.push(item);
    })

    // Display the results of the photo fetch. Correct output displayed if loading / not loading.
    // Map through each item, assign key and display image in <li>.

    return (
        <div className="photo-container">
            <h2>Results</h2>

            {output.length === 0 && !isLoading ? <NotFound /> :
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