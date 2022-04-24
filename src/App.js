import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Wordslist from './components/Wordslist';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="Search-bar">
        <Searchbar />
      </div>
      <div className="Words-list">
        <Wordslist />
      </div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
