// import './App.css'
import AdminLayout from './components/admin-view/layout'
import AuthLayout from './components/auth/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import { Route, Routes } from 'react-router-dom'
import ShoppingLayout from './pages/shopping-view/layout'
import NotFound from './pages/not-found'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* Home component */}
      <h1>Header Component</h1>

      <Routes>
        <Route path="/auth" element= {<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='products' element={<AdminProducts/>}/>
          <Route path='orders' element={<AdminOrders/>}/>
          <Route path='features' element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}>
          {/* <Route path=''/>
          <Route path=''/> */}
         
        </Route>
         <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </div>
  )
}

export default App
