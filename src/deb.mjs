/**
 * Simple debug mod
 * @module
 */

/**
 * Debuggable groups
 * @type {string[]}
 */

//import {debGroups, levels} from "../app.conf.mjs"

export const isDebug = process.env.NODE_ENV!=='production'
/**
 * Init debug for calling module
 * @param {{debGroup: string}} args                      complex arguments
 * @param {string} args.url                              url of debuggable module
 * @param {string} args.debGroup                         debug group
 * @returns {(function(...[*]): void)|*}                 console log function
 */

export default ({
  url,
  debModule='',
  debGroup,
  debGroups,
  debLevels
}) => {
    //if (args === undefined) args = {}
    //const url = args.url
    //const debGroup = args.debGroup
    //const filename =
    //    url !== undefined ? new URL(url).pathname.split('/').pop() : undefined

    //console.log(debModule, debGroup, debGroups, debLevels)
    return (...params) => {
        if (!isDebug) return
        const level = typeof params[0] === 'number' ? params.shift() : 0
        //console.log("deb.log", level)
        // if log debug group is debugging
        // and log have level index and debugging index not specified
        //console.log(level, isDebug, params, debGroups.indexOf(debGroup), (debLevels.length !== 0 ? debLevels : [0]).indexOf(level), (debLevels.length !== 0 ? debLevels : [0]))
        if (
            debGroups.indexOf(debGroup) > -1 &&
            (debLevels.length !== 0 ? debLevels : [0]).indexOf(level) > -1
        ) {
            console.info('\n ')
            //if (filename !== undefined) console.info(`${filename}`)
            console.info(`*** ${debModule}.${debGroup}.${level} ***`)
            params.forEach((param) => {
                console.info(param)
            });
        }
    };
};
