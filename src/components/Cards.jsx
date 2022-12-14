import React from 'react';
import '../style/cards.css'
import { Card, CardContent } from '@mui/material'
import { motion } from "framer-motion"

function Cards(props) {

    return (
        <motion.div whileHover={{ scale: 1.1 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}>
            <Card variant="outlined" className="card__Card">
                <CardContent className="card__CardCont">
                    <h2 style={{ color: "#141E61" }}>{props.text}</h2>
                    <h3>{props.num}</h3>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default Cards