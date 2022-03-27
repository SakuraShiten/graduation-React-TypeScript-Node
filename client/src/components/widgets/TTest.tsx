import React from 'react'
import Cleave from 'cleave.js/react';


const TTest = () => {
    const onCustomChange = (event:any)=>{
        console.log(event.target.value)
    }
    return (
        <Cleave
            options={{
                prefix: '+7',
                blocks: [2, 3, 3, 2, 2],
                delimiters: ['(', ')', '-', '-'],
                delimiterLazyShow: true,
                numericOnly: true
            }}
            onChange={onCustomChange}
        />
    )
}

export default TTest