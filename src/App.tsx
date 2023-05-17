import React from 'react';
import logo from './logo.svg';
import pangoPoto from './components/photo/pangoPhoto.jpg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {Car} from './models/Car';
import { useSelector } from 'react-redux';
import { ClientData } from './models/ClientData';
import { RouteType } from './models/RouteType';


import './App.css';





function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        
        <img src={pangoPoto} className="App-logo" alt="../pangoPhoto" />
        <p>
          Edit <code> src/App.tsx </code> and save to reload.
        </p>
        <a>
         Pango "Blue/White"
        </a>
      </header>
      <footer> skdjsdvkj </footer>
    </div>
  );
}

export default App;


// const App: React.FC = () => {
 
//   const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
//   //useImitator();
  
//   const [flNavigate, setFlNavigate] = React.useState<boolean>(true); 
//   const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData])
//   React.useEffect(() => setFlNavigate(false), [])
// return <BrowserRouter>
{/* <Navigator items={relevantItems} /> */}
{/* {flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : 
<Navigate to={LOGIN_PATH}></Navigate>)} */}
{/* <Routes>
  {getRoutes(relevantItems)}
  
</Routes> 
</BrowserRouter> 

 
} */
// }

// export default App;
// function getRoutes(relevantItems: RouteType[]): React.ReactNode {
//   return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
// }

// function getRelevantItems(clientData: ClientData): RouteType[] {

//   return Routes.filter((r: { authenticated: any; administrator: any; }) => (!!clientData.email && r.authenticated ) ||
//    (!clientData.email && !r.authenticated && !r.administrator) || (clientData.isAdmin && r.administrator))
// }

}