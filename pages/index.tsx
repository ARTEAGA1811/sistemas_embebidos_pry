import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/custom.module.css'
import {Project_Container} from "@/components/Project_Container";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Project_Container/>
    </>
  )
}
