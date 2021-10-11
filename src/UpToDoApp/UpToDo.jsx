import React, { useState } from 'react';
import Inputs from './Inputs';
import MapList from './MapList';

const UpToDo = () => {
      
      const [inputData,setInputData] = useState("");
      const [items,setItems] = useState([]);                         
      const [toggleSubmit,setToggleSubmit] = useState(true);
      const [isEditItem,setIsEditItem] = useState(null);

      const addItem= () =>{
       
         if(!inputData)
         {
           alert("Fill Data First!!📪");
         }
          
         else if(inputData && !toggleSubmit){
           setItems(items.map((elem)=>{
                 if(elem.id === isEditItem)
                   return {...elem ,name : inputData};
                 
                return elem;
             })
           )
             setToggleSubmit(true);
             setInputData("");
             setIsEditItem(null);
         }

         else{
           const allInputData = {id: new Date().getTime().toString() , name:inputData}

        setItems([...items,allInputData]);
         setInputData("");
         }
      }



      const deleteItem = (id) =>{
             const updatedItems = items.filter((elem)=> {
                 return elem.id !== id;
             })

             setItems(updatedItems);
      }



      const removeAll = () =>{
          setItems([]);
      }



      const editItem = (id) =>{  
          let newEditItem=items.find((elem)=>{
              return elem.id === id;
          });
  
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);

      }



      const moveUp = (id) =>{

        if(id!==0){
          let t=0;
          t=items[id];
          items[id]=items[id-1];
          items[id-1]=t;
        
          setItems([...items]);
      }
    }



    const moveDown = (id) =>{

      if(id!==items.length-1){
        let t=0;
        t=items[id];
        items[id]=items[id+1];
        items[id+1]=t;
      }
        setItems([...items]);
    }


    
    return (
        <>
       <div className="main-div">
           <div className="child-div">
              
               <Inputs addItem={addItem} inputData={inputData} setInputData={setInputData} toggleSubmit={toggleSubmit}/>

              <MapList items={items} deleteItem={deleteItem} editItem={editItem} moveDown={moveDown} moveUp={moveUp}/>


             {/* for clear all items */}
               <div className="showItems">
                   <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST</span></button>
               </div>

           </div>
       </div>
            
        </>
    )
}

export default UpToDo;
