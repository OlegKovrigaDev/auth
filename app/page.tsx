import { authOptions } from '@/libs/auth'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function Home() {
	const session: Session | null = await getServerSession(authOptions)

	if (session) {
		redirect('/add-to-cart')
	} else {
		redirect('/login')
	}
}
