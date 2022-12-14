import React from 'react';
import Cards from "./Cards"
import { motion } from "framer-motion"

function Cases(props) {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return <>
        <motion.div variants={container}
            initial="hidden"
            animate="show" className="app__cards">
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Total Cases" num={props.countryData.cases} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Today Cases" num={props.countryData.todayCases} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Total Deaths" num={props.countryData.deaths} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Today Deaths" num={props.countryData.todayDeaths} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Total Recovered" num={props.countryData.recovered} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Today Recovered" num={props.countryData.todayRecovered} />
            </motion.div>
            <motion.div animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
                variants={item}>
                <Cards text="Total Active" num={props.countryData.active} />
            </motion.div>
        </motion.div>
    </>;
}

export default Cases;
