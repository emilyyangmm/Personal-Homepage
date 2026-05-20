# 杨文新个人主页

高级作品发布会式求职主页，面向 AI 项目经理 / AI 产品经理岗位。

## 本地运行

```bash
npm.cmd install
npm.cmd run dev
```

## 构建

```bash
npm.cmd run build
```

## Cloudflare Web Analytics

部署到 Cloudflare Pages 后，在 Cloudflare 后台开启 Web Analytics，并把官方提供的统计脚本加入页面即可。

当前项目也预留了环境变量：

```bash
VITE_CF_ANALYTICS_TOKEN=你的_token
```

如果设置该变量，页面会自动插入 Cloudflare Web Analytics 脚本。
