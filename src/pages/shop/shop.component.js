import React, { useState } from 'react'

import ShopData from './shop.data'
import Collection from '../../components/preview-collection/preview.component'
const Shop=()=>{

const [collections]=useState(ShopData)


return(

    
    <div className="shop-page">

    {
        collections.map(({id,...props})=>(
            <Collection key={id} {...props} />
        ))
    }

    </div>
)
}

export default Shop