//importat dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando a biblioteca express
const server = express()


server
// Utilizando arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas
.get('/', pages.index)
.get('/cadastro-admin', pages.cadastroAdmin)
.get('/cadastro-turma', pages.cadastroTurma)
.get('/cadastro-usuario', pages.cadastroUsuario)
.get('/calendario-aulas', pages.calendarioAulas)
.get('/editar-atendimento', pages.editarAtendimento)
.get('/editar-presenca', pages.editarPesenca)
.get('/historico-atend', pages.historicoAtend)
.get('/informacoes-usuario', pages.informacoesUsuario)
.get('/login-option', pages.loginOption)
.get('/login', pages.login)
.get('/manual-usuario', pages.manualUsuario)
.get('/perfil-admin', pages.perfilAdmin)
.get('/perfil-aluno', pages.perfilAluno)
.get('/presencas', pages.presencas)
.get('/reportar-falta', pages.reportarFalta)
.get('/lista-usuario', pages.listaUsuario)







//ligar servidor
server.listen(5500)