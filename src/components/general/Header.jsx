import logo from "../../assets/logo-removebg-preview.png";
function Header(){
    return (
        <>
        <div className="header">
            <p><b><img src={logo} alt="logo" /></b></p>
            <a href="#">link 1</a>
            <a href="#">link 2</a>
            <a href="#">link 3</a>
        </div>
        </>
    )
}
export default Header