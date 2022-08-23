import './Left-main.css'
const LeftMain = () => {
    return (
        <div className="left-main">
            <link href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" rel="stylesheet"></link>
            <div className="name">
                <p>R</p>
                <span>Rahman</span>
            </div>
            <nav className='navbar'>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="footer">
                <button className='git-link-btn' onClick={()=> {window.open("https://github.com/rahman351")}}><img src='/github.png' width="100px" alt='social' title='My Github Link'/></button>
            </div>
        </div>
    );
}
 
export default LeftMain;