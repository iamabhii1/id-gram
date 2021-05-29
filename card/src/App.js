import React from 'react';
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function App() {
  const classes = useStyles();
  const [post, setPost] = React.useState(null);
  const [loader, setLoader] = React.useState(false);

  // used for fetching the API
  //setTimeout is used to set time for loading animation
  //map function is used to get multiple  data 
  //map() function is use to iterate over an array and manipulate or change the data item. 
  const fetchPosts = () => {
    setLoader(true);
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const body = response;
        console.log(body)
        setPost(body.data);
        setLoader(false);
        console.log(post, loader)
      }).catch(error => {
        console.log(error, "error while fetching the API data");
      })
    }, 2000);

  }


  const handleRefresh = () => {
    fetchPosts()

  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand">ID-GRAM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="button text-right ms-auto">
              <button className="btn btn-outline-success" type="submit" onClick={() => handleRefresh()}>Get Users</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
            {
              loader ?
                  <Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                  : post == null ? <div className=" click font-monospace">Click on GetUsers</div>
                  : post.map((item, i) =>
                  <div class="row row-cols-1 row-cols-md-2 g-4" style={{ width: '80vh',padding:'20px' }}>
                      <div class="col">
                        <div class="card">
                          <img src={item.avatar} class="card-img-top img-fluid" alt="no image fetch"/>
                          <div class="card-body">
                            <h5 class="card-id">{item.id}</h5>
                            <h5 class="card-title">{item.first_name} {item.last_name}</h5>
                            <p class="card-text">{item.email}</p>
                          </div>
                        </div>
                      </div>
                     </div>
                    )

            }

          </div>
    </>

  );
}

export default App;

