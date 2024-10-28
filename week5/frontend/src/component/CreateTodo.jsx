 export   function CreateTodo(){
    return <div>
     <input id="title" style={{
        padding:10,
        margin:10 
     }} type="text" placeholder="title" ></input>  <br />
     <input id="desc" style={{
        padding:10,
        margin:10

     }} type="text" placeholder="description"  on onChange={function(e){
      const value = e.target.value;
      setDescription(e.target.value);
     }}/>    <br />
     
     <button  style={{
        padding:10,
        margin:10

     }}  onClick={()=>{
      fetch("http:/localhost:3000/todo",{
          method:"POST",
          body: JSON.stringify({
            title:title,
            description:description
          }) , 
          headers:{
            "contentTypes":"application/json "
          }
         
      })
      .then(async function(res){
         const json = await res.json();
         alert("todo created")
      })
     }}>Add a todo</button>

    </div>
}