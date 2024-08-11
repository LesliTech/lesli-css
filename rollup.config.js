/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import scss from "rollup-plugin-scss";


// · 
const elements = {
    input: "source/elements/index.js",
    output: [{
        format: "esm",
        file: "dist/elements.mjs",
    }, {
        format: "cjs",
        file: "dist/elements.cjs",
    }],
    plugins: [
        vue(),
        scss({ fileName: "elements.css" }),
        peerDepsExternal()
    ],
    external: ["vue", "vue-router", "v-calendar"]
}


// · 
const composables = {
    input: "source/composables/index.js",
    output: [{
        format: "esm",
        file: "dist/composables.mjs"
    }, {
        format: "cjs",
        file: "dist/composables.cjs"
    }],
    plugins: [
        vue(),
        peerDepsExternal(),
        scss({ fileName: "composables.css" }),
        commonjs()
    ],
    external: ["axios", "dayjs", "dayjs/plugin/utc.js", "dayjs/plugin/timezone.js"]
}


// · 
const components = {
    input: "source/components/index.js",
    output: [{
        format: "esm",
        file: "dist/components.mjs"
    }, {
        format: "cjs",
        file: "dist/components.cjs"
    }],
    plugins: [
        vue(), 
        peerDepsExternal(),
        scss({ fileName: "components.css" }),
    ],
    external: ["vue", "apexcharts", "trix"]
}


// · 
export default [elements, components, composables]
