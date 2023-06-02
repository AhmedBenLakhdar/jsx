
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div>
    <ProfilePhoto/>
    <br/>
    <FullName/>
    <br/>
<Address/>
    </div>
  );
}

export default App;
