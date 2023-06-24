import React, { useState } from 'react'
import Add from '../img/avatar.svg'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage,db} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {
 
  const[err, serErr] = useState(false)

  const handleSubmit = async (e) => {
          e.preventDefault();
          const displayName = e.target[0].value
          const email = e.target[1].value
          const password = e.target[2].value
          const file = e.target[3].files[0]

  try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
       serErr(true)
        }, 
        () => {
         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
            displayName,
            photoURL:downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid:res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
     
           })
          });
        }
      );

        }catch(err){
           serErr(true)
        }

  }

  return (
   
          <div class="outer-box">
        <div class="inner-box">
              <header class="signup-header">
               <h1>Connecting People</h1>
               
               <h2>Register</h2>
              </header>
              <form onSubmit={handleSubmit}>
              <main class="signup-body">
              
                <p> 
                    <label for="name">Name</label>
                    <input type="text" id="name"  placeholder="name" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email" />
                </p>
                <p>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="password" />
                </p>
                <p>
                    <label htmlFor="file">
                    <img style={{height:"2rem", width:"2rem"}} src={Add} alt='' />
                    <span className='avt'>Add an avatar</span>
                    </label>
                    <input style={{display:"none"}} type="file" id="file" placeholder="file" />
                </p>
                <p>
                    <button>Register</button>
                    {err && <span>Something went wrong</span>}
                </p>
              
              </main>
              </form>
              <footer class="signup-footer">
                 <p>Already have a Account? <a href="#">Sign In</a></p>
              </footer>
        </div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
    </div>
  )
}

export default Register
