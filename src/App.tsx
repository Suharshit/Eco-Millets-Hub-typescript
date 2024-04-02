import { Route, Routes} from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import LoginForm from './_auth/forms/LoginForm'
import SigninForm from './_auth/forms/SigninForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import Maps from './_root/pages/Maps'
import Production from './_root/pages/Production'
import AboutUs from './_root/pages/AboutUs'

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
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
