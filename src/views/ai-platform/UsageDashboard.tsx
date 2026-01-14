import React from 'react'

type MetricCard = {
    id: string
    label: string
    value: string
    trend: string
}

type ActivityLog = {
    id: string
    agent: string
    action: string
    status: 'Sucesso' | 'Atenção'
    time: string
}

const UsageDashboard: React.FC = () => {
    // Métricas mockadas para o painel principal de acompanhamento.
    const metrics: MetricCard[] = [
        {
            id: 'met-01',
            label: 'Execuções nas últimas 24h',
            value: '1.284',
            trend: '+12% vs. ontem',
        },
        {
            id: 'met-02',
            label: 'Agentes ativos',
            value: '8',
            trend: '2 em rascunho',
        },
        {
            id: 'met-03',
            label: 'Tempo médio de resposta',
            value: '1m 42s',
            trend: '-18% na semana',
        },
        {
            id: 'met-04',
            label: 'Alertas pendentes',
            value: '3',
            trend: 'Prioridade alta',
        },
    ]

    const activityLogs: ActivityLog[] = [
        {
            id: 'log-01',
            agent: 'Assistente de Onboarding',
            action: 'Fluxo de boas-vindas enviado',
            status: 'Sucesso',
            time: 'Há 12 min',
        },
        {
            id: 'log-02',
            agent: 'Curador de Conteúdo',
            action: 'Revisão de material de marketing',
            status: 'Atenção',
            time: 'Há 1 hora',
        },
        {
            id: 'log-03',
            agent: 'Analista de Tickets',
            action: 'Priorização de chamados críticos',
            status: 'Sucesso',
            time: 'Há 2 horas',
        },
    ]

    const usageByChannel = [
        { label: 'Email', value: 68 },
        { label: 'Chat', value: 82 },
        { label: 'Slack', value: 55 },
        { label: 'Helpdesk', value: 41 },
    ]

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard de Uso
                </h1>
                <p className="text-sm text-gray-600">
                    Acompanhe desempenho, alertas e atividade recente dos
                    agentes.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <div
                        key={metric.id}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                            {metric.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                            {metric.value}
                        </p>
                        <p className="mt-1 text-sm text-indigo-600">
                            {metric.trend}
                        </p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Distribuição por canal
                    </h2>
                    <p className="text-sm text-gray-500">
                        Volume de execuções por origem nas últimas 24h.
                    </p>
                    <div className="mt-6 space-y-4">
                        {usageByChannel.map((item) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>{item.label}</span>
                                    <span>{item.value}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-100">
                                    <div
                                        className="h-full rounded-full bg-indigo-500"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Alertas inteligentes
                    </h2>
                    <p className="text-sm text-gray-500">
                        Alertas críticos identificados pelos agentes.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                            <p className="text-sm font-semibold text-amber-700">
                                SLA de atendimento em risco
                            </p>
                            <p className="mt-2 text-xs text-amber-600">
                                3 tickets acima de 4 horas sem resposta.
                            </p>
                        </div>
                        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                            <p className="text-sm font-semibold text-rose-700">
                                Pico de chamadas no canal Chat
                            </p>
                            <p className="mt-2 text-xs text-rose-600">
                                Volume 42% acima do padrão semanal.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm font-semibold text-slate-700">
                                Modelo em modo de observação
                            </p>
                            <p className="mt-2 text-xs text-slate-600">
                                Acurácia caiu 3% no agente de triagem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Atividade recente
                    </h2>
                    <span className="text-sm text-gray-500">Últimas 6h</span>
                </div>
                <div className="space-y-3">
                    {activityLogs.map((log) => (
                        <div
                            key={log.id}
                            className="flex items-start justify-between rounded-xl border border-gray-200 p-4"
                        >
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {log.agent}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {log.action}
                                </p>
                            </div>
                            <div className="text-right">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                        log.status === 'Sucesso'
                                            ? 'bg-emerald-50 text-emerald-600'
                                            : 'bg-amber-50 text-amber-600'
                                    }`}
                                >
                                    {log.status}
                                </span>
                                <p className="mt-2 text-xs text-gray-500">
                                    {log.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default UsageDashboard
