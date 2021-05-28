import React ,{useEffect,useState} from 'react';
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function App() {
  const classes=useStyles();
  const [post,setPost]=React.useState(null);
  const [loader,setLoader]=React.useState(false);

  const fetchPosts=()=>{
    setLoader(true);
    setTimeout(fetch("https://reqres.in/api/users?page=1")
    .then(response=>response.json())
    .then(response=>{
      // console.log(response);
      const {body}=response
      setPost(body.data)
      setLoader(false)
    }).catch(error=>{
      console.log(error,"error while fetching the API data");
    }),2000)

  }
  React.useEffect(()=>{
    fetchPosts();
    
  },[]);

  const handleRefresh=()=>{
    fetchPosts()

  };
  const loadingPost=new Array(6);
  return (
    <>   
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="container-fluid">
                         <a className="navbar-brand">ID-GRAM</a>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                         </button>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                             <div className="button text-right ms-auto">
                                  <button className="btn btn-outline-success" type="submit" onPress={()=>handleRefresh()}>Get Users</button> 
                             </div>
                         </div>
                     </div>
                 </nav>
             <div className="container">   
                     <div className="row ">
                         <div className="col-md-3 col-sm-4">
                          {
                            loader?
                            loadingPost.fill(6).map((item,i)=>
                            <div className="card" style={{width:'40vh'}}>
                              <img className="card-img-top" src={item.avatar} alt="Card image cap"/>
                              <div className="card-body">
                                <h4 class="card-id">Id: {item.id}</h4>
                                <h5 class="card-title">{item.first_name} {item.last_name}</h5>
                                <p class="card-text">E-mail: {item.email}</p>
                              </div>
                            </div>
                           ): <Backdrop className={classes.backdrop} open>
                                <CircularProgress color="inherit" />
                              </Backdrop>}
    
                           
                        
                        </div>
                        
                    </div>
            </div>   
               
  </>
   
  );
}

export default App;


 // <div className="App">
    //   <h1 align="center">React-App</h1> 
    //   {post?post :<Backdrop className={classes.backdrop} open>
    //     <CircularProgress color="inherit" />
    //   </Backdrop>}
      
    // </div>
