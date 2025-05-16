window.addEventListener('load', function () {

  let btnCadastroLead = document.getElementById('btn-cadastro-lead-partner')

  btnCadastroLead.addEventListener('click', async (event) => {

    event.preventDefault();

    let formLead = document.getElementById('form-cadastro-lead');
    
    try {
      
      let dados   = await fieldsValidator(formLead)

      preloader.show('Enviando dados...');

      await sendData(dados)

      preloader.hide()
      
      formLead.reset()
      
    } catch (error) {
      
      showMessage('error', error.message, 1000)
      preloader.hide()
    }
  });


  function fieldsValidator(formLead) {
    return new Promise((resolve, reject) => { // <-- Adicionado o return aqui
      let dados = {
        origem: "site",
        perfil: "partner",
        nome: formLead['ipt-nome'].value,
        email: formLead['ipt-email'].value,
        celular: formLead['ipt-celular'].value,
        termoPrivacidade: formLead['ipt-termos-politica-privacidade'].checked,
      };

      for (const [chave, valor] of Object.entries(dados)) {
        if (!valor) {

          let message = `Campo "${chave}" é obrigatório.`;

          switch (chave) {
            case "termoPrivacidade": message = 'É necessário aceitar os termos de privacidade!'; break;
          }

          return reject(new Error(message));
        }
      }

      resolve(dados);
    });
  }

  function sendData(dados){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://jahub.app/api/v1/internal/contact/lead',
        type: 'POST',
        async: true,
        dataType: 'json',
        data: dados,
        success: function (data) {
          showMessage('success', data.message)
          resolve();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //return reject(new Error(message));
        }
      });
    })
  }

})
