import React from 'react'
import ReactDOM from 'react-dom'
import IndexRoute from './indexRoute'
import { AuthContextProvider} from './context/authContext'

function MyApp(){
  return (
    <AuthContextProvider>
      <IndexRoute/>
    </AuthContextProvider>
    
  );
}

 ReactDOM.render(<MyApp/>, document.getElementById("root"));