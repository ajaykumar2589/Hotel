import React from 'react'

const MenuCard = ({menuData}) => {

    return (
        <>
         <section className="main-card--cointainer"> 
        {menuData.map((curElem)=>{
            const {id,image,name,category,price,description}=curElem;
            return (
                <>
               
                <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle" style={{color:"red"}}>{category}</span>
                        <span className="card-title">{name}</span>
                        <span className="card-description subtle" >{description}</span>
                <div className="card-read">Read</div>
                    </div>
                     {<img src={image} alt="image" className="card-media"></img> }
                     <span className="card-tag  subtle">{price}</span>
                </div>
            </div>
            
            
</>
            );

        })}
        </section>
        
        </>
    )
}

export default MenuCard
