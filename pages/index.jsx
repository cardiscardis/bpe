import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import HomePage from '@/components/homePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <HomePage/>
      </Layout>
    </>
  )
}
