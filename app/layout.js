import './globals.css'
import { Poppins} from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Rupesh Wadne',
  description: 'Rupesh Wadne Web3 full stack developer',
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    
  )
}
