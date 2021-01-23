import '../assets/css/Navigation.css'

function Navigation(){
    return (
        <div className="nav-cont">
            <div className='nav-items tittle'>
                <a href="/">Welcome to the<h2>Todo App</h2></a>

            </div>
            <div className='nav-items tools'>
            <a href="/signin">Sign in</a>
                

            </div>
            <div className='nav-items tools'>
            <a href="/signup">Sign Up</a>
                

            </div>
            <div className='nav-items tools'>
            <a href="/about">About Us</a>
                

            </div>
        </div>
    )
}

export { Navigation }