import { useEffect, useState } from 'react'
import Heading from './Heading';
import SocialLoginButtons from './SocialLoginButtons';
import Login from './Login';
import Signup from './Signup';
import AcceptBTN from './AcceptBTN';
import Email from './Email';
import Accountlink from './Accountlink';
import Alert from './Alert';

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
      setresetbtn(false);
      setsignupinputalert(false)
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
      setsignupinputalert(false)
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
  const [borderColor, setBorderColor] = useState('');
  const [signupalert, setsignupalert] = useState('');
  const [loginpasswordstyle, setloginpasswordstyle] = useState('');
  const init = () => {
    console.log(`{Email} = ${logininput}, {Password} = ${loginpassword}`);
    if (logininput.trim() === '' && loginpassword.trim() === '') {
      setBorderColor('border-red-500');
      setloginpasswordstyle('border-red-500');
      setsignupalertvalue('Please enter your email and password')
      setsignupinputalert(true)
    } else if (logininput.trim() === '') {
      setBorderColor('border-red-500');
      setloginpasswordstyle('');
      setsignupalertvalue('Please enter your email')
      setsignupinputalert(true)
    } else if (loginpassword.trim() === '') {
      setloginpasswordstyle('');
      setloginpasswordstyle('border-red-500');
      setsignupalertvalue('Please enter your password')
      setsignupinputalert(true)
    } else {
      setBorderColor('border-blue-500');
      setloginpasswordstyle('border-blue-500');
      setsignupinputalert(false)
    }
   setTimeout(() => {
    setlogininput('');
    setloginpassword('')
   }, 300);
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
    setsignupinputalert(false);
    setBorderColor('border-blue-500');
    setheadingvalue('ReactJS forgot password form');
    setheadingparavalue('Please reset your email password')
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
    setsignupinputalert(false);
    setBorderColor('border-blue-500');
    setloginpasswordstyle('border-blue-500')

  }
  const signup = () => {
    console.log(`{Email} = ${Signupemailinput}, {Password} = ${Signuppasswordinput},  {Confirm password} = ${Signupconfirmpassinput}`);
    
    // Reset all styles first
    setsignupstyleone('');
    setsignupstyletwo('');
    setsignupstylethree('');
    setsignupalert('');
    setsignupinputalert(false);
    
    let hasError = false;
    let errorMessage = '';

    // Check if all fields are empty
    if (Signupemailinput.trim() === '' && Signuppasswordinput.trim() === '' && Signupconfirmpassinput.trim() === '') {
      setsignupinputalert(true);
      setsignupalertvalue('Please fill in all fields');
      setsignupstyleone('border-red-500');
      setsignupstyletwo('border-red-500');
      setsignupstylethree('border-red-500');
      return;
    }

    // Validate email
    if (Signupemailinput.trim() === '') {
      setsignupstyleone('border-red-500');
      hasError = true;
      errorMessage = 'Please enter your email';
    } else {
      setsignupstyleone('border-blue-500');
    }

    // Validate password
    if (Signuppasswordinput.trim() === '') {
      setsignupstyletwo('border-red-500');
      hasError = true;
      errorMessage = 'Please enter your password';
    } else {
      setsignupstyletwo('border-blue-500');
    }

    // Validate confirm password
    if (Signupconfirmpassinput.trim() === '') {
      setsignupstylethree('border-red-500');
      hasError = true;
      errorMessage = 'Please confirm your password';
    } else {
      setsignupstylethree('border-blue-500');
    }

    // Check if passwords match (only if both password fields are filled)
    if (Signuppasswordinput.trim() !== '' && Signupconfirmpassinput.trim() !== '') {
      if (Signuppasswordinput === Signupconfirmpassinput) {
        console.log('Passwords match');
        setsignupalert('border-blue-500');
        setTimeout(() => {
          setSignupemailinput('');
          setSignuppasswordinput('');
          setSignupconfirmpassinput('');
         
         }, 300);
      } else {
        console.log('Passwords do not match');
        setsignupalert('border-red-500');
        hasError = true;
        errorMessage = 'Passwords do not match';
      }
     
    }

    // Set error state and message
    if (hasError) {
      setsignupinputalert(true);
      setsignupalertvalue(errorMessage);
    } else {
      setsignupinputalert(false);
      setsignupalertvalue('');
      console.log('Signup validation passed');
      // Here you can add the actual signup logic
    }
   
  }
  const reset = () => {
    console.log(`{your password has reset by this email} = ${logininput}`);
    if (logininput.trim() === '') {
      setBorderColor('border-red-500');
      setsignupinputalert(true);
      setsignupalertvalue('Enter your email address')
    } else {
      setsignupinputalert(false);
      setsignupalertvalue('')
      setBorderColor('border-blue-500');
    }
    setTimeout(() => {
      setlogininput('');
     }, 300);
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


  const [signupstyleone, setsignupstyleone] = useState('');
  const [signupstyletwo, setsignupstyletwo] = useState('');
  const [signupstylethree, setsignupstylethree] = useState('');


  const signupmailinput = (event) => {
    setSignupemailinput(event.target.value);
  }
  const signuppassinput = (event) => {
    setSignuppasswordinput(event.target.value);
  }
  const signupconfirminput = (event) => {
    setSignupconfirmpassinput(event.target.value);
  }
  const [signupinputalert, setsignupinputalert] = useState(false)
  const [signupalertvalue, setsignupalertvalue] = useState('');
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <Heading mainheading={headingvalue} headingpara={headingparavalue} />
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="space-y-6">

            {/* Signup from */}
            {signupform &&
              <Signup Signupemailinput={Signupemailinput} signupmailinput={signupmailinput} Signuppasswordinput={Signuppasswordinput} signuppassinput={signuppassinput} Signupconfirmpassinput={Signupconfirmpassinput} signupconfirminput={signupconfirminput} signupstyleone={signupstyleone} setsignupstyleone={setsignupstyleone} signupstyletwo={signupstyletwo} setsignupstyletwo={setsignupstyletwo} signupstylethree={signupstylethree} setsignupstylethree={setsignupstylethree} />
            }
            {/* Email input*/}
            <Email emailinput={email} setemailinput={setemail} loginemailinput={loginemailinput} logininput={logininput} borderColor={borderColor} />

            {/* Login from */}
            {loginform &&
              <Login forgotBTN={forgotbutton} togglebtn={remindertoggle} loginpassword={loginpassword} logpasswordinput={logpasswordinput} inputalertstyle={borderColor} loginpasswordstyle={loginpasswordstyle} setloginpasswordstyle={setloginpasswordstyle} />
            }
            {signupinputalert && <Alert signupalertvalue={signupalertvalue} setsignupalertvalue={setsignupalertvalue} signupinputalert={signupinputalert} setsignupinputalert={setsignupinputalert} />}


            {/* Submit Button */}  
            <AcceptBTN init={init} backBTN={backbutton} backbutton={backbtn} loginbtn={loginbtn} signupbtn={signupbtn} resetbtn={resetbtn} setresetbtn={setresetbtn} setsignupbtn={setsignupbtn} setloginbtn={setloginbtn} signup={signup} reset={reset} loginemailinput={loginemailinput} />
          </div>

         {/* Social Login Buttons */}
          <SocialLoginButtons SocialLogin={SocialLoginbtn} setSocialLogin={setSocialLoginbtn} />

          <Accountlink Uplinkvalue={Uplinkvalue} Uplinkparavalue={Uplinkparavalue} SignUpLink={SignUpLink} accountlinkTF={accountlink} setaccountlink={setaccountlink} />
        </div>
      </div>
    </div>
  )
}

export default App
