import React, { useMemo, useState } from 'react'

type AgentModel = {
    id: string
    name: string
    status: 'Ativo' | 'Inativo'
    lastRun: string
}

type ExecutionLog = {
    id: string
    agent: string
    date: string
    status: 'Sucesso' | 'Erro'
    tokens: number
    cost: string
    inputPayload: string
    outputPayload: string
    logs: string
    error?: string
}

type WizardStep = 0 | 1 | 2

type InputType =
    | 'WhatsApp'
    | 'Chat Web'
    | 'Documento'
    | 'Áudio'
    | 'JSON'
    | 'Imagem'
    | 'HTML'
    | 'Vídeo'
    | 'Sem entrada'

type OutputChannel =
    | 'Chat'
    | 'Webhook'
    | 'E-mail'
    | 'Google Drive'
    | 'OneDrive'
    | 'Dropbox'
    | 'Arquivos internos'
    | 'Histórico / Logs'

const wizardSteps = [
    'Visualizador de Agentes',
    'Criação / Edição de Agente',
    'Execuções e Histórico',
]

const inputTypes: InputType[] = [
    'WhatsApp',
    'Chat Web',
    'Documento',
    'Áudio',
    'JSON',
    'Imagem',
    'HTML',
    'Vídeo',
    'Sem entrada',
]

const outputChannels: OutputChannel[] = [
    'Chat',
    'Webhook',
    'E-mail',
    'Google Drive',
    'OneDrive',
    'Dropbox',
    'Arquivos internos',
    'Histórico / Logs',
]

