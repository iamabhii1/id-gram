import React from 'react';
//import App from '../App';

export const Navbar=({}) =>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">IDGRAM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="button text-right ms-auto">
                            <button className="btn btn-outline-success" type="submit">Get Users</button>
                        </div>
                    </div>
                </div>
            </nav>
        
        
        </>
    )

}



------------------------------------------------------------


import React from 'react';
import './App.css';
//import './Component/navbar.css';
//import {Navbar} from './Component/navbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class App extends React.Component{

  //const classes = useStyles();
  
 
  constructor()
  {
    super();
    this.state={
      user:null
    }
  }
  getData()
  {
    fetch('https://reqres.in/api/users?page=1').then((response)=>{
      response.json().then((userdata)=>{
        console.warn(userdata.data)
        this.setState({user:userdata.data})
      })
    }).catch(error=>{
      console.log(error,"error while fetching the API data");
    });

  }
  
  componentDidMount()
  {

    this.getData();
  }
  

  
  
  render(){
    // const {classes} =this.props;
    return(
      <>
       {/* <div>
        <Navbar />
        </div> */}
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">IDGRAM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="button text-right ms-auto">
                             <button className="btn btn-outline-success" type="submit">Get Users</button> 
                        </div>
                    </div>
                </div>
            </nav>
        <div className="container">
                <div className="row ">
                    <div className="col-md-3 col-sm-4">
                       {
                        this.state.user?
                        this.state.user.map((item,i)=>
                        <div className="card" style={{width:'40vh'}}>
                          <img className="card-img-top" src={item.avatar} alt="Card image cap"/>
                          <div className="card-body">
                            <h4 class="card-id">Id: {item.id}</h4>
                            <h5 class="card-title">{item.first_name} {item.last_name}</h5>
                            <p class="card-text">E-mail: {item.email}</p>
                          </div>
                        </div>
                       ): <Backdrop className={useStyles.backdrop} open>
                       <CircularProgress color="inherit" />
                     </Backdrop>

                      } 
                    
                    </div>
                    
                </div>
        </div>   
           
      </>
    );
  }
}

export default App;
//,i