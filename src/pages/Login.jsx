// import new_doctor from "./assets/new_doctor.png";

function Login(){
    return(
        <>
        <div className="Login">
            <div className="form-border">
            <form action="localhost:5000">
                <button name="sign-in" id="button-sign-in">Sign In</button>
                <button name="sign-up" id="button-sign-up">Sign Up</button>
                <input type="text" name="uname" id="login-uname-input" placeholder="  Username"/><br />
                <input type="email" name="email" id="login-email-input" placeholder="  Email"/><br />
                <input type="password" name="password" id="login-password-input" placeholder="  Password"/>
                <button name="confirm" id="button-confirm" >Submit</button>
                <hr />
                <button name="google" id="button-google-oauth"></button>
                <button name="github" id="button-github-oauth"></button>
                <button name="outlook" id="button-outlook-oauth"></button>
            </form>
            
            </div>
            {/* <div className="carousel"> */}
            {/* <form style={{display : 'flex', justifyContent: 'space-between', flexDirection: "column", marginLeft: "60px"}} action="localhost:5000">
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw",}} type="text" name="uname" id="login-uname-input" />
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw"}} type="email" name="email" id="login-email-input" />
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw"}} type="password" name="password" id="login-password-input" />
            </form> */}
            {/* </div> */}
        </div>
        </>
    )

}
export default Login