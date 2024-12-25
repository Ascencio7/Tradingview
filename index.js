new TradingView.widget(
    {
        "autosize": true, // Permite ajustar el tamaño al contenedor
        "symbol": "BINANCE:BTCUSDT", // Especifica el simbolo financiero, BITCOIN frete al dolar
        "interval": "240", // Define el intervalo del gráfico, en este caso 240 minutos, 4 horas
        "timezzone": "Etc/Utc", // Especifica la zona horaria del gráfico
        "theme": "dark", // Es el tema para el gráfico
        "style": "1", // Indica el estilo del gráfico, barras, velas japonesas
        "locale": "es", // Es el idioma
        "toolbar_bg": "#f1f3f6", // Define el color de fondo de la barra de herramientas del widget
        "enable_publishing": true, // Permite a los usuarios publicar gráficos o ideas del trading
        "withdateranges": false, // Especifica si se deben mostrar rangos de fechas prdefinidos en el gráfico
        "hide_side_toolbar": true, // Oculta la barra lateral del widget
        "allow_symbol_change": true, // Permite a los usuarios cambiar entre diferentes simbolos
        "watchlist": [ // Lista de símbolos predefinidos que estarán disponibles para selección rápida
            "BINANCE:BTCUSDT",
            "BINANCE:ETHUSDT"
        ],
        "details": true, // Muestra detalles adicionales del activo seleccionado
        "hotlist": true, // Activa una lista de los activos más populares
        "calendar": true, // Muestra el calendario de eventos económicos
        "studies": [ // Aplica estudios técnicos, como medias móviles simples
            "STD;SMA"
        ],
        "container_id": "chart", // Especifica el id del contenedor HTML donde se va a mostrar el widget
        "show_popup_button": true, // Agrega el botón para abrir el gráfico en un pop-up
        "popup_width": "1000", // Define el ancho del pop-up
        "popup_height": "650" // Define la altura del pop-up
    }
);