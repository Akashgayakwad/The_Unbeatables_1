import React,{Component} from 'react';
import Filtertab from '../Card/Filtertabs/Filtertabs';
class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    all_data = ["1","2","3","4","5","6","7","8","22","222"];
    tab_data;   
        state={
            data : this.all_data,
        }

        tabSwitchHandler = (tab) => {
            console.log("called");
            if(tab === 1)
            {
                this.tab_data = this.all_data;
                this.setState({data:this.all_data,tab_data:this.all_data},()=>{
                    console.log(this.state.data);
                });
            }
            if(tab === 2)
            {
                const newdata = this.all_data.filter((item)=>{
                    return ((item %2) ===0);
                });
                this.tab_data=newdata;
                this.setState({data:newdata},()=>{
                    console.log(this.state.data);
                });
            }
            if(tab === 3)
            {
                const newdata = this.all_data.filter((item)=>{
                    return ((item %2) !==0);
                })
                this.tab_data=newdata;
                this.setState({data:newdata},()=>{
                    console.log(this.state.data);
                });
            }
        }

        searchHandler = (e) =>{
            if(e.target.value)
            {
                const newdata = this.tab_data.filter((item)=>{
                    return (item.startsWith(e.target.value));
                });
                this.setState({data:newdata},()=>{
                    console.log(this.state.data);
                })
            }
            else{
                this.setState({data:this.tab_data},()=>{
                    console.log(this.state.data);
                })
            }
        }

    render(){

        return(
            <div>
                <Filtertab data={this.state.data} tabHandler = {this.tabSwitchHandler} searchHandler = {(e)=>this.searchHandler(e)}/>
            </div>
        )
    }
}
export default Dashboard;