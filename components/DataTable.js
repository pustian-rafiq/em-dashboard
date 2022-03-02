// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import styles from '../styles/Home.module.css'
// const columns = [
//     { field: 'id', headerName: 'Serial', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     { field: 'address', headerName: 'Address', width: 130 },
//     { field: 'images', headerName: 'Images', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon',  address: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', address: 'Jon', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', address: 'Jon', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', address: 'Jon', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',address: 'Jon', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null,address: 'Jon', age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara',address: 'Jon', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', address: 'Jon',age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey',address: 'Jon', age: 65 },
//     { id: 10, lastName: 'Roxie', firstName: 'Harvey',address: 'Jon', age: 65 },
//     { id: 11, lastName: 'Roxie', firstName: 'Harvey',address: 'Jon', age: 65 },
//     { id: 12, lastName: 'Roxie', firstName: 'Harvey', address: 'Jon',age: 65 },
//     { id: 13, lastName: 'Roxie', firstName: 'Harvey', address: 'Jon',age: 65 },
//     { id: 14, lastName: 'Roxie', firstName: 'Harvey',address: 'Jon', age: 65 },
//     { id: 15, lastName: 'Roxie', firstName: 'Harvey', address: 'Jon',age: 65 },
// ];

// export default function DataTable() {
//     return (
//         <div style={{   width: '100%',textAlign:'center' }}>

//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={10}
//                     rowsPerPageOptions={[5]}
//                     autoHeight={true}
//                 />


//         </div>
//     );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
 
import { visuallyHidden } from '@mui/utils';
import styles from '../styles/DataTable.module.css'
import ClearIcon from '@mui/icons-material/Clear';

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        //align={headCell.numeric ? 'right' : 'left'}
                        align="left"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{paddingLeft:'10px',background:'rgb(247, 247, 247)'}}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};



export default function EnhancedTable() {
    const [searchText, setSearchText] = React.useState("");

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
const searchTextHandler = ()=> {
    setSearchText("")
}

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
 //Show bank data and searches real time
 const tableDatas = rows.filter((search) => {
    return (
      search.name
        .toLowerCase()
        .includes(searchText.toLowerCase())  
    //   search.calories.toLowerCase().includes(searchText.toLowerCase()) ||
      //search.fat.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  const tableData =  stableSort(tableDatas, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
        const isItemSelected = isSelected(row.name);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
            <TableRow
                hover
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
                style={{background:'rgb(247, 247, 247)'}}
            >

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="2"
                // style={{textAlign:'center'}}
                >
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
        );
    })
  

    return (
        <Box sx={{ width: '100%' }} style={{paddingRight:'5px'}} >
            <Paper sx={{ width: '100%', mb: 2,mt:3}} style={{paddingRight:'5px', paddingLeft:'5px'}} >
                <div style={{marginTop:'10px' }} className={styles.searchSection} >
                    <div className={styles.searchLabel}>
                        Search 
                    </div>
                    <div className={styles.searchInput}>
                        <input type="text" placeholder='Search for name, address and others..' 
                        onChange={(e)=> setSearchText(e.target.value)}
                        value={searchText}
                        />
                        <ClearIcon className={styles.clearIcon} onClick={searchTextHandler} />
                    </div>
                </div>
                <TableContainer style={{   marginTop: '0px', background:'white' }} >
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="small"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody >
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {tableData}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
