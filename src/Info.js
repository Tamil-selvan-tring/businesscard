import React from "react";
export default function Info()
{
    return(
        <div className="info">
                <div><img alt="Photo" className="img" src="images/Avatar.jpg"></img></div>
                <div><h3 className="data">Tamil selvan</h3></div>
                <div><h4 className="data">Trainee</h4></div>
                <div><button className="btn">Email</button>
                <button className="btn">Linked in</button></div>
        </div>
    );
}