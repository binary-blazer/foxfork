# Branding your browser

Before you ship your browser, you will want to include your own branding, rather than just using Mozilla's template branding. FoxFork will automatically generate branding once you configure it correctly.

## Creating a brand

You will first need to add a `brands` key within your `foxfork.json`. For example:

```json
{
  ...
  "brands": {
    "stable": {
      "backgroundColor": "#2B2A33",
      "brandShorterName": "FoxFork",
      "brandShortName": "FoxFork Browser",
      "brandFullName": "FoxFork Browser"
    }
  },
  ...
}
```

More information regarding the available keys for this config object can be found in the [reference section](https://foxfork.binaryblazer.me/reference/config/#brands).

You will then need to create the folder `config/branding/<brand_name>`. In here, you will need to add a high-resolution `logo.png` (which will then be downscaled on import) and a `MacOSInstaller.svg` file, which will be used as the background for the macOS dmg file.

When you add or change a brand, you will need to reimport your changes and specify the brand to target using `foxfork set brand`.

## Specifying which brand to target

You can specify the brand that you want to build for using the `foxfork set brand <brand_name>` command. For example:

```sh
foxfork set brand stable
```

Note that once you have set a new brand, you will need to rebuild your browser for changes to take effect:

```sh
foxfork build
```
