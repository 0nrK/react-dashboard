import React from 'react'

const AddUser = () => {
    return (
        <div>

            <div className="left">
                <img src="" alt="" />
            </div>

            <form>
                <div className="middle">
                    <div>
                        <label htmlFor="fileUpload">Image: </label>
                        <input name="fileUpload" type="file" />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="phone" />
                    </div>
                    <div>
                        <label>Addres:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="right">
                    <div>
                        <label>Username:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" />
                    </div>
                </div>
                <button type="submit">Send</button>
            </form>

        </div>
    )
}

export default AddUser