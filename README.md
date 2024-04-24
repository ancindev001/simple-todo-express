## Simple Todo

Aplikasi simple todo Menggunakan Express JS

## Library yang digunakan

- sequelize - ORM
- body-parser - untuk parsing form data
- cors
- compression
- helmet

## Instalasi

```bash
git clone https://github.com/ancindev001/simple-todo-express
cd simple-todo-express
yarn # atau npm install
yarn dev
```

## API Endpoint

| METHOD   | ENDPOINT    | KETERANGAN                             |
| -------- | ----------- | -------------------------------------- |
| `GET`    | `/todos`    | mendapatkan semua todo                 |
| `GET`    | `/todos/id` | mendapatkan sebuah todo berdasarkan id |
| `POST`   | `/todos`    | membuat todos                          |
| `PUT`    | `/todos/id` | update todo                            |
| `DELETE` | `/todos/1`  | menghapus todo                         |
