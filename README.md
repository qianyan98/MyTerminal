# MyTerminal

该项目参考[番茄大佬的react-terminal项目](https://github.com/Tomotoes/react-terminal)，适配于react 17.x



可fork用作学习使用，也可以直接下载：

```bash
npm -i makiru-terminal
```

使用方式：

```javascript
import MyTerminal from 'makiru-terminal'
import staticList from './commands/static'
import dynamicList from './commands/dynamic'

const cmd = {
  dynamicList,
  staticList
}

const config = {
  prompt: '➜  ~ ',
  version: '1.0.0',
  initialDirectory: 'makiru の 主页',
  bootCmd: 'intro'
}

function App() {
   return <MyTerminal cmd={cmd} config={config} />
}

export default App;

```

static与dynamic可以参考[番茄大佬](https://github.com/Tomotoes/react-terminal)或者本仓库中的.

注意，本仓库仅为makiru-terminal组件的源码，学习使用，无其他任何作用，或者可以自己将这份代码修改后上传至npm作为包使用，其实大可不必，直接使用我的或者番茄大佬的包即可，包的使用需要在创建的react-app项目中仿照上述代码使用。
