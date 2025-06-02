# WOL Web

在网页上唤醒你的计算机

## 优点

1. 密码是 sha256 后传输，十分安全
2. 有 https 加密，十分安全
3. 浏览器兼容性好
4. 首屏打开速度快

## 使用方法

1. 克隆本项目到本地
   ```bash
   git clone https://github.com/share121/wol-web.git
   cd wol-web
   ```
2. 安装 [Deno](https://deno.com/)
3. 修改配置，把 `config.example.json` 重命名为 `config.json`，并修改其中的配置
   ```bash
   mv config.example.json config.json
   ```
4. 启动项目
   ```bash
   deno task serve
   ```
5. 打开浏览器，访问 `http://localhost:<端口号>`，即可使用
