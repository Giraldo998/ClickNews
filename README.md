# ClickNews

ClickNews es una página web básica enfocada en proporcionar noticias con distintos focos y temas de interés. <br/>
Esta web fue creada utilizando React con Vite como compilador y emplea [News API](https://rapidapi.com/bonaipowered/api/news-api14) para proporcionar la información en tiempo real.

### Características
- Página principal con una selección de temas y categorías por defecto.
- Navegación entre noticias sugeridas relacionadas con los temas consultados.
- Búsqueda por artículos o palabras clave específicas.
- Interfaz intuitiva, rápida y responsive. 

### Tecnologías y herramientas utilizadas
- React + Vite: Desarrollo moderno y rápido.
- React Router: Para la navegación entre distintas vistas y secciones.
- Redux: Para el manejo global del estado de la aplicación.
- RTK Query: Integración avanzada y eficiente con la API de noticias.
- News API: Proveedor de los datos de noticias, mediante integración vía RapidAPI.

### Instalación y ejecución

1. Clona el repositorio:
   ```bash
   https://github.com/Giraldo998/ClickNews.git
   
2. Instala las dependencias:
   ```bash
   yarn install

3. Crea un archivo .env y agrega tus credenciales:
   ```bash
   VITE_API_URL=la_url_de_la_api
   VITE_API_KEY=tu_clave_de_api
   VITE_API_HOST=el_host_de_la_api
   VITE_API_NAME_KEY=nombre_del_campo_para_la_api_key
   VITE_API_NAME_HOST=nombre_del_campo_para_el_host

### Estado del Proyecto
Actualmente en desarrollo. Se planea implementar más características y funcionalidades próximamente.

### Licencia
Este proyecto está bajo la Licencia MIT.
