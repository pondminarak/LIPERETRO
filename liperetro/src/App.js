import Videoslide from './Vidslide';
import Home from './home/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Package from './package/package';
import Login from './Login/login';
import Register from './register/register';
import Payment from './paymentlipe/payment';
import Upload from './upload/upload';
import SubmitPayment from './submitpayment/submitpayment';
import Review from './Review/review';
import Statuspackage from './status/statuspackage';
import Package1999 from './programtour/Package1999';
import Package2999 from './programtour/Package2999';
import Package3999 from './programtour/Package3999';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Videoslide/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/submitpayment' element={<SubmitPayment/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/status' element={<Statuspackage/>}/> 
        <Route path='/package/1999' element={<Package1999/>}/>
        <Route path='/package/2999' element={<Package2999/>}/>
        <Route path='/package/3999' element={<Package3999/>}/>
      </Routes>
    </Router>
  )
}
    

export default App;
