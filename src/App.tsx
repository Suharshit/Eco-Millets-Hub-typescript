import { Route, Routes} from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import LoginForm from './_auth/forms/LoginForm'
import SigninForm from './_auth/forms/SigninForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import Maps from './_root/pages/Maps'
import Production from './_root/pages/Production'
import ContactUs from './_root/pages/ContactUs'
import Help from './_root/pages/Help'
import Services from './_root/pages/Services'
import Refrences from './_root/pages/Refrences'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/sign-in' element={<SigninForm/>}/>
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/maps' element={<Maps/>}/>
          <Route path='/production' element={<Production/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/refrences' element={<Refrences/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
