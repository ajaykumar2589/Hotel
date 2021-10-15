import React, { useState,useEffect } from 'react'
import "./style.css";
//get local data back
const getLocalData=()=>{
    const list= localStorage.getItem('mytodoList');
    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }

};
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    //add items 
    const addItem = () => {
        if (!inputdata) {
            alert("Please enter data");
        } 
        else if (inputdata && toggleButton){
            setItems(items.map((curElem)=>
            {
                if(curElem.id==isEditItem){
                    return {...curElem,name:inputdata};
                }
                return curElem;
            }))
            setInputData("");
        setIsEditItem("");
        setToggleButton(false);

        }else {
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputdata,

            };
            setItems([...items,myNewInputData]);
            setInputData("");
        }
    }
    //Delete items
    const deleteItem=(index)=>{
        const updatedItem=items.filter((curElem)=>{return (curElem.id!==index);});
        setItems(updatedItem);

    };
    const removeAll=()=>{
        setItems([]);
        
    }
    //adding local stroge
    useEffect(()=>{
        localStorage.setItem("mytodoList",JSON.stringify(items));
    },[items])
    //editing the List
    const editItem= (index)=>{
        const updatedItem=items.find((curElem)=>{return (curElem.id===index);});
        setInputData(updatedItem.name);
        setIsEditItem(index);
        setToggleButton(true);

    }
    return (
        <><div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="img"></img>
                    <figcaption>Add Your List Here 🤙</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text"
                        placeholder="✍ Add Item"
                        className="form-control"
                        value={inputdata}
              onChange={(event) => setInputData(event.target.value)}

                    />
{toggleButton? <i className="far fa-edit add-btn" onClick={addItem}></i>:<i className="fa fa-plus add-btn" onClick={addItem}></i>}
                    

                </div>
                {/**show our items  */}
                {items.map((curElem,index)=>{
                    return (
                    <div className="showItems">
                    <div className="eachItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>

                    </div>

                </div>);
                })}
               
                {/**remove all buttons */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>removeAll()} >
                        <span>CHECK LIST</span></button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Todo;
