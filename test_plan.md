Plano de Testes — TechFlow Task Manager
1. Objetivo
Validar todas as funcionalidades do sistema TechFlow Task Manager, garantindo que o comportamento esteja alinhado com os requisitos definidos no projeto.

2. Escopo
Este plano cobre os seguintes itens:
- Criação de tarefas
- Edição de tarefas
- Exclusão de tarefas
- Marcar tarefa como concluída
- Filtragem de tarefas
- Interface e usabilidade básica

3. Itens a serem testados
- index.html
- style.css
- script.js
- Funcionalidades implementadas nas Issues 4 a 8

4. Estratégia de Testes
Os testes serão realizados manualmente, utilizando:
- Navegador Google Chrome
- Interação direta com a interface
- Validação visual e funcional

5. Critérios de Aceitação Gerais
- O sistema deve funcionar sem erros no console
- Todas as ações devem refletir imediatamente na interface
- Nenhuma tarefa vazia deve ser criada ou salva
- O filtro deve funcionar corretamente para todos os estados

6. Casos de Teste

CT01 — Criar tarefa
ID: CT01
Descrição: Verificar se o sistema cria uma nova tarefa
Pré-condição: Campo de texto vazio
Passos:
- Digitar uma tarefa
- Clicar em “Adicionar”
Resultado Esperado: A tarefa aparece na lista

CT02 — Impedir criação de tarefa vazia
ID: CT02
Descrição: Garantir que tarefas vazias não sejam criadas
Pré-condição: Campo vazio
Passos:
- Clicar em “Adicionar” sem digitar nada
Resultado Esperado: Nada acontece

CT03 — Editar tarefa
ID: CT03
Descrição: Verificar se a tarefa pode ser editada
Pré-condição: Tarefa existente
Passos:
- Clicar em “Editar”
- Alterar o texto
- Pressionar Enter
Resultado Esperado: O texto da tarefa é atualizado

CT04 — Impedir edição vazia
ID: CT04
Descrição: Garantir que o usuário não salve uma edição vazia
Pré-condição: Tarefa existente
Passos:
- Clicar em “Editar”
- Apagar o texto
- Pressionar Enter
Resultado Esperado: O campo permanece em edição

CT05 — Excluir tarefa
ID: CT05
Descrição: Verificar se a tarefa é removida
Pré-condição: Tarefa existente
Passos:
- Clicar em “Excluir”
Resultado Esperado: A tarefa desaparece da lista

CT06 — Marcar tarefa como concluída
ID: CT06
Descrição: Verificar se a tarefa pode ser marcada como concluída
Pré-condição: Tarefa existente
Passos:
- Clicar em “Concluir”
Resultado Esperado: A tarefa recebe a classe .completed

CT07 — Filtrar tarefas concluídas
ID: CT07
Descrição: Verificar se o filtro exibe apenas concluídas
Pré-condição: Pelo menos 1 concluída e 1 pendente
Passos:
- Clicar em “Concluídas”
Resultado Esperado: Apenas tarefas concluídas aparecem

CT08 — Filtrar tarefas pendentes
ID: CT08
Descrição: Verificar se o filtro exibe apenas pendentes
Pré-condição: Pelo menos 1 concluída e 1 pendente
Passos:
- Clicar em “Pendentes”
Resultado Esperado: Apenas tarefas pendentes aparecem

CT09 — Exibir todas as tarefas
ID: CT09
Descrição: Verificar se o filtro “Todas” funciona
Pré-condição: Tarefas concluídas e pendentes
Passos:
- Clicar em “Todas”
Resultado Esperado: Todas as tarefas aparecem
