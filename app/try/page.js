import Ideaslist from '../../components/algorithm'
import { GetUserId } from "@/components/cookie";

const Page = () => {
  const userId = GetUserId();
  return (
    <div>
      <Ideaslist userId={userId}/>
    </div>
  )
}

export default Page