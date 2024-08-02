import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='header'>
                <img src="./download.png" alt="image" />

                <div className='navbar'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button>Login</button>


                </div>
            </div>
        </>
    );
}

export default Navbar;
