# COLABUCO

## Como colaborar no projeto?

Após clonar o repositório, crie um arquivo .env na pasta principal do projeto, e insira a url de conexão com o banco de dados do supabase (link no chat da equipe)

No terminal do VS Code, digite o seguinte comando para realizar a conexão do cliente prisma com o banco de dados:

```npm
npx prisma generate
```
Após isso, digite: 

```npm
npm start
```
Ao finalizar suas modificações nos Models do arquivo `schema.prisma`, digite o comando:

```npm
npx prisma migrate dev --name (nome da modificação)
```

## Autores:
- Ana Carolyne Costa
- Iale Almeida
- Lorenzo Leão
- Luis Manoel Silvestre
- Nicholas Bergqvist
- Rafael Figueirôa
