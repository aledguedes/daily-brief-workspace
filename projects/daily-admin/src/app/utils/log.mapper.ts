import { IDashboardLog, ILogDisplayItem } from '../model/dashboard.model';

/**
 * Mapeia um log do formato do backend (IDashboardLog) para o formato de exibição do frontend (ILogDisplayItem).
 * A lógica para extrair 'action', 'user' e 'details' é baseada em padrões de string
 * e pode precisar de ajustes dependendo do formato exato das suas mensagens de log.
 * @param backendLog O objeto IDashboardLog retornado pelo backend.
 * @returns Um objeto ILogDisplayItem formatado para exibição.
 */
export function mapBackendLogToDisplayItem(backendLog: IDashboardLog): ILogDisplayItem {
  let action: string = 'Evento Desconhecido';
  let user: string = 'Sistema';
  let details: ILogDisplayItem['details'] = {};

  // Lógica de inferência (ajuste conforme seus padrões de mensagem de log)
  if (backendLog.message.includes('aprovado')) {
    action = 'Post aprovado';
    const match = backendLog.message.match(/ID (\d+) foi aprovado pelo usuário (.*)\./);
    if (match) {
      details.postId = parseInt(match[1]);
      // Assumindo que você pode obter o título do post de outro lugar se necessário,
      // ou que a mensagem do log já o contém. Para este exemplo, deixarei estático.
      details.postTitle = `Post ${match[1]}`; // Você pode querer buscar o título real
      user = match[2];
    }
  } else if (backendLog.message.includes('rejeitado')) {
    action = 'Post rejeitado';
    const match = backendLog.message.match(/ID (\d+) foi rejeitado pelo usuário (.*)\./);
    if (match) {
      details.postId = parseInt(match[1]);
      details.postTitle = `Post ${match[1]}`;
      user = match[2];
    }
  } else if (backendLog.message.includes('criado')) {
    action = 'Post criado';
    const match = backendLog.message.match(/ID (\d+) foi criado pelo usuário (.*)\./);
    if (match) {
      details.postId = parseInt(match[1]);
      details.postTitle = `Post ${match[1]}`;
      user = match[2];
    }
  } else if (backendLog.level === 'ERROR') {
    action = 'Erro no sistema';
    user = 'Sistema'; // Erros geralmente são do sistema ou causados por uma ação
    details.change = backendLog.message; // A mensagem inteira pode ser o detalhe
  }
  // Adicione mais `else if` para outros tipos de logs que você tenha

  return {
    id: backendLog.id,
    timestamp: backendLog.timestamp,
    action: action,
    user: user,
    details: details,
    originalLevel: backendLog.level, // Para usar 'level' no getActionClass/Icon se precisar
  };
}
