/**
 * Logger module.
 * @module @dnclive/logger
 */

import Deb from "#mod/deb.mjs"
import Log from "#mod/log.mjs"

export default ({conf, debGroup}) => ({
  deb: Deb({
    debGroup,
    debModule: conf.debModule,
    debGroups: conf.debGroups||[],
    debLevels: conf.debLevels||[]
  }),
  ...Log({debGroup, logLevel: conf.logLevel})
})