module.exports.initChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('name','Nome deve ser preenchido.').notEmpty();
    req.assert('name','Nome deve ter entre 3 a 25 caracteres').len(3, 25);

    var errors = req.validationErrors();

    if(errors){
        res.render('index', {validacao: errors});
        return;
    }

    res.render('chat');
}