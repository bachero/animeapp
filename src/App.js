import './App.css'
import { Link, Route } from "wouter"
import Detail from './pages/Detail';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import {AnimesContextProvider} from './context/AnimesContext'

function App() {
  

  return (
    <StaticContext.Provider value={{
      name: 'Developer',
      suscribeteAlCanal: true
    }}>
    <div className="App">
      <section className="App-content">
        <Link to ="/">
          <img className="App-logo" alt='Anime logo' src='https://cdn.dribbble.com/users/1076498/screenshots/4907633/hedi.png'></img>
        </Link>
        <AnimesContextProvider>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/anime/:keyword"/>
        </AnimesContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

/*<Route
component={Detail}
path="/anime/:id"
/>*/

export default App;

