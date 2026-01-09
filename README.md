# TechFlow Solutions – Sistema de Gerenciamento de Tarefas

Este repositório faz parte de um projeto acadêmico da disciplina de Engenharia de Software, simulando o desenvolvimento de um sistema simples de gerenciamento de tarefas para uma startup de logística. O projeto aplica princípios de metodologias ágeis, boas práticas de versionamento e organização de fluxo de trabalho.

---

## Objetivo do Projeto

O objetivo é desenvolver um sistema web simples e funcional que permita:

- Visualizar o fluxo de trabalho da equipe  
- Registrar novas tarefas  
- Atualizar e excluir tarefas  
- Marcar tarefas como concluídas  
- Facilitar o acompanhamento das atividades diárias  

Além da implementação, o projeto demonstra o uso de ferramentas essenciais no ciclo de vida de software:

- GitHub Projects (Board simples)  
- Issues organizadas  
- Commits semânticos  
- Documentação clara e rastreável  

---

## Levantamento de Requisitos — Entrevista com o Cliente

Antes da criação das Issues e do planejamento do projeto, foi realizada uma entrevista com o cliente da startup para entender suas necessidades e expectativas. As respostas foram utilizadas como base para definir o escopo e organizar o desenvolvimento.

---

## Requisitos Funcionais (RF)

**RF01 – Criar tarefas**  
O sistema deve permitir o cadastro de novas tarefas contendo apenas um título.

**RF02 – Listar tarefas**  
O sistema deve exibir todas as tarefas cadastradas em uma única visualização.

**RF03 – Atualizar tarefas**  
O sistema deve permitir a edição do título de uma tarefa.

**RF04 – Excluir tarefas**  
O sistema deve permitir a remoção de tarefas da lista.

**RF05 – Marcar tarefa como concluída**  
O sistema deve permitir alterar o status de uma tarefa para “concluída”.

**RF06 – Exibir status da tarefa**  
O sistema deve mostrar claramente se a tarefa está pendente ou concluída.

**RF07 – Registrar fluxo de trabalho**  
O andamento do desenvolvimento deve ser acompanhado pelo Board simples do GitHub Projects.

**RF08 – Registrar mudança de escopo**  
O sistema deve permitir expansão futura conforme solicitado pelo cliente.

**RF09 – Interface simples e intuitiva**  
A interface deve ser fácil de usar, sem necessidade de treinamento.

**RF10 – Suporte a priorização futura**  
O sistema deve permitir expansão futura para incluir prioridade de tarefas.

---

## Requisitos Não Funcionais (RNF)

**RNF01 – Usabilidade**  
A interface deve ser simples, clara e fácil de usar.

**RNF02 – Desempenho**  
As ações devem ocorrer instantaneamente no navegador.

**RNF03 – Portabilidade**  
O sistema deve funcionar em qualquer navegador moderno.

**RNF04 – Manutenibilidade**  
O código deve ser organizado em arquivos separados (HTML, CSS e JS).

**RNF05 – Simplicidade Tecnológica**  
O sistema não deve depender de backend ou banco de dados.

**RNF06 – Rastreabilidade**  
Cada funcionalidade deve estar vinculada a uma Issue e a commits semânticos.

**RNF07 – Evolutividade**  
A arquitetura deve permitir inclusão de novas funcionalidades no futuro.

**RNF08 – Documentação**  
O projeto deve conter documentação clara, incluindo README, entrevista e requisitos.

---

## Escopo Inicial

O escopo inicial contempla:

- Interface web simples utilizando HTML, CSS e JavaScript  
- Cadastro de tarefas com título  
- Listagem de todas as tarefas  
- Funcionalidades básicas:  
  - Criar tarefa  
  - Marcar tarefa como concluída  
  - Excluir tarefa  

Funcionalidades como autenticação, múltiplos usuários, banco de dados ou relatórios **não fazem parte do escopo inicial**, pois o foco está na aplicação prática dos conceitos de Engenharia de Software.

---

## Metodologia Adotada

O desenvolvimento foi organizado utilizando GitHub Projects (Board simples) e dividido em duas frentes principais: **Desenvolvimento** e **Qualidade**.  
As Issues foram movidas entre as colunas *Backlog → A Fazer → Em Progresso → Concluído*, garantindo rastreabilidade e organização.

---

### **1. Desenvolvimento (Issues #1 a #8)**

Incluiu:

- Criação da estrutura HTML  
- Montagem do layout  
- Estilização com CSS  
- Implementação das funcionalidades principais em JavaScript  
- Manipulação da lista de tarefas  
- Implementação dos filtros  

Cada Issue foi concluída com commits semânticos seguindo o padrão:

feat: descrição da funcionalidade closes #X


---

### **2. Qualidade e Documentação (Issues #9 e #10)**

Incluiu:

- Finalização da documentação  
- Criação do plano de testes  
- Definição dos casos de teste  
- Validação manual das funcionalidades  

As Issues foram concluídas após revisão e verificação de conformidade com os requisitos.

---

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript  
- **Versionamento:** Git e GitHub  
- **Gestão de tarefas:** GitHub Projects (Board simples)  
- **Documentação:** Markdown  

---

## Como Executar o Projeto

1. Clone este repositório:  

https://github.com/MSilva993/techflow-solutions-2025


2. Acesse a pasta do projeto:  

cd techflow-solutions-2025


3. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar dependências ou rodar servidor.

---

## Documentação Complementar

- Entrevista com o cliente  
- Requisitos funcionais e não funcionais  
- Escopo do projeto  
- Metodologia adotada  
- Plano de testes  

Toda a documentação está disponível na pasta principal do repositório.

---

## Status do Projeto

Em desenvolvimento, seguindo o planejamento definido no Board e nas Issues.
