import { Outlet } from 'react-router-dom';
import './index.scss';
import Navbar from '../Navbar';
import ParticlesBackgraund from '../ParticlesBackgraund';

const Layout = () => {
    return (
        
        <div className='App'>
            <ParticlesBackgraund/>
            <Navbar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
    
                <Outlet />
    
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                </span>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </div>
        </div>
        
        );
}

export default Layout;