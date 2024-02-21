import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers'
import React from 'react'

export const GetUserId = () => {
    const cookie = cookies().get('cookie');
    const authToken = cookie.value;
    const decodedToken = jwtDecode(authToken, 'jkdajkdhakjhdkjahkjdahjkdhkajhadkjhkjdhjkh');
    const userId = decodedToken.userId;
    return (userId);
}
