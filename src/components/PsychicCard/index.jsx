import React from 'react'

const index = () => {
    return (
        <div>
            <div className='category__right_main'>
                <div className='category__right_row1'>
                    <div>
                        <h3> <b>$1</b> $0.80 <small>/minute</small></h3>
                        <div className='star__rating'><img src="/images/star-icon.svg" alt="" /> 4.8 <i>(12 reviews)</i></div>
                    </div>
                    <div className='star__img'>
                        <img src="/images/pexels-pavel-danilyuk2.png" alt="" />
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
                    <ul>
                        <li>
                            <a href=''>Learn About Tina</a>
                        </li>
                        <li>
                            <a href=''>Meet With Tina
                                <img src="/images/shopping_bag_icon.svg" alt="" /> </a>
                        </li>
                    </ul>
                    <table className='right_row3_table'>
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
                    </table>
                    <p className='right_row3_tag'>
                        <img src="/images/report_icon.svg" alt="" />
                        Report this psychic
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index