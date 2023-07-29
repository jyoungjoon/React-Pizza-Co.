import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

// AppLayout is used as the parent of every single routes in the application:
// Outlet is used for children routes of AppLayout in App.jsx
function AppLayout() {
  const navigation = useNavigation();
  // Global navigation state to display the Loader:
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />} 

      <Header />
      
      <div className='overflow-scroll'>
      <main className='max-w-3xl mx-auto'>
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
