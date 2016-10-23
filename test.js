const _ = require("underscore");

var data = [{mile: "read", step: "chapter7"},
            {mile: "read", step: "chapter11"},
            {mile: "sing", step: "ha"}]
console.log(_.groupBy(data, function(entry){ return entry.mile}))
