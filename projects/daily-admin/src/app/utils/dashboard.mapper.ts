import { IDashboarResponse, IDashboardCard, IAnalytics } from '../model/dashboard.model';

/**
 * Formata um número para string com separador de milhar (ex: 12500 -> "12.500")
 * @param num O número a ser formatado.
 * @returns A string formatada.
 */
function formatNumberWithThousandsSeparator(num: number): string {
  return new Intl.NumberFormat('pt-BR').format(num);
}

/**
 * Converte os dados do IDashboarResponse do backend para a lista de IDashboardCard[] do frontend.
 * @param backendData O objeto IDashboarResponse retornado pelo backend.
 * @returns Um array de IDashboardCard com os valores dinâmicos.
 */
export function mapBackendToDashboardCards(analytics: IAnalytics): IDashboardCard[] {
  console.log('backendData', analytics);

  return [
    {
      title: 'Total de Posts',
      value: analytics.totalPostsPublished,
      icon: 'ri-file-text-line',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Posts Pendentes',
      value: analytics.totalPostsPending,
      icon: 'ri-time-line',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      title: 'Posts Aprovados',
      value: analytics.totalPostsApproved,
      icon: 'ri-checkbox-circle-line',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Posts Rejeitados',
      value: analytics.totalPostsRejected,
      icon: 'ri-close-circle-line',
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      title: 'Visualizações Hoje',
      value: formatNumberWithThousandsSeparator(analytics.totalPageviews.currentValue),
      icon: 'ri-eye-line',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      trend: {
        value: Math.abs(analytics.totalPageviews.percentageChange),
        isPositive: analytics.totalPageviews.percentageChange >= 0,
      },
    },
    {
      title: 'Visualizações no Mês',
      // **Atenção:** O backend atualmente não retorna um campo específico para "Visualizações no Mês" distinto de "totalPageviews".
      // Para manter a consistência com o seu mock, vamos usar um valor fixo aqui.
      // Se você precisar que seja dinâmico, o backend precisaria fornecer um campo como `monthlyPageviews`.
      value: '28.500', // Valor mockado do seu exemplo
      icon: 'ri-bar-chart-line',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      trend: {
        value: 8, // Valor mockado do seu exemplo
        isPositive: true, // Valor mockado do seu exemplo
      },
    },
    {
      title: 'Cliques em Afiliados',
      value: analytics.totalAffiliateClicks.currentValue,
      icon: 'ri-external-link-line',
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      trend: {
        value: Math.abs(analytics.totalAffiliateClicks.percentageChange),
        isPositive: analytics.totalAffiliateClicks.percentageChange >= 0,
      },
    },
    {
      title: 'Conversões de Afiliados',
      value: analytics.totalConversions.currentValue,
      icon: 'ri-money-dollar-circle-line',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      trend: {
        value: Math.abs(analytics.totalConversions.percentageChange),
        isPositive: analytics.totalConversions.percentageChange >= 0,
      },
    },
  ];
}
