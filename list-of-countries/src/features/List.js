import Item from '../components/Item.js';

export default function List (props) {
  return (
      <div>
      <button className="button" onClick={props.onAreaClick}> filter smaller then Lithuania </button>
      <button className="button" onClick={props.onOcianaClick}> filter in Oceania region </button>
      <button style={{float:'right'}} onClick={props.onRestoreClick}> Restore </button>
      <div style={{display: 'inline'}}>Countries: {props.Item.length}</div>
      <div>
          {props.Item.map((item, index) => (
              <Item key={index} index={index} item={item}/>

          ))}
      </div>
      <p style={{float:'right'}}>Made by: Matas Togobickij</p>
      </div>
  )
}
