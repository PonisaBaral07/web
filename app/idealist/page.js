import Ideaslist from '../../components/algorithm'
import { GetUserId } from "@/components/cookie";
const Idealist = () => {
  const userId = GetUserId();
  return (
    <div className='flex flex-col ml-60 mr-20 mt-16 gap-4 bg-gray-100 p-2'>
      <div className='font-bold text-green-800 text-3xl text-center'>IDEAS</div>
      <Ideaslist userId={userId}/>
      </div>
  )
}

export default Idealist