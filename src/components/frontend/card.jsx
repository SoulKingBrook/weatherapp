import "./style.css"
const Card = (props) => {
    console.log(props)
    let datetime =props.date.split(' ');
    return ( <div className="card">
        <div className="img">
            <img src={props.icon} alt="" />
        </div>
        <div className="details">
        <h4>{datetime[0]}</h4>
        <h4>{datetime[1]}</h4>
        <h2>{props.temp}</h2>
        <h3>{props.description}</h3>
            
        </div>
    </div> );
}
 
export default Card;