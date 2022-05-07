import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../shared/Firebase/firebase.init'
const Registar = () => {
  const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  
  if (loading || updating || sending) {
    return <div>
      <p>loading...</p>
    </div>
  }

  if (user) {
    console.log(user)
    window.alert(`user is registared`);
    
    return <p>succeed</p>
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName });
    await sendEmailVerification();
    alert(`sent verification email to ${email}. Haven't get? check spam folder `)
    navigate('/');
    
  }
    return (
        <div>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Registar</h3>
            <div className='mx-auto w-1/2'>
              <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Name'/>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Create a strong password' />
                <button className='p-2 bg-blue-500 text-white bg-blue-500 rounded' type={'submit'}>Registar</button>
                {
                  (error || updateError || verificationError) && <p className='text-red-500'>{ error?.message || updateError?.message } || {verificationError.message}</p>
                }
          </form>
          <p>Have an account? <Link className='hover:text-blue-500 underline' to={'/login'}>Login here</Link></p>
            </div>
        </div>
    );
};

export default Registar;
/* 
{
    "user": {
        "uid": "mA0VWpLVEQMQaG58SCurGGoeDMD2",
        "email": "habijabi@mail.com",
        "emailVerified": false,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "habijabi@mail.com",
                "displayName": null,
                "email": "habijabi@mail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AIwUaOlARQhSerkPKzaPEtNSTedZxvf3IgoXuUFsT2R79-mIoToPdv0hu99pqv_WjjC5l_veVTaccQLoBHCJaTjxceHeW3mBqY9fpHCIqi8lHd17OgtT4Yn8us0mdpHah1vLvp0nj-_0enYZGwsxx60ZgmYpLQwTH2GuOA27hkGRSJ4l6jSjWfYTbzdMv0ZwtUG-Q9E1lxn8MANeNntqQjh5Jk6nRt42cQ",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGFwdG9wLXN0b2NrLW5ldyIsImF1ZCI6ImxhcHRvcC1zdG9jay1uZXciLCJhdXRoX3RpbWUiOjE2NTE5MDYxNTIsInVzZXJfaWQiOiJtQTBWV3BMVkVRTVFhRzU4U0N1ckdHb2VETUQyIiwic3ViIjoibUEwVldwTFZFUU1RYUc1OFNDdXJHR29lRE1EMiIsImlhdCI6MTY1MTkwNjE1MiwiZXhwIjoxNjUxOTA5NzUyLCJlbWFpbCI6ImhhYmlqYWJpQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhYmlqYWJpQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Sut_f3o0lr833-WRZoZGu88p_5E5vRjVsh8zv2wopr1J2avL_dVZDjK0bAKW44eK1TkRKHoUS86SDiC8WOLOZswy4sPnChn5_MIRevYLLYOTbzE7GGfLUSdZFeDxAxiR1l-k8oeD_z1ZcymRGfY4v6iFqreJR3OpldfJlqvUxkqi5evSSb94O0rMrSHgHoytqMYuR0haeJhoQiGR_BANPpBs09g9JoQt22xIDIjXR3wuOD1qmZekOLILbKUFm6jyZddmPP2fP0yNVT5IXehcoaj-eWAKtncUsrV5-17skDTFpwPlC8M0O7UJEyOdAEuPSl1Vbcpb4b3l_f0b_3sO9w",
            "expirationTime": 1651909752640
        },
        "createdAt": "1651906152077",
        "lastLoginAt": "1651906152077",
        "apiKey": "AIzaSyCWvflx-yqYpYeNAoEbX42rXVR1x3wGWDc",
        "appName": "[DEFAULT]"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGFwdG9wLXN0b2NrLW5ldyIsImF1ZCI6ImxhcHRvcC1zdG9jay1uZXciLCJhdXRoX3RpbWUiOjE2NTE5MDYxNTIsInVzZXJfaWQiOiJtQTBWV3BMVkVRTVFhRzU4U0N1ckdHb2VETUQyIiwic3ViIjoibUEwVldwTFZFUU1RYUc1OFNDdXJHR29lRE1EMiIsImlhdCI6MTY1MTkwNjE1MiwiZXhwIjoxNjUxOTA5NzUyLCJlbWFpbCI6ImhhYmlqYWJpQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhYmlqYWJpQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Sut_f3o0lr833-WRZoZGu88p_5E5vRjVsh8zv2wopr1J2avL_dVZDjK0bAKW44eK1TkRKHoUS86SDiC8WOLOZswy4sPnChn5_MIRevYLLYOTbzE7GGfLUSdZFeDxAxiR1l-k8oeD_z1ZcymRGfY4v6iFqreJR3OpldfJlqvUxkqi5evSSb94O0rMrSHgHoytqMYuR0haeJhoQiGR_BANPpBs09g9JoQt22xIDIjXR3wuOD1qmZekOLILbKUFm6jyZddmPP2fP0yNVT5IXehcoaj-eWAKtncUsrV5-17skDTFpwPlC8M0O7UJEyOdAEuPSl1Vbcpb4b3l_f0b_3sO9w",
        "email": "habijabi@mail.com",
        "refreshToken": "AIwUaOlARQhSerkPKzaPEtNSTedZxvf3IgoXuUFsT2R79-mIoToPdv0hu99pqv_WjjC5l_veVTaccQLoBHCJaTjxceHeW3mBqY9fpHCIqi8lHd17OgtT4Yn8us0mdpHah1vLvp0nj-_0enYZGwsxx60ZgmYpLQwTH2GuOA27hkGRSJ4l6jSjWfYTbzdMv0ZwtUG-Q9E1lxn8MANeNntqQjh5Jk6nRt42cQ",
        "expiresIn": "3600",
        "localId": "mA0VWpLVEQMQaG58SCurGGoeDMD2"
    },
    "operationType": "signIn"
} */