import React, {Component} from 'react';
import Item from './item';

function ItemList(props) {

  //get all of the video Items mapped
  const vidItems = props.vidData.map((item, ind) =>{
  let duration = item.metadata.duration;
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration/60-hours*60);
  const tempSeconds = duration - Math.floor(duration/60)*60;
  const seconds = tempSeconds > 9 ? tempSeconds : `0${tempSeconds}`
  duration = hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;

  return (
    <Item 
    key={ind}
    num={ind < 9 ? `0${ind+1}` : `10`} 
    background={item.thumbnail} 
    url={item.metadata.url}
    title={item.metadata.title}
    snippet={item.metadata.description.slice(0,25) + '...'}
    duration={duration}/>
    )
})

  //get all the article items mapped
  const articleItems = props.articleData.map((item,ind)=>{
    return (
      <Item 
      key={ind}
      num={ind < 9 ? `0${ind+1}` : `10`} 
      background={item.thumbnail} 
      title={item.metadata.headline} 
      snippet={item.metadata.headline.slice(0,25) + '...'} /> 
      )              
  })
  return (
    <div className='container-fluid'>
      <div className='item-list'>
        <ol>
          {props.active === 'videos' ? vidItems : articleItems}
        </ol>
        <div className='see-more'>
          <p>SEE MORE VIDEOS</p>
        </div>
      </div>
    </div>
    );  
}

export default ItemList