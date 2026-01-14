import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

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

const outputGroups = {
    Saída: ['Chat', 'Webhook', 'E-mail'] as OutputChannel[],
    Nuvem: ['Google Drive', 'OneDrive', 'Dropbox'] as OutputChannel[],
    Plataforma: ['Arquivos internos'] as OutputChannel[],
}

const steps = ['Entrada', 'Configuração', 'Saída']

const CreateAgent: React.FC = () => {
    const [activeStep, setActiveStep] = useState<WizardStep>(0)
    const [selectedInput, setSelectedInput] = useState<InputType>('WhatsApp')
    const [selectedOutputs, setSelectedOutputs] = useState<OutputChannel[]>([
        'Chat',
    ])
    const [temperature, setTemperature] = useState(0.6)
    const [accuracy, setAccuracy] = useState(0.8)
    const [speed, setSpeed] = useState(0.7)
    const [costControl, setCostControl] = useState(0.4)

    const stepDescriptions = useMemo(
        () => [
            'Selecione o tipo de entrada para iniciar o fluxo do agente.',
            'Defina o comportamento inteligente e os controles do agente.',
            'Escolha os canais de saída onde os resultados serão entregues.',
        ],
        []
    )

    const handleNextStep = () => {
        setActiveStep((current) =>
            current < steps.length - 1
                ? ((current + 1) as WizardStep)
                : current
        )
    }

    const handlePreviousStep = () => {
        setActiveStep((current) =>
            current > 0 ? ((current - 1) as WizardStep) : current
        )
    }

    const handleOutputToggle = (channel: OutputChannel) => {
        setSelectedOutputs((current) =>
            current.includes(channel)
                ? current.filter((item) => item !== channel)
                : [...current, channel]
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase text-indigo-500">
                            OmniStudio
                        </p>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Criar novo agente
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Jornada guiada em três passos para configurar o
                            agente.
                        </p>
                    </div>
                    <Link
                        to="/agentes"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-indigo-300"
                    >
                        Voltar para agentes
                    </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className={`flex min-w-[180px] flex-1 items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium ${
                                activeStep === index
                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                    : 'border-gray-200 text-gray-600'
                            }`}
                        >
                            <span>{step}</span>
                            <span className="text-xs text-gray-400">
                                {index + 1}/3
                            </span>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-500">
                    {stepDescriptions[activeStep]}
                </p>
            </header>

            {activeStep === 0 && (
                <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Entrada
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Escolha o tipo de entrada que dará início ao agente.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {inputTypes.map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setSelectedInput(type)}
                                className={`rounded-xl border px-4 py-6 text-center text-sm font-semibold transition ${
                                    selectedInput === type
                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                        : 'border-gray-200 text-gray-600 hover:border-indigo-300'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {activeStep === 1 && (
                <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Processamento
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Defina o comportamento do agente antes de continuar.
                    </p>
                    <div className="mt-6 grid gap-4">
                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Prompt principal
                            <textarea
                                className="min-h-[120px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="Ex.: Você é um agente especialista em suporte..."
                            />
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                            Regras adicionais
                            <textarea
                                className="min-h-[90px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="Ex.: Responda de forma objetiva e registre logs."
                            />
                        </label>

                        <div className="grid gap-3 md:grid-cols-3">
                            <ToggleCard
                                label="Uso de base de conhecimento"
                                description="Aumenta a precisão usando documentos internos."
                            />
                            <ToggleCard
                                label="Acesso à web"
                                description="Permite buscar fontes externas."
                            />
                            <ToggleCard
                                label="Execução de ferramentas"
                                description="Integrações e automações disponíveis."
                            />
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                            <SliderControl
                                label="Criatividade"
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
                    </div>
                </section>
            )}

            {activeStep === 2 && (
                <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">Saída</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Selecione os canais de saída para entregar os resultados.
                    </p>
                    <div className="mt-6 grid gap-6">
                        {Object.entries(outputGroups).map(([group, channels]) => (
                            <div key={group}>
                                <h3 className="text-sm font-semibold text-gray-700">
                                    {group}
                                </h3>
                                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {channels.map((channel) => (
                                        <button
                                            key={channel}
                                            type="button"
                                            onClick={() =>
                                                handleOutputToggle(channel)
                                            }
                                            className={`rounded-xl border px-4 py-6 text-center text-sm font-semibold transition ${
                                                selectedOutputs.includes(channel)
                                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                    : 'border-gray-200 text-gray-600 hover:border-indigo-300'
                                            }`}
                                        >
                                            {channel}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="flex flex-wrap items-center justify-end gap-3">
                <Link
                    to="/agentes"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-indigo-300"
                >
                    Cancelar
                </Link>
                <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-indigo-300"
                    disabled={activeStep === 0}
                >
                    Voltar
                </button>
                <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    disabled={activeStep === 2}
                >
                    Avançar
                </button>
            </footer>
        </div>
    )
}

type ToggleCardProps = {
    label: string
    description: string
}

const ToggleCard = ({ label, description }: ToggleCardProps) => {
    return (
        <div className="rounded-xl border border-gray-200 px-4 py-3 text-left text-sm text-gray-600">
            <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span className="font-semibold text-gray-700">{label}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>
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

export default CreateAgent
