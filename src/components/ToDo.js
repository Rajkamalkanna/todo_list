import React, { useEffect, useState } from 'react'

export default function ToDo(){
   const getData = () => {
      const data = JSON.parse(localStorage.getItem("list"))
      if(data){
        return JSON.parse(localStorage.getItem("list"))
      }
      else{
        return []
      }
   }
   const [activity, setActivity] = useState('');
   const [listData, setListData] = useState(getData);

   useEffect(() =>{
    localStorage.setItem("list", JSON.stringify(listData))
   },[listData])

   function addActivity(){
     setListData((listData) =>{
       const updateList = [...listData, activity];
       console.log(updateList)
       setActivity('')
      return updateList;
     })
   }
   function removeActivity(i){
      const updateListData = listData.filter((elem, id) => {
        return (i!== id)
      })
      setListData(updateListData)
   }
   function removeAll(){
    setListData([]);
   }
  return(
    <>
    <div className="container">
    <h1 className="header">ToDo List</h1>
    <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='List-heading'>Show Your List</p>  

    {listData!== [] && listData.map((data, i) =>{
         return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div><button onClick={() => removeActivity(i)}>Remove</button></div>
            </p>
            </>
         )  
    })}
    {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}