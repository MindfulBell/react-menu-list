import React, {Component} from 'react';

class Item extends Component {
	constructor(props){		
		super(props);
		this.hoverHandle = this.hoverHandle.bind(this)
		this.state = {
			hover: false
		}
	}

	//handle showing background image on hover
	hoverHandle(){
		this.setState({
			hover: !this.state.hover
		})
	}

	render(){
    const background = `url(${this.props.background})`
    const id=`i${this.props.num.toString()}`; // used to remove last underline on list
    return (
    	<a href={this.props.url ? this.props.url : '#'} target='_blank'>
        <li
        className='row'
        id={id}
        onMouseEnter={this.hoverHandle}
        onMouseLeave={this.hoverHandle}
        style={this.state.hover ? {backgroundImage: background} : {}}>
	        	        
	        <div>
		        <div className='numUL'>
		    			<p className='bold num'>{this.props.num}</p>
		    		</div>
		    		<div className='itemUL'>
			        <span>
				        <p className='bold title'>{this.props.title}</p>
				        <p className='time'>{this.props.duration ? this.props.duration : ''}</p>		
			        </span>
			        <br></br>
			        <div className='subtext'>
			        	<p>{this.props.snippet}</p>
			        </div>
			      </div>    
	        </div>        
        </li>
      </a>
    );
  }
};

export default Item;