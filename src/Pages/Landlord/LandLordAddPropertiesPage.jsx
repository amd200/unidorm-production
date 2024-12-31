import React from 'react'
import AddVideosProperties from '../../Components/LandLord/AddVideosProperties '
import BasicInfo from '../../Components/LandLord/BasicInfo'
import Pricing from '../../Components/LandLord/Pricing'
import Location from '../../Components/LandLord/Location'
import AddImgsProperties from '../../Components/LandLord/AddImgsProperties'
import Facilities from '../../Components/LandLord/Facilities'


function LandLordAddPropertiesPage() {

    return (
        <div className="addProperties-page">
            <div className="container">
                <AddImgsProperties/>
                <AddVideosProperties />
                <BasicInfo />
                <Location />
                <Pricing />
                <Facilities />
            </div>
        </div>
    )
}

export default LandLordAddPropertiesPage