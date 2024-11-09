'use client'

import { useState } from "react"
import '../userpost/userpost.css'


const userpost = () => {
    var [userpost, setUserPost] = useState([
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Dharmik Patel",
            "address": "FF-4, delhi",
            "urgent": true,
            "field": "Web development",
            "details": [
                "hello",
                "world",
                "how",
                "are",
                "you"
            ],
            "nationWide": false
        },
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Vraj Patel",
            "address": "FF-2, Mumbai",
            "urgent": true,
            "field": "Web FullStack",
            "details": [
                "hello",
                "world",
                "how",
                "are",
                "you"
            ],
            "nationWide": false
        },
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Dharmik Patel",
            "address": "FF-4, delhi",
            "urgent": true,
            "field": "Web development",
            "details": [
                "hello",
                "world",
                "how",
                "are",
                "you"
            ],
            "nationWide": false
        },
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Vraj Patel",
            "address": "FF-2, Mumbai",
            "urgent": true,
            "field": "Web FullStack",
            "details": [
                "hello",
                "world",
                "how",
                "are",
                "you"
            ],
            "nationWide": false
        }

    ])

    const [viewpost, setviewpost] = useState(userpost[0]);

    function changeinfo(element) {
        setviewpost(element)
    }
    return (
        <>

            <h1>User-Post</h1>

            <div className="container_userpost">
                <div className="center_container">
                    <div className="cards_all">
                        {
                            userpost.map((element) => {
                                return <div className="userpostcard" onClick={() => { changeinfo(element) }}>
                                    <div className="infoanddr">
                                        <div className="name">
                                            {element.name}
                                        </div>
                                        <div className="address">
                                            {element.address}
                                        </div>
                                    </div>
                                    <div className="field">
                                        {element.field}
                                    </div>
                                    <div className="urgent">
                                        {element.urgent ? <p>true</p> : <p>false</p>}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="alldetail">
                        <div className="continer_alldetail">
                            <h3>{viewpost.field}</h3>
                            <div className="detail">
                                <div className="linedetail">
                                    <b> Name</b> : {viewpost.name}
                                </div>

                                <div className="linedetail">
                                    <b>Urgent</b> : {viewpost.urgent ? <span>Available</span> : <span>Not avialable</span>}
                                </div>
                                <div className="linedetail">
                                    <b>Nationwide</b> : {viewpost.nationWide ? <span>Available</span> : <span>Not avialable</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default userpost
