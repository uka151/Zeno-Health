import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Typography,Paper
} from "@material-ui/core";
import Formsy from "formsy-react";
import { TextFieldFormsy } from "@fuse";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";


function Login(props) {
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);
 
  const formRef = useRef(null);
  const login = useSelector(({ auth }) => auth.login);
  
  
  function handleLoginWithGoogle(res) {
    let profileObj=jwtDecode(res.credential)
    profileObj.token=res.credential
   
  }

  useEffect(()=>{
   if(window.google){
    window.google.accounts.id.initialize({
      client_id:12151561564684,
      callback:handleLoginWithGoogle
  });

  window.google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {  
      shape:"pill",
      type:"standard"   
    }
  );
  window.google.accounts.id.prompt()
   }
    
  },[])

  //useEffect(() => {
  //  if (login.error && (login.error.email || login.error.password)) {
//
  //    dispatch(
  //      showMessage({ message: "You have entered an invalid username or password", variant: "error" })
  //    );
  //    disableButton();
  //  }
  //}, [login.error]);
//
  //function handleSubmit(model) {
  //  //alert(JSON.stringify(model));
  //  //props.submitLogin(model);
  //  dispatch(authActions.submitLogin(model));
  //}

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

 


  return (
    <div
      className={clsx(
        "flex flex-col flex-auto flex-shrink-0 md:flex-row md:h-full md-w-full md:p-0"
      )}
    >
       <div className="flex flex-col w-1/2 h-full items-center justify-center">
        <Card className="w-full h-full items-center justify-center mt-20 md:m-0">
          <CardContent className="flex flex-col items-center justify-center p-32 md:p-48">
            <div className="flex flex-row w-full mt-20 items-center justify-center " style={{paddingRight:"11rem"}}>
            <img
            className="w-70 h-70"
            src="assets/images/logos/readyly_icon.png"
            alt="logo"
            style={{height:70,width:70}}
          />
           <Typography className="text-40 font-700 ml-5 mt-4" style={{fontStyle:"normal", color:"#152938"}}>Readyly</Typography>
            </div>

            <Paper className="flex flex-col mt-10 py-32 px-24 shadow-none" style={{height:460, width:345, backgroundColor:`rgba(237, 241, 244, 0.5)`}}>
            <Typography className="text-28 font-400 text-primary">
            Log-in to access Prism
            </Typography>

            <Formsy
            //  onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-start w-full"
            >
              <TextFieldFormsy
                className="mt-5 bg-white text-16 font-400"
                type="text"
                name="email"
                label="Email"
                validations="isEmail"
                validationErrors={{
                  isEmail: "Please enter a valid email"
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="my-5 bg-white text-16 font-400"
                type="password"
                name="password"
                label="Password"
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
            
                variant="outlined"
                required
              />
 
              <div className="flex flex-col w-full items-start justify-start">
              <Link style={{textDecoration:"none"}} to="/forgot-password">
                  <Typography className="text-14 font-400 text-grey mb-10 ">
                  Forgot Password?
                  </Typography>
               
                </Link>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#E38065", height:39,width:95, color: "#FFFFFF", textTransform:"none" }}
                className="text-16 font-600 text-white"
                aria-label="LOG IN"
                disabled={!isFormValid}
              >
               Log in
              </Button>
              
              </div>

     

             {/* <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="remember"
                        checked={form.remember}
                        onChange={handleChange}
                      />
                    }
                    label="Remember Me"
                  />
                  </FormControl>*/}
            </Formsy>

            <div className="mb-10 mt-6 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center mb-5">
              <Divider className="w-32" />
             <Typography className="text-14 font-700 text-grey mx-5">OR</Typography>
              <Divider className="w-32" /></div>
              <div id="signInDiv"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-medium">Don't have an account?</span>
              <Link style={{textDecoration:"none"}} to="/register">
              <Typography className="text-14 font-400 text-grey">
                Create an account
                </Typography>
              </Link>
            </div>
            </Paper>
            <Typography className="font-16 font-400 text-grey mt-5" style={{fontStyle:"italic"}}>Happy customers, happy companies.</Typography>
          </CardContent>
        </Card>
        </div>
      <div className="flex w-1/2 h-full"  >
       
      <img
      style={{objectFit:"cover"}}
            className="w-full h-full"
            src="assets/images/backgrounds/bg_home.jpg"
            alt="logo"
          />
       
     
      </div>

      
    </div>
  );
}

/*export default connect(
  null,
  { submitLogin }
)(Login);*/
export default Login;
