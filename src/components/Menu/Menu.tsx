
import { Link } from 'react-router-dom'
import  'assets/style.scss'

const Menu = () => {
    return (
      <div className='link-wrap'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/beauty" className='link'>Beauty</Link>
        <Link to="/fashion" className='link'>Fashion</Link>
        <Link to="/interior" className='link'>Interior</Link>
      </div>
    );
  };
export default Menu
