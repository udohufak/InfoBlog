import logo from "./logo.svg"

export default function Header () {
    return (
    <header>
        <nav className="nav-bar">
          <div className="logo">
            <img className='Page-logo' src= {logo} alt="logo" />
            <h1>ReactFacts</h1>
          </div>
          
          <p className="nav-link">
            React Course - Project 1
          </p>
        </nav>
    </header>
    )
}
