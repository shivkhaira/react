import React from 'react'

import './preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'

const Collection=({title,items})=>(
<div className="collection-preview">
<h1 className='title'>{title.toUpperCase()}</h1>
<div className="preview">
{
    items.filter((items,idx)=>idx<4).map(({id,...otherprops})=>(
        <CollectionItem key={id} {...otherprops} />
    ))
}
</div>
</div>
)

export default Collection