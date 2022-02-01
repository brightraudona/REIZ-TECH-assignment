export default function Item(props) {
    return (
        <div className={'Item '+props.index}>
            <div><b>{props.item.name.common}</b></div>
            <div>Area: {props.item.area}</div>
            <div>Continent: {props.item.continents[0]}</div>
        </div>
    )
}//#CCFFCC