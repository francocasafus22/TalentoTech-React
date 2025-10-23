# 🛒 Pre-Entrega React - TalentoTech - E-Commerce - +TECH

## 📚 Descripción del proyecto
Este proyecto forma parte de la formación académica del programa **TalentoTech**, dentro del módulo de **Desarrollo Frontend con React**.  
El objetivo de la pre-entrega es aplicar los conocimientos adquiridos sobre **componentización, manejo de estados, enrutamiento y Context API**, desarrollando una **Single Page Application (SPA)** con temática de e-commerce.

El proyecto simula una tienda online de productos, donde se pueden visualizar artículos de forma dinámica, acceder al detalle de cada uno y gestionar un carrito de compras persistente.

---

## 🎯 Objetivos académicos cumplidos
- Comprender la diferencia y la interacción entre **componentes presentacionales y contenedores**.  
- Abordar un proyecto de **e-commerce estructurado en componentes reutilizables**.  
- Renderizar **tarjetas de productos dinámicas** a partir de datos obtenidos mediante *fetch*.  
- Desarrollar una **SPA** con componentes separados, incluyendo *Header*, *Footer* y secciones principales.  
- Implementar **rutas estáticas** utilizando *React Router*.  
- Emplear los hooks fundamentales: **useState, useEffect y useContext**.  
- Implementar un **carrito de compras** con *Context API* para manejar su estado global.

---

## ⚙️ Funcionalidades adicionales implementadas
- **Persistencia del carrito** en *localStorage* para mantener el estado entre recargas.  
- **Desacoplamiento de la lógica de datos** mediante un servicio independiente (`ProductService.js`).  
- **Separación de responsabilidades**, organizando los componentes por rol (*presentacional*, *contenedor*, *contexto*, *servicio*, *layout*).  
- Inclusión de un componente **ScrollToTop** para mejorar la experiencia de navegación.

---

## 🧱 Arquitectura y tecnologías aplicadas
- **React 18+ (Vite)** – Framework principal.  
- **React Router DOM** – Gestión de rutas y navegación.  
- **Context API + Custom Hooks** – Estado global del carrito.  
- **Async/Await + Servicios desacoplados** – Manejo de datos externos.  
- **LocalStorage API** – Persistencia de datos.  
- **CSS modularizado** – Estilos independientes por componente.  

La aplicación está estructurada bajo el patrón **container/presentational**, complementado con un sistema de **layouts** y **providers** que gestionan la composición raíz del proyecto.

---

## 📂 Estructura general del proyecto
```
src/
 ├─ App.jsx
 ├─ main.jsx
 ├─ assets/
 ├─ components/
 ├─ containers/
 ├─ contexts/
 ├─ layouts/
 ├─ pages/
 ├─ providers/
 └─ Services/
```

---

## 🌐 Hosting
El proyecto se encuentra desplegado en **Netlify**:  
👉 **[Ir al proyecto](https://mastechshop.netlify.app/)**  

---

## 🧑‍💻 Autoría
Proyecto académico desarrollado por **Franco Casafus**,  
como parte del curso *TalentoTech - Desarrollo Frontend con React*.

---

## 🏫 Institución
**TalentoTech**  
Programa de formación tecnológica orientado al desarrollo de habilidades digitales y empleabilidad en tecnología.
