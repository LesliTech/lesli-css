# Changelog

## 4.2.0

### Semantic palette refresh

- Refreshed Info, Success, Warning and Danger with perceptually spaced OKLab transitions.
- Kept `500` as the default Sass variant and main solid action tone.
- Set the solid identities to Info `#087EAE`, Success `#09855E`, Warning `#F0A51B` and Danger `#D73554`.
- Tuned `600` for hover and Warning `700` for readable text on `warning-100`.
- Preserved Lesli Blue (`primary-500`, `#276AD6`), Neutral and categorical/identity palettes.
- Preserved existing token names, shade keys and Sass function signatures.
- Rebuilt portable CSS variables and added contrast, progression and generated-token consistency tests.

### Consumer migration

Update the dependency and rebuild application stylesheets. Solid semantic
actions use `500` with `600` on hover. Info, Success and Danger use white labels;
Warning uses `warning-900` labels. Badges pair `100` with `700`, and messages pair
`50` with `900`.

Consumers that adopted the interim `600` base / `700` hover recommendation should
return solid actions to `500` / `600`. Custom foregrounds and opacity still need
their own contrast checks.
