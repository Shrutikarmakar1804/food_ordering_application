import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const orders=[1,1];

export default function OrderTable() {
  const navigate = useNavigate()
  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          title={"All Orders"}
          sx={{pt:2,alignItems:"center"}}
        />
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> id </TableCell>
            <TableCell align="right"> Image </TableCell>
            <TableCell align="right"> Customer </TableCell>
            <TableCell align="right"> Price </TableCell>
            <TableCell align="right"> Name </TableCell>
            <TableCell align="right"> Ingredients </TableCell>
            <TableCell align="right"> Status </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&: td, &: th': { border: 8 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"Shruti@gmail.com"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"Biriyani"}</TableCell>
              <TableCell align="right">{"ingredients"}</TableCell>
              <TableCell align="right">{"completed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </Box>
  )
}
