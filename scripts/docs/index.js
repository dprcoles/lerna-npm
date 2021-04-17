const updateMarkdown = require('./transforms')

const docs = async () => {
  await updateMarkdown()
}

docs()
