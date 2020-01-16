import React,{Component} from 'react';
import Filtertab from '../Card/Filtertab/Filtertab';
class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    all_data = [1,2,3,4,5,6,7,8];
        
        state={
            data : this.all_data,
        }
    render(){

        const tabSwitchHandler = (e) => {
            console.log("called");
            var tab = e.target.value;
            if(tab === 1)
            {
                this.setState({data:this.all_data});
            }
            if(tab === 2)
            {
                const newdata = this.state.all_data.filter((item)=>{
                    return ((item %2) ===0);
                });
                this.setState({data:newdata});
            }
            if(tab === 3)
            {
                const newdata = this.state.all_data.filter((item)=>{
                    return ((item %2) !==0);
                })
                this.setState({data:newdata});
            }
            console.log(this.state.data);
        }

        return(
            <div>
                <Filtertab data={this.state.data} tabSwitchHandler={(tab) =>tabSwitchHandler()} />
                {/* adsad */}
            </div>
        )
    }
}
export default Dashboard;