const AgentConfiguration: React.FC = () => {
    // Layout: estados centralizados para controlar navegação entre as telas.
    const [activeStep, setActiveStep] = useState<WizardStep>(0)

    // Estados simulados para demonstrar loading/empty/error.
    const [agentState] = useState<'ready' | 'loading' | 'empty' | 'error'>(
        'ready'
    )
    const [historyState] = useState<'ready' | 'loading' | 'empty' | 'error'>(
        'ready'
    )

    const initialAgents = useMemo<AgentModel[]>(
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

    const executions = useMemo<ExecutionLog[]>(
        () => [
            {
                id: 'exe-01',
                agent: 'Assistente de Onboarding',
                date: 'Hoje, 09:40',
                status: 'Sucesso',
                tokens: 1840,
                cost: 'R$ 3,20',
                inputPayload: '{"user": "novo", "canal": "chat"}',
                outputPayload: '{"status": "onboarding iniciado"}',
                logs: 'Fluxo iniciado com perguntas de boas-vindas.',
            },
            {
                id: 'exe-02',
                agent: 'Analista de Tickets',
                date: 'Hoje, 07:50',
                status: 'Erro',
                tokens: 920,
                cost: 'R$ 1,10',
                inputPayload: '{"ticket": "#239", "prioridade": "alta"}',
                outputPayload: '{}',
                logs: 'Timeout ao acessar base de conhecimento.',
                error: 'Falha na integração com a API de CRM.',
            },
        ],
        []
    )

    const [selectedInputType, setSelectedInputType] =
        useState<InputType>('WhatsApp')
    const [selectedOutputs, setSelectedOutputs] = useState<OutputChannel[]>([
        'Chat',
    ])
    const [knowledgeEnabled, setKnowledgeEnabled] = useState(true)
    const [webAccessEnabled, setWebAccessEnabled] = useState(false)
    const [toolsEnabled, setToolsEnabled] = useState(true)
    const [temperature, setTemperature] = useState(0.7)
    const [accuracy, setAccuracy] = useState(0.8)
    const [speed, setSpeed] = useState(0.6)
    const [costControl, setCostControl] = useState(0.5)
    const [selectedExecution, setSelectedExecution] =
        useState<ExecutionLog | null>(null)

    const metrics = useMemo(
        () => [
            {
                label: 'Total de agentes',
                value: initialAgents.length,
                helper: 'Número total de agentes ativos e inativos.',
            },
            {
                label: 'Execuções hoje',
                value: 18,
                helper: 'Execuções iniciadas nas últimas 24 horas.',
            },
            {
                label: 'Falhas recentes',
                value: 2,
                helper: 'Alertas de erro nos últimos 7 dias.',
            },
        ],
        [initialAgents.length]
    )

    const agentActions = [
        { label: 'Editar', tone: 'text-indigo-600' },
        { label: 'Duplicar', tone: 'text-gray-600' },
        { label: 'Excluir', tone: 'text-rose-600' },
    ]

    const handleOutputToggle = (channel: OutputChannel) => {
        setSelectedOutputs((current) =>
            current.includes(channel)
                ? current.filter((item) => item !== channel)
                : [...current, channel]
        )
    }

    const handleNextStep = () => {
        setActiveStep((current) =>
            current < wizardSteps.length - 1
                ? ((current + 1) as WizardStep)
                : current
        )
    }

    const handlePreviousStep = () => {
        setActiveStep((current) =>
            current > 0 ? ((current - 1) as WizardStep) : current
        )
    }

    return (
        <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase text-indigo-500">
                            OmniStudio
                        </p>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Gestão completa de agentes
                        </h1>
                    </div>
                    <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Criar Novo Agente
                    </button>
                </div>
                <p className="text-sm text-gray-600">
                    Navegue pelas etapas para visualizar agentes, configurar o
                    fluxo de criação e acompanhar as execuções em um único local.
                </p>
            </header>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-4">
                    {wizardSteps.map((step, index) => (
                        <button
                            key={step}
                            type="button"
                            onClick={() => setActiveStep(index as WizardStep)}
                            className={`flex min-w-[220px] flex-1 items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                                activeStep === index
                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                    : 'border-gray-200 text-gray-600 hover:border-indigo-300'
                            }`}
                        >
                            <span>{step}</span>
                            <span className="text-xs text-gray-400">
                                {index + 1}/3
                            </span>
                        </button>
                    ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-indigo-300"
                        disabled={activeStep === 0}
                    >
                        Voltar
                    </button>
                    <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                        disabled={activeStep === 2}
                    >
                        Avançar
                    </button>
                </div>
            </section>

            {activeStep === 0 && (
                <section className="grid gap-6">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {metrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-600">
                                        {metric.label}
                                    </p>
                                    <span
                                        className="cursor-help text-xs text-gray-400"
                                        title={metric.helper}
                                    >
                                        ⓘ
                                    </span>
                                </div>
                                <p className="mt-3 text-2xl font-semibold text-gray-900">
                                    {metric.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Lista de agentes
                            </h2>
                            <span className="text-sm text-gray-500">
                                {initialAgents.length} agentes cadastrados
                            </span>
                        </div>

                        {/* Estados de UI: carregando, vazio e erro */}
                        {agentState === 'loading' && (
                            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
                                Carregando agentes...
                            </div>
                        )}
                        {agentState === 'error' && (
                            <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center text-sm text-rose-600">
                                Não foi possível carregar os agentes. Tente
                                novamente.
                            </div>
                        )}
                        {agentState === 'empty' && (
                            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
                                Nenhum agente cadastrado ainda.
                            </div>
                        )}
                        {agentState === 'ready' && (
                            <div className="grid gap-4 md:grid-cols-2">
                                {initialAgents.map((agent) => (
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
                                                    Última execução: {agent.lastRun}
                                                </p>
                                            </div>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    agent.status === 'Ativo'
                                                        ? 'bg-emerald-50 text-emerald-700'
                                                        : 'bg-gray-100 text-gray-600'
                                                }`}
                                            >
                                                {agent.status}
                                            </span>
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {agentActions.map((action) => (
                                                <button
                                                    key={action.label}
                                                    type="button"
                                                    className={`rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold transition hover:border-indigo-300 ${action.tone}`}
                                                >
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {activeStep === 1 && (
                <section className="grid gap-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Fluxo do agente
                            </h2>
                            <span className="text-xs font-medium uppercase text-indigo-500">
                                Entrada → Processamento → Saída
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            Configure cada etapa com clareza para garantir que o
                            agente entenda a entrada, execute o raciocínio e
                            entregue a saída esperada.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                        <div className="grid gap-6">
                            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-semibold text-gray-900">
                                        2.1 Configuração de Entrada
                                    </h3>
                                    <span
                                        className="text-xs text-gray-400"
                                        title="Defina como o agente recebe dados e quais credenciais são necessárias."
                                    >
                                        ⓘ
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    Selecione o tipo de entrada para exibir as
                                    configurações específicas.
                                </p>
                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {inputTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() =>
                                                setSelectedInputType(type)
                                            }
                                            className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                                                selectedInputType === type
                                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                    : 'border-gray-200 text-gray-600 hover:border-indigo-300'
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-6 rounded-xl border border-dashed border-indigo-200 bg-indigo-50 p-4">
                                    <h4 className="text-sm font-semibold text-indigo-700">
                                        Configuração dinâmica: {selectedInputType}
                                    </h4>
                                    <div className="mt-3 grid gap-3 text-sm text-indigo-700/80">
                                        <p>• Credenciais necessárias</p>
                                        <p>• Formato esperado de payload</p>
                                        <p>• Gatilhos e frequência</p>
                                        <p>• Schemas aplicáveis</p>
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-semibold text-gray-900">
                                        2.2 Processamento (Configuração do Agente)
                                    </h3>
                                    <span
                                        className="text-xs text-gray-400"
                                        title="Campos principais de inteligência e controles de comportamento."
                                    >
                                        ⓘ
                                    </span>
                                </div>
                                <div className="mt-4 grid gap-4">
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                                        Prompt Principal do Agente
                                        <textarea
                                            className="min-h-[120px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                            placeholder="Ex.: Você é um agente de suporte especializado em onboarding..."
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                                        Regras e Instruções Adicionais
                                        <textarea
                                            className="min-h-[90px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                            placeholder="Ex.: Sempre responda em tom consultivo e registre logs detalhados."
                                        />
                                    </label>

                                    <div className="grid gap-3 md:grid-cols-3">
                                        <ToggleCard
                                            label="Uso de base de conhecimento"
                                            description="Aumenta precisão usando documentos internos."
                                            checked={knowledgeEnabled}
                                            onChange={setKnowledgeEnabled}
                                        />
                                        <ToggleCard
                                            label="Acesso à web"
                                            description="Permite buscar fontes externas."
                                            checked={webAccessEnabled}
                                            onChange={setWebAccessEnabled}
                                        />
                                        <ToggleCard
                                            label="Execução de ferramentas"
                                            description="Integra com funções e APIs."
                                            checked={toolsEnabled}
                                            onChange={setToolsEnabled}
                                        />
                                    </div>

                                    <div className="grid gap-4 lg:grid-cols-2">
                                        <SliderControl
                                            label="Criatividade (temperature)"
                                            value={temperature}
                                            onChange={setTemperature}
                                        />
                                        <SliderControl
                                            label="Precisão"
                                            value={accuracy}
                                            onChange={setAccuracy}
                                        />
                                        <SliderControl
                                            label="Velocidade"
                                            value={speed}
                                            onChange={setSpeed}
                                        />
                                        <SliderControl
                                            label="Controle de custo"
                                            value={costControl}
                                            onChange={setCostControl}
                                        />
                                    </div>

                                    <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                                        Preview: com criatividade em
                                        {(temperature * 100).toFixed(0)}%, o
                                        agente gera respostas mais variadas,
                                        mantendo precisão em
                                        {(accuracy * 100).toFixed(0)}%.
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-semibold text-gray-900">
                                    2.3 Configuração de Saída
                                </h3>
                                <span
                                    className="text-xs text-gray-400"
                                    title="Selecione múltiplos destinos para entrega dos resultados."
                                >
                                    ⓘ
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Escolha canais de saída e configure cada um
                                deles conforme necessário.
                            </p>
                            <div className="mt-4 grid gap-3">
                                {outputChannels.map((channel) => (
                                    <label
                                        key={channel}
                                        className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600"
                                    >
                                        <span>{channel}</span>
                                        <input
                                            type="checkbox"
                                            checked={selectedOutputs.includes(
                                                channel
                                            )}
                                            onChange={() =>
                                                handleOutputToggle(channel)
                                            }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-500"
                                        />
                                    </label>
                                ))}
                            </div>
                            <div className="mt-6 grid gap-3">
                                {selectedOutputs.map((channel) => (
                                    <div
                                        key={channel}
                                        className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-700"
                                    >
                                        <strong>{channel}</strong>
                                        <p className="mt-2 text-xs text-indigo-700/80">
                                            Configure campos específicos para {channel}.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
            )}

            {activeStep === 2 && (
                <section className="grid gap-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Execuções e Histórico
                            </h2>
                            <span className="text-xs text-gray-400">
                                Visão consolidada de logs
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            Acompanhe o desempenho dos agentes e acesse detalhes
                            das execuções para auditoria.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        {/* Estados de UI: carregando, vazio e erro */}
                        {historyState === 'loading' && (
                            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
                                Carregando histórico...
                            </div>
                        )}
                        {historyState === 'error' && (
                            <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center text-sm text-rose-600">
                                Não foi possível carregar o histórico.
                            </div>
                        )}
                        {historyState === 'empty' && (
                            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
                                Nenhuma execução registrada ainda.
                            </div>
                        )}
                        {historyState === 'ready' && (
                            <div className="overflow-hidden rounded-xl border border-gray-200">
                                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr] gap-0 border-b border-gray-200 bg-gray-50 p-3 text-xs font-semibold uppercase text-gray-500">
                                    <span>Agente</span>
                                    <span>Data</span>
                                    <span>Status</span>
                                    <span>Tokens</span>
                                    <span>Ação</span>
                                </div>
                                {executions.map((execution) => (
                                    <div
                                        key={execution.id}
                                        className="grid grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr] items-center gap-0 border-b border-gray-100 p-4 text-sm text-gray-600 last:border-b-0"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {execution.agent}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Custo estimado: {execution.cost}
                                            </p>
                                        </div>
                                        <span>{execution.date}</span>
                                        <span
                                            className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${
                                                execution.status === 'Sucesso'
                                                    ? 'bg-emerald-50 text-emerald-700'
                                                    : 'bg-rose-50 text-rose-700'
                                            }`}
                                        >
                                            {execution.status}
                                        </span>
                                        <span>{execution.tokens}</span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedExecution(execution)
                                            }
                                            className="text-left text-sm font-semibold text-indigo-600"
                                        >
                                            Ver detalhes
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {selectedExecution && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
                    <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Detalhes da execução
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {selectedExecution.agent} •{' '}
                                    {selectedExecution.date}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedExecution(null)}
                                className="text-sm font-semibold text-gray-500"
                            >
                                Fechar
                            </button>
                        </div>
                        <div className="mt-4 grid gap-4 text-sm text-gray-600">
                            <DetailBlock
                                title="Payload de entrada"
                                content={selectedExecution.inputPayload}
                            />
                            <DetailBlock
                                title="Payload de saída"
                                content={selectedExecution.outputPayload}
                            />
                            <DetailBlock
                                title="Logs"
                                content={selectedExecution.logs}
                            />
                            {selectedExecution.error && (
                                <DetailBlock
                                    title="Erros"
                                    content={selectedExecution.error}
                                    tone="border-rose-200 bg-rose-50 text-rose-700"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

type ToggleCardProps = {
    label: string
    description: string
    checked: boolean
    onChange: (value: boolean) => void
}

const ToggleCard = ({
    label,
    description,
    checked,
    onChange,
}: ToggleCardProps) => {
    return (
        <button
            type="button"
            onClick={() => onChange(!checked)}
            className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                checked
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 text-gray-600 hover:border-indigo-300'
            }`}
        >
            <div className="flex items-center justify-between">
                <span className="font-semibold">{label}</span>
                <span className="text-xs">
                    {checked ? 'Ativo' : 'Desativado'}
                </span>
            </div>
            <p className="mt-2 text-xs text-gray-500">{description}</p>
        </button>
    )
}

type SliderControlProps = {
    label: string
    value: number
    onChange: (value: number) => void
}

const SliderControl = ({ label, value, onChange }: SliderControlProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                <span>{label}</span>
                <span className="text-xs text-gray-400">
                    {(value * 100).toFixed(0)}%
                </span>
            </div>
            <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={value}
                onChange={(event) => onChange(Number(event.target.value))}
                className="mt-3 w-full accent-indigo-500"
            />
        </div>
    )
}

type DetailBlockProps = {
    title: string
    content: string
    tone?: string
}

const DetailBlock = ({ title, content, tone }: DetailBlockProps) => {
    return (
        <div
            className={`rounded-xl border border-gray-200 bg-gray-50 p-4 ${
                tone ?? ''
            }`}
        >
            <p className="text-xs font-semibold uppercase text-gray-500">
                {title}
            </p>
            <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-700">
                {content}
            </pre>
        </div>
    )
}

export default AgentConfiguration
