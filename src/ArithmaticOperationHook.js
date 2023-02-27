import { useState } from 'react'

function useArithmaticeOperation(value1, value2) {
	const [data, setData] = useState(value1 + value2);

	const addition = () => {
		setData(value1 + value2)
	}

	const substaction = () => {
		setData(value1 - value2)
	}

	const multiply = () => {
		setData(value1 * value2)
	}

	const devide = () => {
		setData(value1 / value2)
	}

	return [data, addition, substaction, multiply, devide]
}

export default useArithmaticeOperation