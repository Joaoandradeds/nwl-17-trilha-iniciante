const { select } = require('@inquirer/prompts')

const start = async () => {

    while (true) {

        const opcao = await select({
            message: 'menu >',
            choices: [
                {
                    name: 'Cadastrar Meta',
                    value: 'cadastrar'
                },
                {
                    name: 'Listar Metas',
                    value: 'listar'
                },
                {
                    name: 'Sair',
                    value: 'sair'
                }
            ]
        })



        switch (opcao) {
            case 'cadastrar':
                console.log('Vamos Cadastrar')
                break
            case 'listar':
                console.log('vamos listar')
                break
            case 'sair':
                console.log('Até a próxima')
                return
        }
    }
}
start()
