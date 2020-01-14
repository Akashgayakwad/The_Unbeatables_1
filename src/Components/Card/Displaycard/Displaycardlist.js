import React,{Component} from 'react';
import Displaycard from './Displaycard';
class Displaycardlist extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const list = [1,2,3,4,5,6,7,8];
        
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