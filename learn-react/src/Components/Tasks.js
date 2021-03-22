
function Tasks({tasks}) {


    return (
        <div>
            {
                tasks.map((item)=> <div>
                    <span> <h1 style={{display:'inline', color:'blue'}}>{item.name}</h1> <h2 style={{display:'inline'}}> {item.text}  </h2> <i className="fa fa-times" ></i> </span> 
                </div>)
            }
        </div>
    )
}

export default Tasks
