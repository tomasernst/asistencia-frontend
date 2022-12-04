import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";

import { getLobatos } from "../api/lobatos"; // add get lobatos later on 
                                             // to fill in table,

function Table(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);

    const columns = [
        {
            name: "Album ID",
            selector: (row) => row.albumId
        },
        {
            name: "Title",
            selector: (row) => row.title
        },
        {
            name: "URL",
            selector: (row) => row.url
        }
    ];

    useEffect(() => {
        fetchTableData()
    }, []);

    async function fetchTableData () {
        setLoading(true)
        const URL = "https://jsonplaceholder.typicode.com/photos"
        const response = await fetch(URL)
        console.log(response)

        const users = await response.json()
        setData(users)
        setLoading(false)
    };

    return (
        <div>
            <DataTable 
                title = "Data Test"
                columns = { columns }
                data = { data }
                progressPending = { loading }
                pagination
            />
        </div>
    );
} export default Table;