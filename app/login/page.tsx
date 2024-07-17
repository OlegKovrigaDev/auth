import Signin from '@/components/auth/Signin'
import { authOptions } from '@/libs/auth'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const Login = async () => {
	// Fetches the user's session information from the server
	const session: Session | null = await getServerSession(authOptions)

	// Redirects the user to the add-to-cart page if already logged in, otherwise displays the Signin component
	if (session) {
		redirect('/add-to-cart')
	} else {
		return <Signin />
	}
}

export default Login
