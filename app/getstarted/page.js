import Getstart from "@/components/getstart"

import Logo from "@/components/logo"
import Link from "next/link"


const Getstarted = () => {
  return (
    <div className="ml-8 ">
        <div className="flex justify-center md:justify-start"><Logo/></div>
        <div className="flex justify-center mt-8">
            <div className="mt-8">
                <Getstart/>
            </div>
        </div>
        <div className="text-center text-gray-400 mt-4 text-sm">Already Have an account?<Link href="/login" className="font-bold ml-2 text-green-800 hover:text-green-900">Login</Link></div>
    </div>
  )
}

export default Getstarted