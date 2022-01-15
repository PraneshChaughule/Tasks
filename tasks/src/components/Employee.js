
import React,{useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';
import Pagination from './Pagination';


export default function Employee() {
  const [ordericon, setOrdericon] = useState(true);
  const [searchItem, setSearchItem] = useState("");
    const [info, setInfo] = useState([]);
    const [order, setOrder] = useState("asc");
    const url = "https://hub.dummyapis.com/employee?noofRecords=30&idStarts=1001";
    useEffect(() => {
        async function getData(){
            await axios.get(url)
            .then(response=>setInfo(response))
            .catch(error=>{
                console.log(error);
            })
        }
        getData();
    }, [])

    const datas = (info.data);
    
    const serachdata = searchItem 
    ? datas.filter(
      (row)=> 
      row.firstName?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
      row.lastName?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
      row.email?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
      row.contactNumber?.toLowerCase().indexOf(searchItem)>-1
      )
      :datas;
    // function searchData(rows){
    //   return rows.filter(
    //     (row)=> 
    //     row.firstName?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
    //     row.lastName?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
    //     row.email?.toLowerCase().indexOf(searchItem.toLowerCase())>-1 ||
    //     row.contactNumber?.toLowerCase().indexOf(searchItem)>-1)
    // }
    
    // const ascOrder=()=>{
    //   // if(order === 'asc'){
    //   //   function sorting(col){
    //   //     return col.sort((a, b)=>
    //   //     a[row]>b[row] ? 1: -1
    //   //     );
    //   //   }
    //   //   setOrder('dsc');
    //   // }
    //   setOrdericon(false);
    // }

    // const dscOrder=()=>{
    //   setOrdericon(true);
    // }

    const [currPage, setCurrPage] = useState(0);
    const [rowsperpages, setRowsperpages] = useState(5);

    const handlePageChange=(page)=>{
      setCurrPage(page);
    }

    const paginate=()=>{
      return serachdata.slice(
        currPage * rowsperpages,
        (currPage + 1) * rowsperpages
      )
    }
  return (
    <>
    <TableContainer component={Paper}>
                    <div className='search'>
                        <input type="text" placeholder='Search' className='searchbox' onChange={e=>setSearchItem(e.target.value)}/>
                    </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell></TableCell>
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas && datas.length > 0 ?(paginate().map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell><img src={row.imageUrl} alt="" style={{height:'50px', width:'50px'}}/></TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
              <TableCell>{row.dob}</TableCell>
            </TableRow>
          ))):"No Data Found"}
        </TableBody>
      </Table>
      <Pagination
      count={info && info.data && info.data.length}
      pagesize={rowsperpages}
      currentpage={currPage}
      onPageChange={handlePageChange}/>
    </TableContainer>
    </>
  );
}
