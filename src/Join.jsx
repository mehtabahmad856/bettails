import "./Join.css";



const Join = () => {

    return (
        <div className="join">
            <div className="contentContainer">
            <div className="logo">
                <h1>betfair</h1>

            </div>
            <form action="">
                <div className="signup">
                    <h2>Sign-Up</h2>
                </div>

                <div className="details">

                    <h3>Your Details</h3>
                    <p>Please make sure your details are accurate so we can <br/> create your account and verify your identity quickly.</p>
                    <p>Gender</p>
                    <div className="inputContainer1">
                    <input id="inputMale" type="radio" name="gender" value="male" /> Male
                    <input id="inputFemale" type="radio" name="gender" value="female" /> Female
                    </div>

                </div>

                <div className="data">

                    <div className="input">
                        
                        <input placeholder="First name" type="text" autoComplete="off" name="username" id="username" />
                    
                    </div>

                    <div className="input">
                        
                        <input placeholder="Last name" type="text" autoComplete="off" name="lastname" id="lastname" />
                    </div>

                    <div className="input">
                        
                        <input placeholder="Email address" type="text" autoComplete="off" name="emailaddress" id="emailaddress" />
                    </div>

                    <div className="input">
                        
                        <input placeholder="Password" type="text" autoComplete="off" name="password" id="password" />
                    </div>

                    <div className="join-now">
                    <p3>Do you have a promocode?</p3>
                    <button type="submit">Join Now</button>
                    </div>

                </div>

                
            </form>

            </div>


        </div>
    )
}

export default Join;