import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyLinks from './components/HobbyLinks.jsx';
function App() {
  return (
    <div className="App">
      <ChoresList />
      <div class ="similarComponents">
        <MovieList/>
        <div style={{border: '2px solid #000'}}>
          <BookList />
        </div>
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
