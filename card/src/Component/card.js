import React from 'react';
import App from '../App.js';

export const Card = () => { 
    
    return (

        <>
             <div className="container-fluid mt-5">
                <div className="row text-center">
                    <div className="col-10 col-md-3 mt-5   ">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image"><img src="" className="rounded" width="155"/></div>
                                    <div className="ml-3 w-100">
                                        <h4 class="mb-0 mt-0 textLeft">abhi</h4><span className="textLeft">web noob</span>
                                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                            <div className="d-flex flex-column"><span className="articles">articles</span><span className="number1">30</span></div>
                                            <div className="d-flex flex-column"><span className="followers">followrs</span><span className="number2">31</span></div>
                                            <div className="d-flex flex-column"><span className="rating">rating</span><span className="number3">32</span></div>
      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </>    
            
    )
}

