/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from 'react'

import emailJs from '@emailjs/browser'

import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'


const Contact = () => {

  const formRef = useRef()

  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })

  const [loading,setLoading]=useState(false);

  const handleChange = (e)=>{}
  const handleSubmit = (e)=>{}

  return (
    <div>Contact</div>
  )
}

export default SectionWrapper(Contact, 'contact') 