# grommet v2 regression issue project

1. `npm install`
2. `npm run start`
3. Enter some text into the TextInput control results in a crash

![trace log](https://github.com/atanasster/grommet-contexts-issue/blob/master/images/crash-trace.jpg?raw=true "Sample app")



## reverse versions

you can use `package-2.0.0.json`, which downgrades grommet to 2.0.0:

```
    "grommet": "2.0.0",
    "grommet-icons": "^3.0.0",

```

the issue will not happen

# first version with issue

```
   "grommet": "2.1.0",
```   


