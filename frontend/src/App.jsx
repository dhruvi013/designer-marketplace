import Navigation from './components/Customers/Navigation/Navigation';
import Homepage from './pages/Homepage/Homepage';

const App = () => {
  return (
    <div className=''>
      <Navigation />
      <div>
        <Homepage />
      </div>
    </div>
  );
};

export default App;