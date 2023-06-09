# Бэкенд проекта Movies Explorer

В данной части реализуется бэкенд часть проекта для сервиса кинофильмов. 

## Описание и функционал 

Здесь реализовано создание сервера на express.js с использование СУБД MongoDB. 
Приложение корректно обрабатывает запросы по следующим роутам: 
- GET /users/me возвращает информацию о пользователе (email и имя);
- PATCH /users/me обновляет информацию о пользователе;
- GET /movies возвращает все сохранённые пользователем фильмы;
- POST /movies создаёт фильм с переданными в теле данными;
- DELETE /movies/_id удаляет сохранённый фильм по _id;
> Все предыдущие роуты защищены авторизацией
- POST /signup создаёт пользователя с переданными в теле данными;
- POST /signin возвращает JWT, если в теле запроса переданы правильные почта и пароль.

### Остальные функции:
1. При регистрации пароль пользователя хешируется, API не возвращает хеш клиенту.
2. Все запросы валидируются перед передачей их контроллерам.
3. Настроено логирование.

Также сервер корректно реагирует на неправильные запросы, централизованно обрабатывает ошибки и при возникновении таковой возвращает соответствующие сообщение и статус.

## Стек технологий 

В приложении были использованы следующие технологии: 
- Программная платформа Node.js
- Фреймворк express.js 
- СУБД MongoDB в связке с ODM (Object Document Mapper) "Mongoose"

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и фильма   
`/models` — папка с файлами описания схем пользователя и фильма  

Остальные директории вспомогательные

## Ссылки на проект:

- Публичный IP: 84.201.135.206
- Ссылка на бэкенд сервера: http://api.movies-exporer.nomoredomains.rocks
