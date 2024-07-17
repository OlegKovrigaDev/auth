import Signup from '@/components/auth/Signup'
import { authOptions } from '@/libs/auth'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const Register = async () => {
	const session: Session | null = await getServerSession(authOptions)

	if (session) {
		redirect('/add-to-cart')
	} else {
		return <Signup />
	}
}

export default Register
