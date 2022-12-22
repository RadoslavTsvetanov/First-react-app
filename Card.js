import Ract from 'react'
export default function Card(props){// props is passing an object to a function nad by doing that we have acess to all of its properties
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD"
    }else if(props.openSpots === 1){
        badgeText = "{props.openspots} left"
    }
    return(
        <div className = "card">
            {badgeText && <div className = "card--badge">{badgeText}</div>}
            <img src = {`../images/${props.img}`} className = "card--image"/>
            <div className="card--stats">
                <img src = {`../images/${props.img}`} className = "card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.locaion}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>// we nust return only one element so we are returning a div nested(stuffed) with all the other elements we need
    )
}