import './Left-main.css'

const LeftMain = () => {
    return (
        <div className="left-main">
            <div className="name">
                k.syedrahmanudeen
            </div>
            <nav className='navbar'>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contact">contact</a>
            </nav>
            <div className="footer">
                social
            </div>
        </div>
    );
}
 
export default LeftMain;