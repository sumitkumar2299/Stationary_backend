import pizzalogo from '../assets/Images/pizza_logo.png'
import Footer from '../Components/Footer';

function Layout({children}){
    return (
        <div>
            <nav className="flex items-center justify-around h-16 text-[#687280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center">
                    <p>pizza app</p>
                    {' '}
                    <img className='h-10' src= {pizzalogo} alt='pizza logo'/>

                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>Menu{' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>Services{' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>About{' '}</p>
                        </li>

                    </ul>

                </div>
            </nav>
              {children}


            <Footer/>

            
        </div>

    )
}
 export default Layout;