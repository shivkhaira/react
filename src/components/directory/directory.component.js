import React,{useState} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

const Directory=()=>{
   const [section]=useState([
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats',
        
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
        // eslint-disable-next-line
        size:'large',
       
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
        // eslint-disable-next-line
        size:'large',
       
      }

   ])

  
      return(
        <div className="directory-menu">
        {section.map(({id,...sectionprops})=>(
            <MenuItem key={id} {...sectionprops}  />
        ))}
        </div>    
      )
  
}

export default Directory