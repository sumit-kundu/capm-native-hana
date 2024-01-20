const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {
    const db = cds.connect.to('db')

    this.on('sleep', async () => {
    try {
        let dbQuery = ' Call "sleep"( )'
        let result = await cds.run(dbQuery, { })
        cds.log().info(result)
        return true
    } catch (error) {
        cds.log().error(error)
        return false
    }
    })

    this.on('addInteraction', async () => {
        try {
            let dbQuery = ' Call "createRecord"(results => ? )'
            let result = await cds.run(dbQuery, { })
            cds.log().info(result)
            return true
        } catch (error) {
            cds.log().error(error)
            return false
        }
        })
    
})
