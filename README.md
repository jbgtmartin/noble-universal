## noble-universal

This package simply checks for the platform and exports different versions of [`noble`](https://github.com/noble/noble):
* [`noble-mac`](https://github.com/Timeular/noble-mac) on MacOS.
* [`noble-uwp`](https://github.com/jasongin/noble-uwp) otherwise.

Just import the package using `import * as noble from 'noble-universal'`, and use it like regular `noble`.