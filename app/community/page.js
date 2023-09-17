'use client'
import Navbar from "../components/Navbar"
import { ProfileCard } from "../components/ProfileCard"
import firebase from "../../utils/firebase";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function Community() {
  useEffect(() => {
    console.log(Cookies.get('userId'))
    
  }, [])
  return (
    <>
    <h1>Hello world</h1>
    <ProfileCard />
    <div className="flex items-center justify-center p-4 bottom-0 absolute w-full bg-slate-100 rounded-t-3xl">
        <Navbar />
      </div>
    </>
  )
}
