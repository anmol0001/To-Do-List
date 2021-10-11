import React from 'react';

const MapList = (props) => {
  let {items,deleteItem,editItem,moveDown,moveUp}=props;

    return (
        <>
       <div className="showItems">
           {
             items.map((elem,indx)=>{
                                      return (
                                                <div className="eachItem" key={elem.id}>
                                                      <h3>{elem.name} </h3>
           
           
                                                        <div className="todo-btn">    
                                                           <i className="fas fa-edit" title="Edit Item" onClick={() =>{editItem(elem.id)}}></i> 
                                                           <i className="fas fa-trash" title="Delete Item" onClick={() =>{deleteItem(elem.id)}}></i>   
                                                           <i className="fas fa-arrow-circle-up" title="Move Up" onClick={() =>{moveUp(indx)}}></i>  
                                                           <i className="fas fa-arrow-circle-down" title="Move Down" onClick={() =>{moveDown(indx)}}></i>   
                                                        </div>  
                                                </div>                                                                        
                                            );                                                                             
                                    })
       
            }
        </div>   
        </>
    )
}

export default MapList;
