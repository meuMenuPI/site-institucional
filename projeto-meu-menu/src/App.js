
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routers/router';
import VLibras from '@djpfs/react-vlibras';



function App() {
  return (
   <>
   <VLibras forceOnload={true}/>
   <Routers/>
   </>
  );
}

export default App;
