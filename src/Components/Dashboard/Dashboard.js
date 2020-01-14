import React,{Component} from 'react';
import Displaycardlist from './../Card/Displaycard/Displaycardlist';
import Searchbar from './../Card/Searchbar/Searchbar';
class Dashboard extends Component{
    render(){
        return(
            <div>
                <Searchbar/>
                <Displaycardlist/>
            </div>
        )
    }
}
export default Dashboard;