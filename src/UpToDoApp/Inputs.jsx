import React from 'react';

const Inputs = (props) => {
    const url="https://s3.amazonaws.com/ionic-marketplace/todo-app-theme/icon.png";
    return (
        <>
        
        <figure>
            <img src={url} alt=""/>
            <figcaption>To Do List</figcaption>
            </figure>
  
             <div className="addItems">
                 <input type="text" placeholder="✍ Add Items..."
                 value={props.inputData}
                 onChange={(event) =>{
                     props.setInputData(event.target.value);
                 }}
                 
                 />
                {props.toggleSubmit ? <i className="fa fa-plus" title="Add Item"  onClick={props.addItem}></i>:
                                <i className="fa fa-save" title="Save Item" onClick={props.addItem}></i> 
                 }

                
             </div>
            
        </>
    );
};

export default Inputs;