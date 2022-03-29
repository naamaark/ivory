import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import CurrencyDetails from '../cmps/currency-details';

function Homepage() {
const symbols=['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt', 'ltcusdt']
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Change</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>ASK</TableCell>
                        <TableCell>BID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 {symbols.map(s=>{
                     return <CurrencyDetails symbol={s}></CurrencyDetails>
                 })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Homepage;