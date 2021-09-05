const Forms = require('../models/Forms')

module.exports = {
    async index(req, res) {
        const result = await Forms.findAll();

        return res.json(result);
    },
    async indexById(req, res) {
        const {id} = req.params;

        const result = await Forms.findByPk(id);

        return res.json(result);
    },
    async store(req, res) {

        const {qual_curso, nome_orientador, link_curriculo, data_latte, ultimo_relatorio, ultimo_semestre, disciplinas_obrigatorias, disciplinas_optativas, conceitos_disciplinas, optativas_aprovadas, congresso_exterior, congresso_interior, estagio_pesquisa, disciplinas_reprovadas_mestrado, disciplinas_reprovadas_curso, exame_idiomas, exame_qualificado, limite_qualificacao, artigos_aceitos, artigos_aguardando, artigos_preparacao, estagio_pesquisa_exterior, declarar_ccp, comentarios_orientando} = req.body;

        const result = await Forms.create({qual_curso, nome_orientador, link_curriculo, data_latte, ultimo_relatorio, ultimo_semestre, disciplinas_obrigatorias, disciplinas_optativas, conceitos_disciplinas, optativas_aprovadas, congresso_exterior, congresso_interior, estagio_pesquisa, disciplinas_reprovadas_mestrado, disciplinas_reprovadas_curso, exame_idiomas, exame_qualificado, limite_qualificacao, artigos_aceitos, artigos_aguardando, artigos_preparacao, estagio_pesquisa_exterior, declarar_ccp, comentarios_orientando});

        return res.json(result);
    },
    async edit(req, res) {
        const {id} = req.params;
        const{qual_curso, nome_orientador, link_curriculo, data_latte, ultimo_relatorio, ultimo_semestre, disciplinas_obrigatorias, disciplinas_optativas, conceitos_disciplinas, optativas_aprovadas, congresso_exterior, congresso_interior, estagio_pesquisa, disciplinas_reprovadas_mestrado, disciplinas_reprovadas_curso, exame_idiomas, exame_qualificado, limite_qualificacao, artigos_aceitos, artigos_aguardando, artigos_preparacao, estagio_pesquisa_exterior, declarar_ccp, comentarios_orientando} = req.body;
        
        const result = await Forms.findByPk(id);

        const afterUpdate = await result.update({qual_curso, nome_orientador, link_curriculo, data_latte, ultimo_relatorio, ultimo_semestre, disciplinas_obrigatorias, disciplinas_optativas, conceitos_disciplinas, optativas_aprovadas, congresso_exterior, congresso_interior, estagio_pesquisa, disciplinas_reprovadas_mestrado, disciplinas_reprovadas_curso, exame_idiomas, exame_qualificado, limite_qualificacao, artigos_aceitos, artigos_aguardando, artigos_preparacao, estagio_pesquisa_exterior, declarar_ccp, comentarios_orientando});

        return res.json(afterUpdate);


    },
    async delete(req, res) {
        const {id} = req.params;

        const result = await Forms.findByPk(id);

        await result.destroy(result);

        return res.json();
    }
}