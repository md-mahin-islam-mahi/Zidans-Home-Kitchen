import React from 'react';

const RatingTable = ({ ratings }) => {
    const {name, image, comment} = ratings;
    return (
        <div data-theme="dark" className='py-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <th>
                                
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xl">{comment}</p>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Remove</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RatingTable;