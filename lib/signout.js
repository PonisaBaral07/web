
import { cookies } from "next/headers";

export const Signout = () =>
{
    const handleSignOut = ()=>
    {
        const cookie = cookies().delete('cookie');
    }
    return 
    (
        <button onClick={handleSignOut}>
            signout
        </button>
    )

}