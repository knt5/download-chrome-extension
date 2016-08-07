# download-chrome-extension

A Chrome extension to generate download script

## Setup

Replace ```TARGET_SITE_URL_PREFIX``` to a URL prefix of your target site in ```js/config.js```.

```
const config = {
	url: 'http://TARGET_SITE_URL_PREFIX/'
};
```

## Usage

Install the extension (Access to chrome://extensions/)

![install](img/guide/install.png)

Click the green arrow

![usage 1](img/guide/usage1.png)

Select and copy generated script

![usage 2](img/guide/usage2.png)

And paste to Terminal.app
