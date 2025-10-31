# Pilops Backend

API para gerenciamento de voos da Pilops Academy.  
Permite listar voos, buscar por ID, e calcular saldo total acumulado por aeronave.

---

## Tecnologias

- Node.js
- TypeScript
- Express
- Joi (validação de dados)
- http-status
- Nodemon (desenvolvimento)
- Thunder Client (testes)

---

## Estrutura do Projeto

src/
├─ controllers/
├─ errors/
├─ middlewares/
├─ protocols/
├─ repositories/
├─ routers/
├─ services/
├─ schemas/
├─ app.ts
└─ server.ts
data/
└─ flightHistory.json

- **controllers/**: define a lógica das rotas.
- **services/**: regras de negócio.
- **repositories/**: acesso aos dados.
- **middlewares/**: validação e tratamento de erros.
- **protocols/**: tipagens TypeScript.
- **data/flightHistory.json**: dados de voos simulados.

---

## Pré-requisitos

- Node.js >= 18.x
- NPM ou Yarn

---

## Instalação

1. Clonar o repositório:
bash
git clone <REPO_URL>

2. Entrar na pasta do projeto:
cd pilops-backend

3. Instalar dependências:
npm install

## Rodando o servidor

npm run dev

---

## Endpoints

1. Health Check
GET /health

Retorna uma mensagem de status da API.

## Listar todos os voos
GET /flights

Retorna uma lista com todos os voos cadastrados.

## Buscar voo por ID
GET /flights/:id

Retorna os detalhes de um voo específico.

## Calcular saldo total por aeronave
GET /flights/total-balance/aircraft?field=<name|registration|airline>&value=<valor>

Retorna o saldo total acumulado filtrando pelo campo especificado (nome, registro ou companhia aérea).

---

## Testando

Use o Thunder Client ou Postman para testar os endpoints.
Exemplo para saldo total por aeronave:

http://localhost:3000/flights/total-balance/aircraft?field=name&value=Cessna%20172%20G1000

---

## Tratamento de Erros

Se não houver voos ou voo não encontrado → 404 Not Found

Se parâmetros de query inválidos → 400 Bad Request

Outros erros internos → 500 Internal Server Error

---

Desenvolvido por Mateus
