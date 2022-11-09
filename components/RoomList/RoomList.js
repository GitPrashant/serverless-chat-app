import {
	Button,
	Flex,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	View,
} from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'

export const RoomList = ({ handleMenuToggle, rooms = [] }) => {
	const router = useRouter()
	const handleGoToHome = () => {
		router.push(`/`)
	}
	return (
		<View>
			<Flex justifyContent={'start'}>
				<Button onClick={handleGoToHome}>Home</Button>
			</Flex>
			<Table variation="striped" highlightOnHover>
				<TableHead>
					<TableRow>
						<TableCell as="th">Application Rooms</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rooms.map((room) => (
						<TableRow
							key={room.id}
							onClick={() => {
								console.log(room.id)
								handleMenuToggle(room.id)
							}}
						>
							<TableCell>{room.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</View>
	)
}
