import React from 'react'
import Chart from '../components/Chart'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar type="user" />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="_">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <h1 className="title">Latest Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home