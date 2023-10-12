import {DataGrid, GridColDef} from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddIcon from "@mui/icons-material/Add";
import ListItemText from "@mui/material/ListItemText";
import {useEffect} from "react";
import {useOutletContext, useLoaderData} from "react-router-dom";

const contextMenu = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add User" />
        </ListItemButton>
    </React.Fragment>
);

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 320},
    {field: 'first_name', headerName: 'First name', width: 130},
    {field: 'last_name', headerName: 'Last name', width: 130},
    {field: 'email', headerName: "Email", width: 200},
    {field: "role", headerName: "Role", width: 100},
];

export default function UserListTable() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const { setContextMenu } = useOutletContext<any>();
    const { users } = useLoaderData();

    useEffect(() => {
        setContextMenu(contextMenu);
    }, [setContextMenu]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper sx={{m: 2, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </Paper>
            </Grid>
        </Grid>
    );
}
