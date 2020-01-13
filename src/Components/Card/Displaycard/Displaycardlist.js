import React,{Component} from 'react';
import Displaycard from './Displaycard';
class Displaycardlist extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.list;
        const Cardlist = () => (
            <div>
                {list.map(item =>{
                  <Displaycard/>  
                })}
            </div>
        )
    
    }
        return(

        )
    }
}

export default Displaycardlist;