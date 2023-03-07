const space = 'wuzmt0q7cwlf'
const accessToken = '0FxjD-ilrF1QRA7PQTqlsyKj8DWhTsr8fTWB4yVd1bA'

const apiHost = 'https://cdn.contentful.com'
const endPoint =
	'/spaces/wuzmt0q7cwlf/environments/master/entries?access_token=0FxjD-ilrF1QRA7PQTqlsyKj8DWhTsr8fTWB4yVd1bA'

async function loadEntries() {
	const result = await fetch(apiHost + endPoint)
	const andmed = await result.json()
	return andmed
}

export { loadEntries }
