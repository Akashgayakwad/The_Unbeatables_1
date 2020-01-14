import React,{Component} from 'react';
import Displaycardlist from './../Card/Displaycard/Displaycardlist';
import Searchbar from './../Card/Searchbar/Searchbar';
import Filtertabs from './../Card/Filtertabs/Filtertabs';
class Dashboard extends Component{
    render(){
        return(
            <div>
                <Filtertabs/>
            </div>
        )
    }
}
export default Dashboard;