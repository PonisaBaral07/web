import Ideaslist from '../../components/algorithm'
import { GetUserId } from "@/components/cookie";
import Logo from '../../components/logo';
import Signout from '../../components/logout';
const Idealist = () => {
  const userId = GetUserId();
  return (
    <div>
      <div className='ml-4'>
        <Logo/>
        </div>
    <div className='flex flex-col ml-60 mr-20 mt-16 gap-4 bg-gray-100 p-2'>
      <div className='flex flex-row-reverse'><Signout/></div>
      <div className='font-bold text-green-800 text-3xl text-center'>IDEAS</div>
      <div className='flex justify-center '>
      <Ideaslist userId={userId} />
      </div>
      </div>
      </div>
  )
}

export default Idealist