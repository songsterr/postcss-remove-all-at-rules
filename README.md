# PostCSS Remove All At-Rules

[PostCSS] plugin to remove all of the at-rules.

![version](https://img.shields.io/npm/v/postcss-remove-all-at-rules?style=flat-square)
![node-current](https://img.shields.io/node/v/postcss-remove-all-at-rules?style=flat-square)
![npm](https://img.shields.io/npm/dt/postcss-remove-all-at-rules?style=flat-square)
![licence](https://img.shields.io/npm/l/postcss-remove-all-at-rules?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/postcss-remove-all-at-rules?style=flat-square)


[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}

@media print {
  .bar {
  }
}

@-moz-document {
  .baz {
  }
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-remove-all-at-rules'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
