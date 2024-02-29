import EntForm from "../../components/entform";
import {GetUserId} from "../../components/cookie";

const EForm = () => {
  const userId = GetUserId()
  console.log("The user id  is ",userId);
  return (
    <EntForm userId= {userId}/>
  );
};

export default EForm;
