import { useState } from 'react'
import Heading from './Heading';
import SocialLoginButtons from './SocialLoginButtons';
import Login from './Login';
import Signup from './Signup';
import AcceptBTN from './AcceptBTN';
import Email from './Email';
import Accountlink from './Accountlink';

function App() {
  const [loginform, setloginform] = useState(true);
  const [signupform, setsignupform] = useState(false);
  const [Uplinkvalue, setUplinkvalue] = useState('Signup');
  const [Uplinkparavalue, setUplinkparavalue] = useState('Dont have an account?');

  const [headingvalue, setheadingvalue] = useState('ReactJS login form');
  const [headingparavalue, setheadingparavalue] = useState('Please login your account');
  const [forgot, setforgotform] = useState(true);
  const [backbutton, setbackbutton] = useState(false);
  const [SocialLoginbtn, setSocialLoginbtn] = useState(true);
  const [accountlink, setaccountlink] = useState(true);
  const [email, setemail] = useState(true);
  const [loginbtn, setloginbtn] = useState(true);
  const [signupbtn, setsignupbtn] = useState(false);
  const [resetbtn, setresetbtn] = useState(false);


  const remindertoggle = () => {
    console.log('Reminder toggle button clicked');
  }

  const SignUpLink = () => {

    if (!signupform) {
      // Switch to signup form
      setsignupform(true);
      setloginform(false);
      setforgotform(false);
      setbackbutton(false);
      setemail(false)
      setSocialLoginbtn(true);
      setsignupbtn(true);
      setloginbtn(false);
      setresetbtn(false)
      setUplinkvalue('Login');
      setUplinkparavalue('Already have an account?');
      setheadingvalue('ReactJS signup form');
      setheadingparavalue('Please signup to your account');
    } else {
      // Switch to login form
      setsignupform(false);
      setloginform(true);
      setforgotform(false);
      setemail(true)
      setbackbutton(false);
      setSocialLoginbtn(true);
      setsignupbtn(false);
      setloginbtn(true);
      setresetbtn(false)
      setUplinkvalue('Signup');
      setUplinkparavalue('Dont have an account?');
      setheadingvalue('ReactJS login form');
      setheadingparavalue('Please login your account');
    }
  }

  const init = () => {
    console.log(logininput, loginpassword)
  }
  const forgotbutton = () => {
    console.log('hello! guise you have clicked me');
    setsignupform(false);
    setloginform(false);
    setforgotform(true);
    setbackbutton(true);
    setSocialLoginbtn(false);
    setsignupbtn(false);
    setloginbtn(false);
    setresetbtn(true)
    setaccountlink(false);

  }
  const backbtn = () => {
    console.log('you have successfully mover to your login page');
    setaccountlink(true);
    setSocialLoginbtn(true);
    setbackbutton(false);
    setforgotform(false);
    setloginform(true);
    setsignupbtn(false);
    setloginbtn(true);
    setresetbtn(false)

  }
  const signup = () => {
    console.log(Signupemailinput , Signuppasswordinput , Signupconfirmpassinput)
  }
  const reset = () => {
    console.log(logininput);
    
  }

  const [loginpassword, setloginpassword] = useState('');
  const [logininput, setlogininput] = useState('');
  const logpasswordinput = (event) => {

    setloginpassword(event.target.value);
  }

  const loginemailinput = (event) => {
    setlogininput(event.target.value);
  }

  const [Signupemailinput, setSignupemailinput] = useState('');
  const [Signuppasswordinput, setSignuppasswordinput] = useState('');
  const [Signupconfirmpassinput, setSignupconfirmpassinput] = useState('');
  const signupmailinput = (event) => {
    setSignupemailinput(event.target.value);
  }
  const signuppassinput = (event) => {
    setSignuppasswordinput(event.target.value);
  }
  const signupconfirminput = (event) => {
    setSignupconfirmpassinput(event.target.value);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <Heading mainheading={headingvalue} headingpara={headingparavalue} />
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <form className="space-y-6">

            {/* Signup from */}
            {signupform &&
              <Signup Signupemailinput={Signupemailinput} signupmailinput={signupmailinput} Signuppasswordinput={Signuppasswordinput} signuppassinput={signuppassinput} Signupconfirmpassinput={Signupconfirmpassinput} signupconfirminput={signupconfirminput} />
            }
            {/* Email input*/}
            <Email emailinput={email} setemailinput={setemail} loginemailinput={loginemailinput} logininput={logininput} />
            {/* Login from */}
            {loginform &&
              <Login forgotBTN={forgotbutton} togglebtn={remindertoggle} loginpassword={loginpassword} logpasswordinput={logpasswordinput} />
            }


            {/* Submit Button */}
            <AcceptBTN init={init} backBTN={backbutton} backbutton={backbtn} loginbtn={loginbtn} signupbtn={signupbtn} resetbtn={resetbtn} setresetbtn={setresetbtn} setsignupbtn={setsignupbtn} setloginbtn={setloginbtn} signup={signup} reset={reset} />
          </form>



          {/* Social Login Buttons */}
          <SocialLoginButtons SocialLogin={SocialLoginbtn} setSocialLogin={setSocialLoginbtn} />

          <Accountlink Uplinkvalue={Uplinkvalue} Uplinkparavalue={Uplinkparavalue} SignUpLink={SignUpLink} accountlinkTF={accountlink} setaccountlink={setaccountlink} />
        </div>
      </div>
    </div>
  )
}

export default App
