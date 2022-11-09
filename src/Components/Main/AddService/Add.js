import React from 'react';

const Add = () => {

const addService = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.detail.value;

    const service = {
        name,
        description,
        image
    }

    fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(service)
    });
    alert('Service added successfully')
    form.reset()
};
    return (
        <div>
            <form onSubmit={addService}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card w-full shadow-2xl ">
                            <div className="card-body">
                                <h2 className="text-4xl font-semibold">Add Service</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Service Name" className="input input-bordered" required />
                                </div>
                                    
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input name="image" type="text" placeholder="Service Image Url" className="input input-bordered" required />
                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input name="detail" type="text" placeholder="Description" className="input input-bordered h-20" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-error" type="submit" value="Review" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Add;