import { useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";

const MyServiceCard = () => {
    const instance = useAxios();
    const {user} = useAuth()
  const {id} = useParams()

  useEffect(()=>{
    console.log(id);
    instance.get(`/my-service/69116e2e40d18c9097d87946`)
    .then(data => {
        console.log(data.data);
    })
  },[id])
  const handleUpdateService = e => {
    e.preventDefault()
  }
  return (
     <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-base-content text-center mt-4'>Update Service </h1>
       <form onSubmit={handleUpdateService}>
         <fieldset className="fieldset">
          <label className="label">Service Name</label>
          <input type="text" className="input" placeholder="service name" name='service'/>
          <label className="label">Category</label>
          <input type="text" className="input" placeholder="Category" name='category'/>
          <label className="label">Price</label>
          <input type="number" className="input" placeholder="Price" name='price'/>
          <label className="label">Description</label>
          <input type="text" className="input" placeholder="Description" name='desc'/>
          <label className="label">Image URL</label>
          <input type="text" className="input" placeholder="Image URL" name='photo'/>
          <label className="label">Provider Name</label>
          <input type="text" className="input" placeholder="Provider Name" name='name' readOnly defaultValue={user?.displayName}/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' readOnly defaultValue={user?.email}/>
          
          <button className="btn btn-neutral mt-4">Change Service</button>
        </fieldset>
       </form>
      </div>
    </div>
  );
};

export default MyServiceCard;
