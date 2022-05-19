# avuxi
### install

```
npm i --save descuentocity/avuxi
```

### usage

```js
import Vue from 'vue'
import avuxi from 'avuxi'

Vue.use(avuxi)
```

```html
<!-- include Leaflet script -->
<!-- include configuration script from https://admin.avuxi.com -->

<avuxi-map
  confId='5ae6df87a93f4e1e02a6122a'
  lat='41.38605'
  lng='2.17014'
  zoom='13'
>
</avuxi-map>

<avuxi-lse
  confId='5ae6e03da93f4e1e02a6122b'
  lat='41.390847'
  lng='2.16902'
>
</avuxi-lse>
```