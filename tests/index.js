
//import {test, expect} from  "@jest/globals"

import Logger from "#mod/index.mjs"

const {deb, log} = Logger({
  conf:{
    debGroups: ["first", "second", "third"],
    debLevels: [0, 10, 12],
    logLevel: 4
  },
  debGroup: "first"
})

/*
test('adds 1 + 2 to equal 3', () => {
  expect(deb(0, "deb_message", "message")).toBeInstanceOf(String)
})*/


// debs
deb(0, "deb_mess_1", {key: "val"})
deb(1, "deb_mess_2", {key: "val"})
deb(10, "deb_mess_3", {key: "val"})

// logs
log('LOG', 0, "LOG_MESS_1", "var1", 1, "VAR2", 2)
log('LOG', 1, "LOG_MESS_1", "var1", 1, "VAR2", {complex_var_2: {complex_val_2: true}})