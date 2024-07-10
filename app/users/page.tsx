import React from 'react'
import styles from '../users/new/UserPage.module.css'

interface User {
    id: number,
    name: string,
    email: string,
}
const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json();


  return (
    <div className='flex min-h-screen flex-col items-center gap-8 p-24'>
        <h1>Welcome New User</h1>
                <div>
            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            </div>
    </div>
  )
}

export default UsersPage