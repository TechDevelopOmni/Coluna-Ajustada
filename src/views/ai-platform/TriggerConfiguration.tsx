import React, { useMemo, useState } from 'react'

type TriggerModel = {
    id: string
    agent: string
    condition: string
    frequency: string
    status: 'Ativo' | 'Pausado'
    lastRun: string
}

const TriggerConfiguration: React.FC = () => {
    // Lista mockada de agentes disponíveis para uso em gatilhos.
    const availableAgents = useMemo(
        () => [
            'Assistente de Onboarding',
            'Analista de Tickets',
            'Curador de Conteúdo',
        ],
        []
    )

    const initialTriggers = useMemo<TriggerModel[]>(
        () => [
            {
                id: 'trg-01',
                agent: 'Assistente de Onboarding',
                condition: 'Novo usuário cadastrado',
                frequency: 'Em tempo real',
                status: 'Ativo',
                lastRun: 'Há 8 min',
            },
            {
                id: 'trg-02',
                agent: 'Analista de Tickets',
                condition: 'Ticket aberto com prioridade alta',
                frequency: 'A cada 15 minutos',
                status: 'Ativo',
                lastRun: 'Há 2 horas',
            },
        ],
        []
    )

    const [triggers, setTriggers] = useState<TriggerModel[]>(initialTriggers)
    const [agent, setAgent] = useState(availableAgents[0])
    const [condition, setCondition] = useState('')
    const [frequency, setFrequency] = useState('Em tempo real')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Simula o cadastro de um gatilho sem dependência de backend.
        const newTrigger: TriggerModel = {
            id: `trg-${Date.now()}`,
            agent,
            condition,
            frequency,
            status: 'Ativo',
            lastRun: 'Agora',
        }

        setTriggers((current) => [newTrigger, ...current])
        setCondition('')
        setFrequency('Em tempo real')
        setAgent(availableAgents[0])
    }

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Gatilhos de Execução
                </h1>
                <p className="text-sm text-gray-600">
                    Defina quando os agentes devem iniciar tarefas automatizadas.
                </p>
            </header>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Novo gatilho
                        </h2>
                        <p className="text-sm text-gray-500">
                            Configure condições e frequência simuladas.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Agente responsável
                            <select
                                value={agent}
                                onChange={(event) =>
                                    setAgent(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                            >
                                {availableAgents.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Condição de disparo
                            <input
                                value={condition}
                                onChange={(event) =>
                                    setCondition(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="Ex.: Volume de tickets acima de 20"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Frequência
                            <select
                                value={frequency}
                                onChange={(event) =>
                                    setFrequency(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                            >
                                <option>Em tempo real</option>
                                <option>A cada 15 minutos</option>
                                <option>A cada 1 hora</option>
                                <option>Diariamente às 08:00</option>
                            </select>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Ativar gatilho
                    </button>
                </form>

                <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Checklist de governança
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-600">
                        <li>✔ Defina limites de execução para evitar picos.</li>
                        <li>✔ Configure alertas para falhas recorrentes.</li>
                        <li>✔ Valide o impacto em processos críticos.</li>
                    </ul>
                </aside>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Gatilhos ativos
                    </h2>
                    <span className="text-sm text-gray-500">
                        {triggers.length} configurações
                    </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {triggers.map((trigger) => (
                        <div
                            key={trigger.id}
                            className="rounded-xl border border-gray-200 p-4"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {trigger.agent}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {trigger.frequency}
                                    </p>
                                </div>
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                                    {trigger.status}
                                </span>
                            </div>
                            <p className="mt-3 text-sm text-gray-600">
                                {trigger.condition}
                            </p>
                            <p className="mt-3 text-xs text-gray-500">
                                Última execução: {trigger.lastRun}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TriggerConfiguration
