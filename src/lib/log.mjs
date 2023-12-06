/**
 * Simple log mod
 * @module
 */


/**
 * Init debug for calling module
 * @returns {(function(...[*]): void)|*}    console log function
 * @param args                              complex arg
 */

export default ({logLevel}) => {
    return (...params) => {
        const type = params.shift()
        const level = typeof params[0] === 'number' ? params.shift() : 0
        //console.log("deb.log", type, level, params, params.length)
        if (logLevel && logLevel>=level || level<0) {
            console.info()
            console.info(`*** ${type}.${level}: ${params.shift()}`)
            for (let i=0; i<=params.length/2; i+=2) {
              //console.log("deb.log.2", params, params.length, i)
              if (params.length===i) return
              if (typeof params[i+1] === "object" || Array.isArray(params[i+1])) {
                console.info(`    ${params[i]}: `)
                console.info(
                  params.length>i+1? JSON.stringify(params[i+1], null, 4): '')
              } else {
                console.info(`    ${params[i]}: `,
                  params.length>i+1?params[i+1]: '')
              }

            }
        }
    }
}
