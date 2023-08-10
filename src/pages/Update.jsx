import React from 'react'

function Update() {
  return (
    <div>Update


        
<Link to={`/edit/${id}`} className="btn btn-info  btnedit mx-2">Edit</Link>
        <button className="btn btnedit btn-danger" onClick={handleDelete}>Delete</button> 
    </div>
  )
}

export default Update