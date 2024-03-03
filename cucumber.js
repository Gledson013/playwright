const common = [
    'features/**/*.feature',                // Especifica onde estão os arquivos de feature
    '--require-module ts-node/register',    // Carrega o módulo ts-node para suportar TypeScript
    '--require step_definitions/**/*.ts',   // Indica onde estão os arquivos de step definitions
    '--format progress',                    // Usa o formato de progresso para a saída do relatório de teste
    '--publish-quiet'                       // Opcional: Se você quiser evitar publicar o relatório no Cucumber Reports
].join(' ');

module.exports = {
    default: common
};
