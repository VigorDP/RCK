### 简介

使用的是 [light-toast](https://github.com/xinkule/light-toast)

### API

```js
Toast.info(content, duration, onClose);
Toast.success(content, duration, onClose);
Toast.fail(content, duration, onClose);
Toast.loading(content, onClose);
Toast.hide();
```

| param    | detail                                    | type     | default |
| -------- | ----------------------------------------- | -------- | ------- |
| content  | toast message                             | string   |         |
| duration | milliseconds delay to close               | number   | 3000    |
| onClose  | callback function after closing the toast | function |         |
