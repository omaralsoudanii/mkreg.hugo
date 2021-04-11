# MK site
Credit goes to [Devin Schulz](https://devinschulz.com/) Amazing site.

You can find the license on his blog repo https://github.com/devinschulz/blog

# Tech
the site uses [Hugo](https://gohugo.io/) and [Tailwindcss](https://tailwindcss.com/) for styling.


# Installation
```shell
yarn
```

## Development mode
```shell
yarn start
```

## Production build
```shell
yarn build
```

The build will output static files in `public` folder, from there u can serve it with a web server like NGINX, or your choice of static app hosting service.

Personally i am hosting it with vercel and cloudflare for DNS resolving at https://mr.mkreg.dev/

# TODO
- Upgrade Tailwindcss and use JIT mode.
- Replace the demo content.
- Add some API calls for views / contact etc...
- Enhance SEO
