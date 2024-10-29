'use client'

import { useState } from "react"

const userpost = () => {
    var [userpost, setUserPost] = useState([
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Dharmik gandu",
            "address": "FF-4, delhi",
            "urgent": true,
            "field": "web development",
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
            "name": "Dharmik gandue",
            "address": "FF-4, vadodara",
            "urgent": false,
            "field": "web development",
            "details": [
                "hello",
                "world",
                "how",
                "are",
                "you"
            ],
            "nationWide": true
        },
        {
            "_id": "671fcc6f9b42f3b8f72b1872",
            "email": "dharmik27458@gmail.com",
            "name": "Dharmik gandu 3",
            "address": "FF-4, delhi",
            "urgent": true,
            "field": "web ",
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
            "name": "Dharmiadfk gandu",
            "address": "FF-4, delhi",
            "urgent": false,
            "field": "web development",
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

    function changeinfo(element){
        setviewpost(element)
    }
    return (
        <>
            {
                userpost.map((element) => {
                    return <div className="userpostcard" onClick={()=>{changeinfo(element)}}>
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
                            {element.urgent?<p>true</p>:<p>false</p>}
                        </div>
                    </div>
                })
            }
<br />
<br />
<br />
<br />
<br />
<br />
            <div className="alldetial">
                {viewpost.name}
            </div>

        </>
    )
}

export default userpost
