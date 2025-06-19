# Contacts API

## ✅ O que você precisa para rodar

-   Node.js (v18 ou superior) – https://nodejs.org
-   MySQL Server instalado e em execução
-   Git (opcional)

---

## 📁 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Gustavo-DSN/processo-seletivo-portLouis.git
cd processo-seletivo-portLouis
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` com o seguinte conteúdo:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_do_mysql
DB_NAME=contacts
PORT=3000
```

Substitua `sua_senha_do_mysql` pela senha do seu MySQL.

### 4. Rode a aplicação

```bash
npm run dev
```

Você verá algo como:

```
Servidor rodando na porta 3000
```

---

## 🛠 O que o sistema faz

-   Cria automaticamente o banco de dados `contacts` se não existir.
-   Cria a tabela `contacts` com os campos `name` e `phone`.
-   Realiza todas as validações de entrada.

---

## 🔍 Endpoints disponíveis

| Método | Rota            | Descrição                   |
| ------ | --------------- | --------------------------- |
| GET    | `/contacts`     | Lista todos os contatos     |
| POST   | `/contacts`     | Cria um novo contato        |
| PATCH  | `/contacts/:id` | Atualiza um contato pelo ID |
| DELETE | `/contacts/:id` | Remove um contato pelo ID   |

### Exemplo de body para POST ou PATCH:

```json
{
	"name": "João Silva",
	"phone": "11999999999"
}
```

---

## 🧪 Teste com Postman ou Insomnia

Você pode testar os endpoints usando ferramentas como:

-   [Postman](https://www.postman.com/)
-   [Insomnia](https://insomnia.rest/)

---
