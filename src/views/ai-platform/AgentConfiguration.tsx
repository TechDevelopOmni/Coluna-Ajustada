import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

type AgentModel = {
    id: string
    name: string
    status: 'Ativo' | 'Inativo'
    lastRun: string
}

const AgentConfiguration: React.FC = () => {
    const agents = useMemo<AgentModel[]>(
        () => [
            {
                id: 'agt-01',
                name: 'Assistente de Onboarding',
                status: 'Ativo',
                lastRun: 'Hoje, 09:40',
            },
            {
                id: 'agt-02',
                name: 'Analista de Tickets',
                status: 'Inativo',
                lastRun: 'Ontem, 18:15',
            },
            {
                id: 'agt-03',
                name: 'Curador de Conteúdo',
                status: 'Ativo',
                lastRun: 'Hoje, 08:10',
            },
        ],
        []
    )

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div>
                    <p className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-300">
                        OmniStudio
                    </p>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Visualizador de Agentes
                    </h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Veja os agentes já criados e inicie uma nova jornada.
                    </p>
                </div>
                <Link
                    to="/criaragente"
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                >
                    Criar Novo Agente
                </Link>
            </header>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Agentes criados
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {agents.length} agentes
                    </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {agents.map((agent) => (
                        <div
                            key={agent.id}
                            className="rounded-xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-950"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                        {agent.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Última execução: {agent.lastRun}
                                    </p>
                                </div>
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                        agent.status === 'Ativo'
                                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200'
                                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                                    }`}
                                >
                                    {agent.status}
                                </span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-indigo-600 transition hover:border-indigo-300 dark:border-gray-700 dark:text-indigo-300 dark:hover:border-indigo-400"
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 transition hover:border-indigo-300 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-400"
                                >
                                    Duplicar
                                </button>
                                <button
                                    type="button"
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-rose-600 transition hover:border-rose-300 dark:border-gray-700 dark:text-rose-300 dark:hover:border-rose-300"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AgentConfiguration
