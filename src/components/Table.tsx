import React, {useMemo, useEffect} from 'react';
import { 
    useTable, 
    Column, 
    useSortBy,
    usePagination,
} from 'react-table';
import moment from 'moment';
import { User } from './types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUsers } from '../redux/UserSlice';
import Sort from '../assets/images/sort.png';
import Prev from '../assets/images/Prev.svg';
import Next from '../assets/images/Next.svg';
import ActionsDropDown from './actionsDropDown';

const COLUMNS: Column<User>[] = [
    {
        Header: "ORGANIZATION",
        accessor: "orgName",
    },
    {
        Header: "USERNAME",
        accessor: "userName",
    },
    {
        Header: "EMAIL",
        accessor: "email"
    },
    {
        Header: "PHONE NUMBER",
        accessor: "phoneNumber"
    },
    {
        Header: "DATE JOINED",
        accessor: row => {
            return moment(row.lastActiveDate)
            .format("DD-MM-YYYY hh:mm a")
        },
    },
    {
        Header: "STATUS",
        Cell: ({ row }:  { row: { original: User } }) => <div className="status">Active</div>
    },
    {
        Header: " ",
        Cell: ({ row }:  { row: { original: User } }) => <div><ActionsDropDown id={row.original.id}/></div>
    }
]


const Table = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const {loading, users} = user;

    console.log(loading);
    
    useEffect(() => {
        dispatch(fetchUsers())
   }, [dispatch])
    

    // To make sure the same data doesn't make the UI rerender
    const data: User[] = useMemo(() => users, [users]);
    const columns = useMemo(() => COLUMNS, [])

   
    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
        gotoPage,
        pageCount,
        prepareRow
    } = useTable({columns, data}, useSortBy, usePagination)


    const {pageSize} = state;

  return (
    <div>
        {users.length && (
            <>
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span style={{marginLeft: "10px"}}>{column.isSorted 
                            ? (column.isSortedDesc 
                            ? <img src={Sort} alt="sort"/> 
                            : <img src={Sort} alt="sort"/>) 
                            : <img src={Sort} alt="sort"/>}
                        </span>
                    </th>
                    ))}
                    
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                    </tr>
                );
                })}
            </tbody>
          </table>
          <div className="footer">
            <div>
                Showing
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, users.length].map(pagesize => (
                            <option key={pagesize} value={pagesize}>
                                {pagesize}
                            </option>
                        ))
                    }
                </select>
                {" "}out of {users.length}
            </div>
            <div>
                <button 
                    onClick={() => previousPage()} 
                    disabled={!canPreviousPage}
                >
                    <img src={Prev} alt="previous"/>
                </button>
                <span onClick={() => gotoPage(0)}> 1, </span>
                <span onClick={() => gotoPage(1)}>2, </span>
                <span onClick={() => gotoPage(2)}>3, </span>
                <span>... </span>
                <span onClick={() => gotoPage(pageCount - 2)}>{pageOptions.length - 1}, </span>
                <span onClick={() => gotoPage(pageCount - 1)}>{pageOptions.length} </span>
                <button 
                    onClick={() => nextPage()} 
                    disabled={!canNextPage}
                >
                    <img src={Next} alt="next"/>
                </button>
            </div>
          </div>
          </>
        )}   
    </div>
  )
}

export default Table;
