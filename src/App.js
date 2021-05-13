import Map from './Components/Map'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from './Components/Loader'
import Header from './Components/Header'

function App() {
  const [eventData, seteventData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(()=>{
    const fetch = ()=>{
      axios.get('https://covid--19-livetracker.herokuapp.com/covid_data_world/get_data_map')
        .then(request=>{
          setloading(true) 
          seteventData(request.data)
          console.log( request.data)
          //console.log(eventData)
          setloading(false) 
        })
        .catch(error=>{
            console.log(error)
        })
    }
    fetch()
    
    
    
  },[])
  return (
    <div>
      <Header/>
     { !loading ?<Map eventData={eventData}></Map>:<Loader/>}
    </div>
  );
}

export default App;
