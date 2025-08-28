const prompt = require('prompt-sync')({ sigint: true });

let tarefas [];
let id_tarefa [];

function adicionarTarefa() {
    console.log("\n=== Adicionar Tarefa ===");
}

function listarTarefas() {
    console.log("\n=== Listar Tarefas ===");

}

function concluirTarefa() {
    console.log("\nTarefas concluídas:");


}

// Função do menu principal
function menu() {
  console.log("\n📝 To-do List - Escolha uma opção:");
  console.log("[1] Adicionar tarefa");
  console.log("[2] Listar tarefas");
  console.log("[3] Concluir tarefa");
  console.log("[0] Sair");
  return prompt("> ").trim();

// Função principal
function main() {
  let opcao;

  do {
    opcao = menu();

    switch (opcao) {
      case "1":
        adicionarTarefa();
        break;
      case "2":
        listarTarefas();
        break;
      case "3":
        concluirTarefa();
        break;
      case "0":
        console.log("Saindo da To-do List... Até logo!");
        break;
      default:
        console.log("Opção inválida! Escolha uma opção do menu.");
    }
  } while (opcao !== "0");
}

// Executa o programa
main();