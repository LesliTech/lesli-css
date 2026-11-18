import { describe, expect, it } from "vitest";
import { compileString } from "sass";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const names = ["info", "success", "warning", "danger"];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const compiled = compileString(`
    @use "scss/colors/color";
    :root {
        @each $name in info, success, warning, danger {
            @each $shade in 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 {
                --lesli-color-#{$name}-#{$shade}: #{color.lesli-color($name, $shade)};
            }
        }
    }
`, { loadPaths: [process.cwd()] }).css;

function tokens(css) {
    return Object.fromEntries([...css.matchAll(/--lesli-color-([\w-]+):\s*(#[\da-f]{6});/ig)]
        .map(([, name, hex]) => [name, hex.toUpperCase()]));
}

const colors = tokens(compiled);
const generated = tokens(readFileSync(resolve("css/colors.css"), "utf8"));

function luminance(hex) {
    return [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255)
        .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
        .reduce((total, value, index) => total + value * [0.2126, 0.7152, 0.0722][index], 0);
}

function contrast(first, second) {
    const a = luminance(first), b = luminance(second);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

describe.each(names)("%s semantic palette", name => {
    it("darkens progressively across the complete scale", () => {
        shades.slice(1).forEach((shade, index) => {
            expect(luminance(colors[`${name}-${shade}`]))
                .toBeLessThan(luminance(colors[`${name}-${shades[index]}`]));
        });
    });

    it("keeps default and hover labels readable", () => {
        const foreground = name === "warning" ? colors["warning-900"] : "#FFFFFF";
        for (const shade of [500, 600]) {
            expect(contrast(colors[`${name}-${shade}`], foreground)).toBeGreaterThanOrEqual(4.5);
        }
        expect(contrast(colors[`${name}-50`], colors[`${name}-900`])).toBeGreaterThanOrEqual(4.5);
        expect(contrast(colors[`${name}-100`], colors[`${name}-700`])).toBeGreaterThanOrEqual(4.5);
    });

    it("ships CSS variables that match the Sass palette", () => {
        shades.forEach(shade => {
            expect(generated[`${name}-${shade}`]).toBe(colors[`${name}-${shade}`]);
        });
    });
});
