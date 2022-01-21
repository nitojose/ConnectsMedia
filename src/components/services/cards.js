import React from 'react'
import { Card } from 'react-bootstrap'
import '../../style/service.scss'

export default function cards(props) {
    const width = parseFloat(props.width)+'px';
    const height = parseFloat(props.height)+'px';
    const items =  props.list;

    console.log("items",props.list);

  return (
    <Card id='service_1'>
        <img src={props.image} alt={props.alt} id={props.imgId} width={width} height={height} />

            <div className='items_list'>
                <ul class="dashed">
                    
                    {items.map(name => (  
                        <li>{name}</li>
                    ))}  

                </ul>
            </div>

            <p id='vertical_text'>{props.text}</p>
    </Card>
  );
}
