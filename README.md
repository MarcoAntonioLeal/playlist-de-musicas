# 🎵 API de Playlists de Músicas

Projeto de API REST para gerenciamento de playlists de músicas.

Desenvolvido em **Node.js + Express**, utilizando arquitetura **MVC**, e testado com **Insomnia**.

<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/414d7ae0-188a-4632-bf2c-efd171219ff1" />

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Arquitetura MVC
- Insomnia (testes de API)

---

## 📌 Regras de negócio

Uma playlist deve conter, no mínimo:

- Nome
- Lista de tags

Uma playlist pode conter músicas, onde cada música possui:

- Título
- Ano
- Álbum
- Artistas (members)

---

## 🎯 Funcionalidades

### 📚 Playlists

- Listar todas as playlists
- Buscar uma playlist por ID
- Criar playlist (com ou sem músicas)
- Atualizar nome da playlist
- Adicionar novas tags
- Excluir playlist

### 🎶 Músicas

- Adicionar música em uma playlist
- Remover música de uma playlist

---

## 🧱 Estrutura do projeto (MVC)

/controllers
playlistController.js

/models
playlistModel.js

/routes
index.js

server.js

---

## 🌐 Endpoints da API

### GET /
Retorna todas as playlists cadastradas.

---

### GET /playlist/:id
Retorna uma playlist específica pelo ID.

---

### POST /playlist
Cria uma nova playlist.

Exemplo de body:

{
  "name": "Rock",
  "tags": ["Heavy Metal"],
  "musics": [
    {
      "album": "Somewhere in Time",
      "title": "Wasted Years",
      "year": 1986,
      "member": ["Bruce Dickinson", "Adrian Smith", "Dave Murray"]
    }
  ]
}

---

### PUT /playlist/:id/name
Atualiza o nome de uma playlist.

{
  "name": "Novo Nome"
}

---

### PUT /playlist/:id/tag
Adiciona uma nova tag à playlist.

{
  "tag": "Rock Clássico"
}

---

### DELETE /playlist/:id
Remove uma playlist pelo ID.

---

### POST /playlist/:id/music
Adiciona uma música em uma playlist.

{
  "album": "Album Name",
  "title": "Music Title",
  "year": 2000,
  "member": ["Artista 1", "Artista 2"]
}

---

### DELETE /playlist/:id/music/:idMusic
Remove uma música específica da playlist.

---

## ⚙️ Como executar o projeto

npm install
node server.js

Servidor rodando em:

http://localhost:3000

---

## 🧠 Observações importantes

- Dados armazenados em memória (array)
- Não utiliza banco de dados
- IDs gerados automaticamente
- Projeto com fins educacionais
- Testado com Insomnia

---

## 📌 Status do projeto

✔ CRUD de playlists  
✔ CRUD de músicas  
✔ Arquitetura MVC  
✔ API funcional  

---

## 🚀 Possíveis melhorias futuras

- Banco de dados (MongoDB / PostgreSQL)
- Validação com Zod ou Joi
- Service layer (arquitetura mais limpa)
- Autenticação JWT
- Deploy em produção
