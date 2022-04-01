import React from 'react'
import Chart from '../components/Chart'

const User = () => {
    return (
        <div>
            <div className="userInfo">
                <h1>Information</h1>
                <div className="left">
                    <img src="" alt="" />
                </div>
                <div className="right">
                    <h3>Jane Doe</h3>
                    <div className="detail">
                        <span className="key">E-mail:</span>
                        <span>janedoe@hotmail.com</span>
                    </div>
                    <div className="detail">
                        <span className="key">Phone:</span>
                        <span>+90 531 32 3213</span>
                    </div>
                    <div className="detail">
                        <span className="key">Addres:</span>
                        <span>3214/32 Palo Alto, CA</span>
                    </div>
                </div>
            </div>
            <Chart />
        </div>
    )
}

export default User