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

LesliCSS - SCSS Utilities for websites, apps and web applications

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import { describe, it } from "vitest";


// · 
const path = require("path")
const glob = require("glob")
const sassTrue = require("sass-true")


// · 
describe("RUNNING SASS TESTS", () => {

    // Find all of the Sass files that end in `*.spec.scss` in any directory of this project.
    // I use path.resolve because True requires absolute paths to compile test files.
    const sassTestFiles = glob.sync(path.resolve(process.cwd(), "tests/**/*.spec.scss"))

    // Run True on every file found with the describe and it methods provided
    sassTestFiles.forEach(file => sassTrue.runSass({ describe, it }, file))

})
