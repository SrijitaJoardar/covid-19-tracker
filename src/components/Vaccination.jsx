import React from 'react';
import { motion } from "framer-motion"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Vaccination(props) {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return <>
        <motion.div initial="hidden"
            animate="visible"
            variants={variants} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TableContainer style={{ width: "86vw" }} component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Date</h3></TableCell>
                            <TableCell align="right"><h3>Daily</h3></TableCell>
                            <TableCell align="right"><h3>Total</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.countryData.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"><motion.h5 >{row.date}</motion.h5></TableCell>
                                <TableCell align="right"><h5>{row.daily}</h5></TableCell>
                                <TableCell align="right"><h5>{row.total}</h5></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </motion.div>
    </>;
}

export default Vaccination;
