import { v4 as uuidv4 } from 'uuid'

const formatDate = originalDate => {
	if (!originalDate) {
		return ''
	}

	return new Date(originalDate).toLocaleString('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	})
}

const formatFileSize = (bytes = 0, decimals = 2) => {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const generateId = () => {
	const timestamp = new Date().getTime()
	const uuid = uuidv4().replace(/-/g, '') // Remove dashes from uuid
	return `${uuid}${timestamp}`
}

const generateTimestamp = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const seconds = date.getSeconds().toString().padStart(2, '0')
	const milliseconds = date.getMilliseconds().toString().padStart(5, '0')
	// const timezone = '+00:00'

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`
}

const getStyleThumbnailFilename = name => {
	// Replace non-letter or non-number characters with a hyphen
	let result = name.replace(/[^a-zA-Z0-9]/g, '-')

	// Replace letters with accents with their corresponding American letters
	const accentMap = {
		á: 'a',
		é: 'e',
		í: 'i',
		ó: 'o',
		ú: 'u',
		Á: 'A',
		É: 'E',
		Í: 'I',
		Ó: 'O',
		Ú: 'U',
		// Add more mappings as needed
	}

	for (const accentChar in accentMap) {
		const regex = new RegExp(accentChar, 'g')
		result = result.replace(regex, accentMap[accentChar])
	}

	return result.toLowerCase()
}

const mergePromptIntoStyles = (prompt = '', styles = [], tiling = false) => {
	let mergedPrompt = ''

	styles.forEach(style => {
		if (style.prompt.indexOf('{prompt}') === -1) {
			mergedPrompt += `${prompt} ${style.prompt}`
		} else {
			mergedPrompt += style.prompt.replace(/{prompt}/gi, prompt)
		}
	})

	if (mergedPrompt === '') {
		mergedPrompt = prompt
	}

	if (tiling) {
		mergedPrompt +=
			`seamless {prompt} pattern with element that interlock without visible seams where shapes blend seamlessly at the edges`.replace(
				/{prompt}/gi,
				mergedPrompt
			)
	}

	return mergedPrompt
}

export {
	formatDate,
	formatFileSize,
	generateId,
	generateTimestamp,
	getStyleThumbnailFilename,
	mergePromptIntoStyles,
}
