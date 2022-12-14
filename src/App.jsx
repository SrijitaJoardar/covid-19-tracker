import './App.css';
import logo from './logo.png';
import { Autocomplete, TextField } from '@mui/material'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
// import Toggle from "./components/Toggle"
import Cases from "./components/Cases"
import Vaccination from "./components/Vaccination"


function App() {

  const [countries, setCountries] = useState([])
  const [countryV, setCountryV] = useState([])
  const [countryDataC, setCountryDataC] = useState([])
  const [countryDataV, setCountryDataV] = useState([])
  const [activeTab, setActiveTab] = useState("Cases")

  const getCountries = async () => {
    try {
      await fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json()).then((data) => {
        const counties = data.map((c) => [
          c.country
        ])
        setCountries(counties)
      })
    } catch (error) {
      console.log(error)
    }

  }

  const getWorldWide = async () => {
    try {
      await fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()).then((data) => {
        setCountryDataC(data)
      })
    } catch (error) {
      console.log(error)
    }

  }

  const getCountryWiseC = async (props) => {
    try {
      getCountryWiseV(props[0])
      const country = props[0]
      await fetch(`https://disease.sh/v3/covid-19/countries/${country}?yesterday=${country}&twoDaysAgo=${country}&strict=${country}&allowNull=${country}`).then((res) => res.json()).then((data) => {
        setCountryDataC(data)
      })
    } catch (error) {
      console.log(error)
    }

  }

  const getCountryWiseV = async (props) => {
    try {
      const country = props
      if (props.length === 0) {
        await fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=true").then((res) => res.json()).then((data) => {
          setCountryDataV(data)
        })
      } else {
        setCountryV(country)
        await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=30&fullData=true`).then((res) => res.json()).then((data) => {
          setCountryDataV(data.timeline)
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const SetActiveTab = (event) => {
    setActiveTab(event)
    getCountryWiseV(countryV)
  }

  useEffect(() => {
    getCountries()
    getWorldWide()
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__logo__h1">
          <motion.img animate={{ rotate: 1440 }}
            transition={{ repeat: Infinity, duration: 6 }} className="app__img" src={logo} alt="logo" />
          <h1 style={{ color: "#787A91" }}>Corona Virus Disease Tracker</h1>
        </div>

        <Autocomplete className="app__autocomplete"
          options={countries}
          getOptionLabel={(option) => option[0]}
          renderInput={(params) => <TextField {...params} />}
          defaultValue={["Worldwide"]}
          isOptionEqualToValue={(option, value) => value}
          onChange={(event, value) => getCountryWiseC(value)}
        />
        <Autocomplete className="app__autocomplete"
          options={["Cases", "Vaccination"]}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} />}
          defaultValue={"Cases"}
          onChange={(event, value) => SetActiveTab(value)}
        />
      </div>
      <div className="app__toggle">
        {/* <Toggle value="left" title="cases" activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        {/* <Toggle value="right" title="vaccination" activeTab={activeTab} setActiveTab={setActiveTab} onClick={SetActiveTab} /> */}
      </div>
      {activeTab === "Cases" ? <Cases countryData={countryDataC} /> : <Vaccination countryData={countryDataV} />}
    </div>
  );
}

export default App;
