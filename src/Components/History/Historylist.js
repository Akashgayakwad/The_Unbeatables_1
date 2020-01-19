import React, { Component } from 'react';
// import History from './History';
import {Link} from 'react-router-dom';

class Historylist extends Component{
    
    state={
        loading:true,
        details : [],
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

        fetch("http://3653ec57.ngrok.io/api/system/historian/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("----------",result);
            this.setState({details:result,loading:false})
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount(){
        this.get_data();
    }

    
    render(){

        if(this.state.loading){
            return(
                <div>Loading..</div>
            )
        }

        const allDetails = this.state.details.map((item,index) =>{
            return(
                <tr>
                 <td>{index+1}</td>
                 <td>{item.transactionId}</td>
                 <td className="col-md-2">{item.transactionType.replace("org.hyperledger.composer.system.","")}</td>
                 <td>{item.participantInvoking}</td>
                 </tr>
            )
        });

             return (
                        <div>
                            <Link to="/" className="btn btn-info mb-3">Back</Link>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className="text-center">S.No.</th>
                                        <th>transactionId</th>
                                        <th>transactionType</th>
                                        <th className="text-center">participantInvoking</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allDetails}
                                </tbody>
                            </table>
                        </div>
                )
    }

}

export default Historylist;