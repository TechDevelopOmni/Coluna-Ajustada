import Button from '@/components/ui/Button'

const bibliotecaAgents = [
    {
        id: 'agent-onboarding',
        name: 'Agente de Onboarding',
        summary:
            'Automatiza boas-vindas, coleta de dados iniciais e primeiras interações com o cliente.',
        tags: ['Onboarding', 'Relacionamento', 'E-mail'],
        integrations: ['Gmail', 'HubSpot', 'WhatsApp API'],
    },
    {
        id: 'agent-support',
        name: 'Triagem de Suporte',
        summary:
            'Classifica tickets, define prioridade e encaminha para o time correto.',
        tags: ['Suporte', 'SLA', 'Helpdesk'],
        integrations: ['Zendesk', 'Intercom', 'Slack'],
    },
    {
        id: 'agent-sales',
        name: 'Qualificação de Leads',
        summary:
            'Avalia leads, identifica oportunidades e agenda follow-ups automaticamente.',
        tags: ['Vendas', 'Pipeline', 'CRM'],
        integrations: ['Pipedrive', 'Salesforce', 'Calendly'],
    },
    {
        id: 'agent-finance',
        name: 'Conciliação Financeira',
        summary:
            'Monitora pagamentos, envia lembretes e atualiza status em tempo real.',
        tags: ['Financeiro', 'Cobrança', 'Relatórios'],
        integrations: ['Stripe', 'ContaAzul', 'Google Sheets'],
    },
]

const BibliotecaView = () => {
    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Biblioteca de Agentes
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Escolha agentes já programados e implemente integrações em poucos
                    passos.
                </p>
            </header>

            <section className="grid gap-6 lg:grid-cols-2">
                {bibliotecaAgents.map((agent) => (
                    <article
                        key={agent.id}
                        className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {agent.name}
                                </h2>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    {agent.summary}
                                </p>
                            </div>
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                                Pronto
                            </span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {agent.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                Integrações sugeridas
                            </p>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                                {agent.integrations.map((integration) => (
                                    <li key={integration}>{integration}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Button variant="solid">Implantar integração</Button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default BibliotecaView
