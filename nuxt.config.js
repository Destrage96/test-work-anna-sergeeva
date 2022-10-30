export default {
    components: true,

    buildModules:
        [
            "@nuxtjs/tailwindcss"
        ],

    axios:
        {
            proxy: true,
            retry: false,
            baseURL: 'http://localhost:3000',
        },

    proxy: {
        '/api': {
            target: 'https://www.cbr-xml-daily.ru',
            pathRewrite: {
                '^/api' : '/'
            }
        }
    },

    head:
        {
            title: "Тестовая работа Nuxt/Vue",
            htmlAttrs:
                {
                    lang: "ru"
                },
            meta:
                [
                    {charset: "utf-8"},
                    {name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1"},
                    {hid: "description", name: "description", content: ""},
                    {name: "format-detection", content: "telephone=no"}
                ]
        },

    modules:
        [
            "@nuxtjs/proxy",
            "@nuxtjs/axios",
            "@nuxtjs/router-extras"
        ],

    css:
        [
            "@/assets/css/tailwind.css"
        ],
}

