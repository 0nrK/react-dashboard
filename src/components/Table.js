import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from ".././dataTableSource";
import { Link } from 'react-router-dom';


const Table = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const actionColumns = [
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewBtn">View</div>
                        </Link>
                        <div
                            onClick={() => handleDelete(params.row.id)}
                            className="deleteBtn">
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="dataTable">
            <div className="title">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="dataGrid"
                columns={userColumns.concat(actionColumns)}
                rows={data}
                pageSize={9}
                checkboxSelection
                rowsPerPageOptions={[9]}
            />
        </div>
    )
}

export default Table