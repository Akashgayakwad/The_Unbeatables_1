import React,{Component} from 'react';
import Filtertab from '../Card/Filtertabs/Filtertabs';
import './Dashboard.css';
class Dashboard extends Component{

        all_data = ["1","2","3","4","5","6","7","8","22","222"];
        state={
            loading:true,
            data : this.all_data,
        }

    get_data = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Access-Token", "zKB28T9lMcAakFkcHwbdUeA5NnepzlqN9HmFGjN3PdixI5jSCb1YEjgc6O93Waba");
        var urlencoded = new URLSearchParams();
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://3653ec57.ngrok.io/api/LisenceApplication/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("----------",result);
            this.all_data = result;
            this.setState({data:this.all_data,loading:false})
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount(){
        this.get_data();
    }

    tab_data;



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

        if(this.state.loading) {
            return (
                <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        }

        return(
            <div>
                <Filtertab data={this.state.data} tabHandler = {this.tabSwitchHandler} searchHandler = {(e)=>this.searchHandler(e)}/>
            </div>
        )
    }
}
export default Dashboard;