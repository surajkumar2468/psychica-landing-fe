import React from 'react'
import { useNavigate } from 'react-router-dom';

const Index = ({actualrate, reviewcount, actualrating, name, picture, id, timezone, type}) => {
    console.log("TYPE",timezone);

    const navigate = useNavigate();

    const handleBookappointment = (id, picture, price, name, timezone, type) => {
        const queryParams = {
          picture: picture ? picture?.replace("https://", "") : "",
          price: price,
          name: name,
          type: type,
          timezone: timezone
        };
    
        navigate({
          pathname: `/appointment-now/${id}`,
          search: new URLSearchParams(queryParams).toString(),
        });
      }


    return (
        <div>
            <div className='category__right_main'>
                <div className='category__right_row1'>
                    <div>
                        <h3> ${`${actualrate}`} <small>/minute</small></h3>
                        <div className='star__rating'><img src="/images/star-icon.svg" alt="" /> {`${actualrating === null ? 0 : actualrating}`} <i>{`(${reviewcount} reviews)`}</i></div>
                    </div>
                    <div className='star__img'>
                        <img className='card-img' src={picture} alt="" />
                        <span><img src="/images/check_green.svg" alt="" /></span>
                    </div>
                </div>
                <div className='category__right_row2'>
                    <ul>
                        <li>
                            <span><img src="/images/status_icon.svg" alt="" /></span>
                            <h4>Status <b>Available</b></h4>
                        </li>
                        <li>
                            <span><img src="/images/status_icon.svg" alt="" /></span>
                            <h4>Estimated Wait <b>0 minutes</b></h4>
                        </li>
                        <li>
                            <span><img src="/images/man_icon.svg" alt="" /></span>
                            <h4>Time Minimum <b>30 minutes</b></h4>
                        </li>
                    </ul>
                </div>
                <div className='category__right_row3'>
                    <ul className='d-flex justify-content-center'>
                        {/* <li>
                            <a href=''>Learn About Tina</a>
                        </li> */}
                        <li>
                            <a href='' 
                            onClick={()=>handleBookappointment(id, picture, actualrate, name, timezone, type)}
                            >Meet</a>
                        </li>
                    </ul>
                    {/* <table className='right_row3_table'>
                        <tr>
                            <td><b>$0.80</b>  x <b>30 minute minimum</b></td>
                            <td><b> $24</b></td>
                        </tr>
                        <tr>
                            <td>Platform fee</td>
                            <td><b>$10</b></td>
                        </tr>
                        <tr>
                            <td>Save 10% w/ Profesy+</td>
                            <td><b>$24</b></td>
                        </tr>
                        <tr>
                            <td className='total_colm'><b>Total</b></td>
                            <td className='total_colm'><b>$24.50</b></td>
                        </tr>
                    </table> */}
                </div>
            </div>
        </div>
    )
}

export default Index