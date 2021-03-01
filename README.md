# Recuperação de senha

  **RF**
  - O usuário deve poder recuperar sua senha infromando o seu e-mail;
  - O usuário deve receber um e-mail com instruções de recuperação de senha;
  - O usuário deve poder resetar sua senha;

  **RNF**
  - Utilizar Mailtrap para testar envios em ambiente de dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job);

  **RN**
  - O link enviado por email para resetar senha, deve expeirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização do Perfil
  **RF**
  - O usuário deve poder atualizar seu nome, email e senha;

  **RNF**

  **RN**
  - O usuário não pode alterar seu email para um email já utilizado;
  - Para atualizar sua senha, o usuário deve informar sua senha antiga;
  - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

 **RF**
  - O usuário deve poder listar seus agendamentos de um dia específico;
  - O prestador deve receber uma notificação sempre que houver um novo agendamento;
  - O prestador deve poder visuzalizar as notifições não lidas;
 **RNF**
  - Os agendamentos do prestador no dia devem ser armazenados em cache;
  - As notificalões do prestador devem ser armazenadas no MongoDB;
  - As notificaçõe do prestador devem ser enviadas em tempo real utilizando Socket.io;

 **RN**
  - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;



# Agendamento de serviços

 **RF**
  - O usuário deve poder listar todos prestadores de serviço cadastrados;
  - O usuário deve poder listar os dias de um mês com pelo menos um horários disponivel de um prestador;
  - O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
  - O usuário deve poder realizar um novo agendamento com um prestador;
 **RNF**
  - A listagem de prestadores deve ser armazenada em cache;

 **RN**
  - Cada agendamento deve durar 1h exatamente;
  - Os agendamentos devem estar disponiveis entre 8h ás 18h (primeiro ás 8h, último ás 17h);
  - O usuário não pode agendar em um horário já ocupado;
  - O usuário não pode agendar em um hário que já passou;
  - O usuário não pode agendar serviços consigo mesmo;
  -
