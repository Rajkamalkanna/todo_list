import React, { useState } from 'react'

export default function ToDoList () {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]); 
    function addActivity(){
        // setListData([...listData, activity])         //It's work as Asynchronous 
        // console.log(listData)
        setListData((listData) =>{
            const updateList = [...listData, activity];
            console.log(updateList)
            setActivity('')
            return updateList;
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id) => {
            return (i!== id);
        })
            setListData(updatedListData) 
    }
    function removeAll(){
        setListData([])
    }
  return (
    <>
    <div className='container'>
    <div className='header'><h1>ToDoList</h1></div>
    <input type="text" placeholder='Add Activity' value = {activity} onChange = {(e) => setActivity(e.target.value) }/>
    <button onClick={addActivity}>Add</button>
    <p className='List-heading'>This is your list</p>
    
    {listData!== [] && listData.map((data, i) =>{
         return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove</button></div>
            </p>
            
            </>
         )  
    })}
    {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}
