import React from 'react';

const Searchbar = () =>{
    return(
        <div className="row">
            <div className="pull-right col-md-6">
                <div className="form-group">
                    <div className="input-group input-group-alternative mb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                    </div>
                    <input className="form-control form-control-alternative" placeholder="Search" type="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Searchbar;