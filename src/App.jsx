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
  const [buttonvalue, setbuttonvalue] = useState('Login');
  const [headingvalue, setheadingvalue] = useState('ReactJS login form');
  const [headingparavalue, setheadingparavalue] = useState('Please login your account');
  const [forgot , setforgotform] = useState(true);
  const [backbutton , setbackbutton] = useState(false);
  const [SocialLoginbtn , setSocialLoginbtn] = useState(true);
  const [accountlink , setaccountlink] = useState(true);
  const [email , setemail] = useState(true);
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
      setbuttonvalue('Signup');
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
      setbuttonvalue('Login');
      setUplinkvalue('Signup');
      setUplinkparavalue('Dont have an account?');
      setheadingvalue('ReactJS login form');
      setheadingparavalue('Please login your account');
    }
  }

  const init = () => {
  }
  const forgotbutton = () => {
    console.log('hello! guise you have clicked me');
    setsignupform(false);
    setloginform(false);
    setforgotform(true);
    setbackbutton(true);
    setSocialLoginbtn(false);
    setbuttonvalue('Reset password');
    setaccountlink(false);

  }
  const backbtn = () => {
    console.log('you have successfully mover to your login page');
    setaccountlink(true);
    setSocialLoginbtn(true);
    setbackbutton(false);
    setforgotform(false);
    setloginform(true);
    setbuttonvalue('Login')

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
              <Signup />
            }
            {/* Email input*/}
            <Email emailinput={email} setemailinput={setemail}/>
            {/* Login from */}
            {loginform &&
              <Login forgotBTN={forgotbutton} togglebtn={remindertoggle}/>
            }
          
             
            {/* Submit Button */}
            <AcceptBTN init={init} buttonvalue={buttonvalue} backBTN={backbutton} backbutton={backbtn} setvalue={setbackbutton}/>
          </form>

       

          {/* Social Login Buttons */}
          <SocialLoginButtons  SocialLogin={SocialLoginbtn} setSocialLogin={setSocialLoginbtn}/>

          <Accountlink  Uplinkvalue={Uplinkvalue} Uplinkparavalue={Uplinkparavalue} SignUpLink={SignUpLink} accountlinkTF={accountlink} setaccountlink={setaccountlink}/>
        </div>
      </div>
    </div>
  )
}

export default App
