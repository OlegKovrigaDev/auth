'use client' // client component

import { delItem, delOneItem } from '@/app/add-to-cart/action'
import { formatNumber } from '@/utils/format'
import { useTransition } from 'react'

// Defining the type for props passed to CartItem component
type CartItemProps = {
	no: number
	id: number
	userId: string
	name: string
	quantity: number
	price: number
}

export default function CartItem({
	no,
	id,
	userId,
	name,
	quantity,
	price
}: CartItemProps) {
	// Declaring state for pending transition
	let [isPending, startTransition] = useTransition()

	return (
		<div className='flex justify-between text-slate-900'>
			<div className='w-[40%] flex gap-2 items-center'>
				<span className='text-sm text-slate-600'>{no}</span>
				<span>{name}</span>
			</div>
			<div className='w-[30%] text-center'>{quantity}</div>
			<div className='w-[30%] text-right'>{formatNumber(quantity * price)}</div>
			<button
				className='text-sm font-semibold hover:text-slate-600'
				onClick={() => {
					// Initiating a transition to delete all items of this type from the cart
					startTransition(() => delItem(userId, id))
				}}
			>
				Delete all items
			</button>
			<button
				className='text-sm font-semibold hover:text-slate-600'
				onClick={() => {
					// Initiating a transition to delete one item of this type from the cart
					startTransition(() => delOneItem(userId, id))
				}}
			>
				Delete one item
			</button>
		</div>
	)
}
