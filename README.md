# Contacts API

## ✅ Requisitos para execução

Antes de começar, certifique-se de ter os seguintes softwares instalados no seu computador:

-   [Node.js](https://nodejs.org) (v18 ou superior)
-   [MySQL Server](https://dev.mysql.com/downloads/mysql/) instalado e em execução
-   [Git](https://git-scm.com/) (opcional)

### ⚠️ Instalando o MySQL

Se você ainda **não tem o MySQL instalado**, siga os passos abaixo:

1. Acesse o site oficial: [Download MySQL](https://dev.mysql.com/downloads/mysql/)
2. Baixe o instalador compatível com seu sistema operacional (Windows, macOS ou Linux)
3. Durante a instalação:
    - Crie um usuário administrador (`root`) e defina uma senha
    - Deixe o MySQL configurado para iniciar automaticamente com o sistema (recomendado)

Após a instalação, o servidor MySQL precisa estar ativo sempre que você for rodar esta API.

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

### 3. Configure o ambiente

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_do_mysql
DB_NAME=contacts
PORT=3000
```

**Atenção:** Substitua `sua_senha_do_mysql` pela senha definida durante a instalação do MySQL.

---

## 🛠 Conexão com o banco de dados

-   O sistema se conecta automaticamente ao servidor MySQL usando as variáveis de ambiente.
-   Se o banco `contacts` ainda não existir, ele será criado ao rodar a aplicação.
-   Também será criada automaticamente a tabela `contacts` com os campos `name` e `phone`.

---

## ▶️ Executando a aplicação

```bash
npm run dev
```

Se estiver tudo certo, você verá no terminal:

```
Servidor rodando na porta 3000
```

---

## 🔍 Endpoints disponíveis

| Método | Rota            | Descrição                   |
| ------ | --------------- | --------------------------- |
| GET    | `/contacts`     | Lista todos os contatos     |
| POST   | `/contacts`     | Cria um novo contato        |
| PATCH  | `/contacts/:id` | Atualiza um contato pelo ID |
| DELETE | `/contacts/:id` | Remove um contato pelo ID   |

### Exemplo de JSON para POST ou PATCH:

```json
{
	"name": "João Silva",
	"phone": "11999999999"
}
```

---

## 🧪 Testando com Postman ou Insomnia

Você pode testar os endpoints utilizando ferramentas como:

-   [Postman](https://www.postman.com/)
-   [Insomnia](https://insomnia.rest/)
