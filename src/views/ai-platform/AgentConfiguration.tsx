import React, { useMemo, useState } from 'react'

type AgentModel = {
    id: string
    name: string
    objective: string
    model: string
    channels: string[]
    status: 'Ativo' | 'Rascunho'
}

const AgentConfiguration: React.FC = () => {
    // Dados simulados para representar agentes já cadastrados na plataforma.
    const initialAgents = useMemo<AgentModel[]>(
        () => [
            {
                id: 'agt-01',
                name: 'Assistente de Onboarding',
                objective: 'Guiar novos usuários na configuração inicial.',
                model: 'GPT-4.5 Turbo',
                channels: ['Email', 'Chat'],
                status: 'Ativo',
            },
            {
                id: 'agt-02',
                name: 'Analista de Tickets',
                objective: 'Classificar e priorizar chamados automaticamente.',
                model: 'Claude 3.5',
                channels: ['Helpdesk', 'Slack'],
                status: 'Rascunho',
            },
        ],
        []
    )

    const [agents, setAgents] = useState<AgentModel[]>(initialAgents)
    const [name, setName] = useState('')
    const [objective, setObjective] = useState('')
    const [model, setModel] = useState('GPT-4.5 Turbo')
    const [channels, setChannels] = useState<string[]>(['Email'])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Criação local de um agente apenas para simular persistência no frontend.
        const newAgent: AgentModel = {
            id: `agt-${Date.now()}`,
            name,
            objective,
            model,
            channels,
            status: 'Rascunho',
        }

        setAgents((current) => [newAgent, ...current])
        setName('')
        setObjective('')
        setModel('GPT-4.5 Turbo')
        setChannels(['Email'])
    }

    const toggleChannel = (channel: string) => {
        setChannels((current) =>
            current.includes(channel)
                ? current.filter((item) => item !== channel)
                : [...current, channel]
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Configuração de Agentes de IA
                </h1>
                <p className="text-sm text-gray-600">
                    Crie agentes personalizados definindo objetivo, modelo e
                    canais de interação.
                </p>
            </header>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                    <div className="mb-6 flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Novo agente
                        </h2>
                        <p className="text-sm text-gray-500">
                            Campos simulados para criação de agentes.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Nome do agente
                            <input
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="Ex.: Guardião de SLA"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Objetivo principal
                            <textarea
                                value={objective}
                                onChange={(event) =>
                                    setObjective(event.target.value)
                                }
                                className="min-h-[96px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="Descreva a missão do agente"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Modelo de IA
                            <select
                                value={model}
                                onChange={(event) =>
                                    setModel(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                            >
                                <option>GPT-4.5 Turbo</option>
                                <option>Claude 3.5</option>
                                <option>Gemini 1.5 Pro</option>
                                <option>Llama 3.1 Enterprise</option>
                            </select>
                        </label>

                        <fieldset className="flex flex-col gap-3">
                            <legend className="text-sm font-medium text-gray-700">
                                Canais de atuação
                            </legend>
                            <div className="flex flex-wrap gap-3">
                                {['Email', 'Chat', 'Slack', 'Helpdesk'].map(
                                    (channel) => (
                                        <label
                                            key={channel}
                                            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={channels.includes(
                                                    channel
                                                )}
                                                onChange={() =>
                                                    toggleChannel(channel)
                                                }
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-500"
                                            />
                                            {channel}
                                        </label>
                                    )
                                )}
                            </div>
                        </fieldset>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Salvar agente
                    </button>
                </form>

                <aside className="rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 via-white to-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Recomendações rápidas
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-600">
                        <li>
                            ✅ Priorize objetivos claros para melhorar a
                            precisão do agente.
                        </li>
                        <li>
                            ✅ Utilize canais de comunicação consistentes com o
                            fluxo operacional.
                        </li>
                        <li>
                            ✅ Defina métricas de sucesso para validar o impacto.
                        </li>
                    </ul>
                </aside>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Agentes configurados
                    </h2>
                    <span className="text-sm text-gray-500">
                        {agents.length} agentes
                    </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {agents.map((agent) => (
                        <div
                            key={agent.id}
                            className="rounded-xl border border-gray-200 p-4"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {agent.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {agent.model}
                                    </p>
                                </div>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {agent.status}
                                </span>
                            </div>
                            <p className="mt-3 text-sm text-gray-600">
                                {agent.objective}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {agent.channels.map((channel) => (
                                    <span
                                        key={channel}
                                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                                    >
                                        {channel}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AgentConfiguration
