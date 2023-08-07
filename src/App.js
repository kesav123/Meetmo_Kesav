import HomeLayout from './HomeLayout';
import './App.scss';
import SettingsProvider from './SettingsProvider';


function App() {
  return (
    <SettingsProvider>
      <HomeLayout />
    </SettingsProvider>
  );
}

export default App;
