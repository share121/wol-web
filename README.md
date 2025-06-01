# WOL Web

在网页上唤醒你的电脑

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
   1. `macAddress` 字段为你的电脑的 MAC 地址，
   2. 把你的密码使用 sha256 加密后填入 `passwordWithSha256` 字段
4. 编译项目
   ```bash
   deno task build
   ```
5. 启动项目
   ```bash
   deno task preview
   ```
6. 打开浏览器，访问 `http://localhost:<端口号>`，即可使用
