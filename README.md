# Movies-Explorer

Фронтенд дипломного проекта «Movies explorer» в рамках курса "Вэб-разработчик" Яндекс Практикума.

Приложение, взаимодействующее с написанным на предыдущем этапе бэкендом и открытым API фестиваля «Beat Film»,
предоставленным Практикумом.
***

###  Описание ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
Movies-Explorer - cервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете**.

  ** `проект прошел код-ревью`

### Структура и функционал ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
1. Сайт состоит из нескольких страниц:

```/ ``` - главная страница. Содержит информацию о выполненном проекте.

```/movies ``` - страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска.

```/saved-movies ``` - страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.

```/signup ``` - страница регистрации. Позволяет пользователю зарегистрировать аккаунт.

```/signin ``` - страница авторизации. На ней пользователь может войти в систему.

```/profile ```— страница редактирования профиля. Пользователь может изменить данные своего аккаунта.

2. Функционал:

* регистрация и авторизация пользователей
* сохранение/удаление фильмов в личном кабинете;
* редактирование личных данных
* обработка запросов на внешние API

### Технологии ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
* HTML5
* Файловая структура по БЭМ
* CSS Grid Layout, Flexbox;
* normalize.css
* @media-запросы для различных разрешений экрана
* Java Script
* React
* Хуки (useState, useEffect, useContext)
* Кастомные хуки (валидация форм, получение ширины экрана)
* React Router
* Защищенные роуты
* Local Storage: хранение JWT-токена и параметров поиска
* контроль версий в Git с использованием веток

### Инструкция ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
Клонировать проект, установить зависимости, старт приложения:
```
git clone https://github.com/Natali-Vorobeva/movies-explorer-frontend.git
cd movies-explorer-frontend
npm install
npm run start
```
Открыть в браузере http://localhost:3000


### Системные требования ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
Для запуска потребуется Node.js версии 6.14



### Ссылки ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)

[Репозиторий с бэкендом с предыдущего этапа дипломной работы](https://github.com/Natali-Vorobeva/movies-explorer-api)


***
***
***
