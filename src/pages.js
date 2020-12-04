module.exports = {

    index(req, res){
    
            const city = req.query.city
            return res.render('index')
    },

    cadastroAdmin(req, res){
        return res.render('cadastro-admin')
        
    },

    cadastroTurma(req, res){
        return res.render('cadastro-turma')
    },

    cadastroUsuario(req, res){
        return res.render('cadastro-usuario')
    },

    calendarioAulas(req, res){
        return res.render('calendario-aulas')
    },

    editarAtendimento(req, res){
        return res.render('editar-atendimento')
    },

    editarPesenca(req, res){
        return res.render('editar-presenca')
    },

    historicoAtend(req, res){
        return res.render('historico-atend')
    },

    informacoesUsuario(req, res){
        return res.render('informacoes-usuario')
    },

    listaUsuario(req, res){
        return res.render('lista-usuario')
    },

    loginOption(req, res){
        return res.render('login-option')
    },

    login(req, res){
        return res.render('login')
    },

    manualUsuario(req, res){
        return res.render('manual-usuario')
    },

    perfilAdmin(req, res){
        return res.render('perfil-admin')
    },

    perfilAluno(req, res){
        return res.render('perfil-aluno')
    },

    presencas(req, res){
        return res.render('presencas')
    },

    reportarFalta(req, res){
        return res.render('reportar-falta')
    }
}