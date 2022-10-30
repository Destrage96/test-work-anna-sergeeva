module.exports = {
    relative: true,
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme   : {
        extend: {
            screens: {
                xs: "520px",
            },
            height: {
               '50px': '50px',
               '46px': '46px',
                330: '330px'
            },
            borderRadius: {
                '50': '50px',
                '16': '16px',
                '15': '15px',
                '5': '5px'
            },
            boxShadow: {
                '3xl': '0px 0px 20px rgba(239, 239, 239, 0.5)',
            },
            margin: {
                '30px': '30px',
            },
            listStyleType: {
                round: 'round',
            }
        },
        screens: {
            sm   : "640px",
            md   : "768px",
            lg   : "1024px",
            xl   : "1280px",
            "2xl": "1600px"
        },
        fontFamily: {
            roboto: [ "Roboto", "sans-serif" ]
        },
        fontSize: {
            10: "10px",
            12: "12px",
            13: "13px",
            14: "14px",
            15: "15px",
            16: "16px",
            17: "17px",
            18: "18px",
            20: "20px",
            22: "22px",
            24: "24px",
            26: "26px",
            28: "28px",
            30: "30px",
            32: "32px",
            34: "34px",
            36: "36px",
            40: "40px",
            50: "50px"
        },
        colors: {
            primary   : "#0F4471",
            secondary : "#EEF5FF",

            gray: "#F8F8F8",
            red: "#E02025",
            border: '#DFE1F0',
            'input-border': '#DFDFDF',

            text: {
                main: "#404456",
                dark: "#2C3A4B",
                primary: "#0F4471",
                gray: {
                    300: "#A0A3BD",
                    500: "#666666",
                    700: "#343434",
                    900: "#1C1C1C",
                    950: "#111111"
                }
            },

            background : "#FFFFFF",
            black      : "#000000",
            white      : "#FFFFFF",
            transparent: "transparent"
        },
        container: {
            center : true,
            padding: {
                DEFAULT: "1rem",
                md     : "2rem",
                xl     : "4rem",
                "2xl"  : "10rem"
            }
        }
    },
}
