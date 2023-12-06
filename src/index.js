
import Deb from "./lib/deb.mjs"
import Log from "./lib/log.mjs"

export default ({conf, debGroup}) => ({
  deb: Deb({
    debGroup,
    debGroups: conf.debGroups||[],
    levels: conf.levels||[]
  }),
  log: Log({logLevel: conf.logLevel})
})