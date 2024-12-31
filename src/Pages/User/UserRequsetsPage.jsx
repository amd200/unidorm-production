import React from 'react'
import MenuProfile from '../../Components/User/MenuProfile'
import RecentRequests from '../../Components/User/RecentRequests'

function UserRequsetsPage() {
    return (
        <div className="userRequests-page py-5">
           <div className="container">
           <div className="row">
                <div className="col-lg-2">
                    <MenuProfile />
                </div>
                <div className="col-lg-10">
                    <RecentRequests />
                </div>
            </div>
           </div>
        </div>
    )
}

export default UserRequsetsPage
