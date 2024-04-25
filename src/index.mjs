/**
 * Logger module.
 * @module @dnclive/logger
 */

import Deb from "#mod/deb.mjs"
import Log from "#mod/log.mjs"

export default ({conf, debGroup}) => ({
  deb: Deb({
    debGroup,
    debGroups: conf.debGroups||[],
    debLevels: conf.debLevels||[]
  }),
  ...Log({logLevel: conf.logLevel})
})