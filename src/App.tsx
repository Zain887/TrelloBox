import './App.css';
import Theme from './theme/theme';
import { MemberProvider } from './trelloCompnents/MemberContext';

function App() {
  return (
    <>
      <MemberProvider>
        <Theme />
      </MemberProvider>
    </>
  );
}

export default App;
