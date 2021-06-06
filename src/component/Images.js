import React, {useState} from 'react';
import Button from './Button.js';

function Image({w, h, src}) {
    const [imageSize, setSize] =useState({ width: w, height: h });

    //increase image size by 20%
    const increase = () => {
        const new_width = (imageSize.width * 0.2) + imageSize.width;
        const new_height = (imageSize.height * 0.2) +imageSize.height;
        setSize({ width : new_width, height : new_height });
    };

    //decrease image size by 20%
    const decrease = () => {
        const new_width = imageSize.width - (imageSize.width * 0.2);
        const new_height = imageSize.height - (imageSize.height * 0.2);
        setSize({ width : new_width, height : new_height });
    };



    return (
        <div className="image">
            <h1> My Reusable Image Component</h1>
             <img 
                src={src}
                width={imageSize.width}
                height={imageSize.height}
                style={imageSize}
                alt=""
            />
            <div className="btn">
            <Button
                label={'Increase Me'}
                handleClick={increase}
            />
            <Button
                label={'Decrease Me'}
                handleClick={decrease}
            />
            </div>
        </div>
    )
}

export default Image;
