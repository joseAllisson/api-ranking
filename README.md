# NLW Project

## 🚀 Configuração do Ambiente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 🛠️ Passos para rodar o projeto

1. Clone o repositório:

```bash
  git clone https://github.com/joseAllisson/api-ranking.git
  cd api-ranking
```

2. Instale as dependências:

```bash
  npm install
```

3. Configure as variáveis de ambiente:

```bash
  cp .env.example .env
```

4. Execute o Docker Compose:

```bash
  docker compose up -d
```

5. Gere e aplique as migrações com Drizzle:

```bash
  npx drizzle-kit generate
  npx drizzle-kit migrate
```

6. Inicie o servidor em modo de desenvolvimento:

```bash
  npm run dev
```

7. Acesse a documentação da API:

- Via Swagger em: [http://localhost:3000/docs](http://localhost:3000/docs)
- ou
- Usando a extensão **REST Client** no arquivo `api.http`

### 📚 Scripts disponíveis

- `npm run dev` – Inicia o servidor em modo de desenvolvimento
- `npm run build` – Faz o build do projeto
- `npm run test` – Executa os testes (atualmente não configurado)

### 📦 Tecnologias Utilizadas

- Fastify
- Drizzle ORM
- TypeScript
- Docker
- Redis
