import React,{Component} from 'react';
import Displaycard from './Displaycard';
class Displaycardlist extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.data;
        
        const Cardlist = list.map((item,key) => {
            return(
                <Displaycard/>
            )
        });
    
        return(
            <div>
                {Cardlist}
            </div>
            
        )
    }
}

export default Displaycardlist;