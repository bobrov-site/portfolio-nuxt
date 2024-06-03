export default eventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    return 'hello world'
    // https://developers.sber.ru/docs/ru/gigachat/individuals-quickstart
    // https://developers.sber.ru/studio/workspaces/2631bfa0-2e24-4d84-a7cf-d0d1d571afda/gigachat-api/projects/87fe6587-01e6-40f5-b1b8-3b564ddfe261/parameters
})