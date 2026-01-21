import React, { useMemo, useState } from 'react'

type TriggerModel = {
    id: string
    name: string
    description: string
    agent: string
    condition: string
    frequency: string
    status: 'Ativo' | 'Pausado'
    lastRun: string
}

type PeriodOption =
    | 'Não se repete'
    | 'Diariamente'
    | 'Semanalmente'
    | 'Mensalmente'
    | 'Anualmente'
    | 'Dias úteis'
    | 'Personalizada'

type CustomIntervalUnit = 'dia(s)' | 'semana(s)' | 'mês(es)'
type WeekdayOption =
    | 'Segunda'
    | 'Terça'
    | 'Quarta'
    | 'Quinta'
    | 'Sexta'
    | 'Sábado'
    | 'Domingo'

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
                name: 'Onboarding de boas-vindas',
                description:
                    'Dispara a experiência guiada sempre que um usuário é criado.',
                agent: 'Assistente de Onboarding',
                condition: 'Novo usuário cadastrado',
                frequency: 'Não se repete • 08:00',
                status: 'Ativo',
                lastRun: 'Há 8 min',
            },
            {
                id: 'trg-02',
                name: 'Monitor de tickets críticos',
                description:
                    'Prioriza tickets urgentes nas manhãs úteis.',
                agent: 'Analista de Tickets',
                condition: 'Ticket aberto com prioridade alta',
                frequency: 'Dias úteis • 09:30',
                status: 'Ativo',
                lastRun: 'Há 2 horas',
            },
        ],
        []
    )

    const [triggers, setTriggers] = useState<TriggerModel[]>(initialTriggers)
    const [agent, setAgent] = useState(availableAgents[0])
    const [triggerName, setTriggerName] = useState('')
    const [description, setDescription] = useState('')
    const [condition, setCondition] = useState('')
    const [period, setPeriod] = useState<PeriodOption>('Não se repete')
    const [timeOfDay, setTimeOfDay] = useState('08:00')
    const [weekDay, setWeekDay] = useState<WeekdayOption>('Segunda')
    const [monthDay, setMonthDay] = useState('1')
    const [yearMonth, setYearMonth] = useState('Janeiro')
    const [yearDay, setYearDay] = useState('1')
    const [customInterval, setCustomInterval] = useState(2)
    const [customUnit, setCustomUnit] = useState<CustomIntervalUnit>('dia(s)')

    const weekdays = useMemo<WeekdayOption[]>(
        () => [
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
            'Domingo',
        ],
        []
    )

    const months = useMemo(
        () => [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        []
    )

    const monthDays = useMemo(
        () => Array.from({ length: 28 }, (_, index) => String(index + 1)),
        []
    )

    const frequency = useMemo(() => {
        if (period === 'Não se repete') {
            return `${period} • ${timeOfDay}`
        }

        if (period === 'Semanalmente') {
            return `${period} • ${weekDay} às ${timeOfDay}`
        }

        if (period === 'Mensalmente') {
            return `${period} • Dia ${monthDay} às ${timeOfDay}`
        }

        if (period === 'Anualmente') {
            return `${period} • ${yearDay} de ${yearMonth} às ${timeOfDay}`
        }

        if (period === 'Personalizada') {
            return `A cada ${customInterval} ${customUnit} • ${timeOfDay}`
        }

        return `${period} • ${timeOfDay}`
    }, [
        customInterval,
        customUnit,
        monthDay,
        period,
        timeOfDay,
        weekDay,
        yearDay,
        yearMonth,
    ])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Simula o cadastro de um gatilho sem dependência de backend.
        const newTrigger: TriggerModel = {
            id: `trg-${Date.now()}`,
            name: triggerName,
            description,
            agent,
            condition,
            frequency,
            status: 'Ativo',
            lastRun: 'Agora',
        }

        setTriggers((current) => [newTrigger, ...current])
        setTriggerName('')
        setDescription('')
        setCondition('')
        setPeriod('Não se repete')
        setTimeOfDay('08:00')
        setWeekDay('Segunda')
        setMonthDay('1')
        setYearMonth('Janeiro')
        setYearDay('1')
        setCustomInterval(2)
        setCustomUnit('dia(s)')
        setAgent(availableAgents[0])
    }

    return (
        <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Gatilhos de Execução
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Defina quando os agentes devem iniciar tarefas automatizadas.
                </p>
            </header>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Novo gatilho
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Configure condições e frequência simuladas.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Nome do gatilho
                            <input
                                value={triggerName}
                                onChange={(event) =>
                                    setTriggerName(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                placeholder="Ex.: Rotina de boas-vindas"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Descrição
                            <textarea
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                                rows={3}
                                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                placeholder="Explique o objetivo ou o contexto do gatilho."
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Agente responsável
                            <select
                                value={agent}
                                onChange={(event) =>
                                    setAgent(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                            >
                                {availableAgents.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Condição de disparo
                            <input
                                value={condition}
                                onChange={(event) =>
                                    setCondition(event.target.value)
                                }
                                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                placeholder="Ex.: Volume de tickets acima de 20"
                                required
                            />
                        </label>

                        <div className="grid gap-4 rounded-xl border border-dashed border-gray-200 p-4 dark:border-gray-800">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                    Recorrência
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Selecione o período e ajuste o detalhe para
                                    configurar como quiser.
                                </p>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Período
                                    <select
                                        value={period}
                                        onChange={(event) => {
                                            const value = event.target
                                                .value as PeriodOption
                                            setPeriod(value)
                                        }}
                                        className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                    >
                                        {[
                                            'Não se repete',
                                            'Diariamente',
                                            'Semanalmente',
                                            'Mensalmente',
                                            'Anualmente',
                                            'Dias úteis',
                                            'Personalizada',
                                        ].map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Horário
                                    <input
                                        type="time"
                                        value={timeOfDay}
                                        onChange={(event) =>
                                            setTimeOfDay(event.target.value)
                                        }
                                        className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                    />
                                </label>
                            </div>

                            {period === 'Semanalmente' && (
                                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Dia da semana
                                    <select
                                        value={weekDay}
                                        onChange={(event) =>
                                            setWeekDay(
                                                event.target
                                                    .value as WeekdayOption
                                            )
                                        }
                                        className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                    >
                                        {weekdays.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            )}

                            {period === 'Mensalmente' && (
                                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Dia do mês
                                    <select
                                        value={monthDay}
                                        onChange={(event) =>
                                            setMonthDay(event.target.value)
                                        }
                                        className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                    >
                                        {monthDays.map((day) => (
                                            <option key={day} value={day}>
                                                Dia {day}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            )}

                            {period === 'Anualmente' && (
                                <div className="grid gap-3 md:grid-cols-2">
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Mês
                                        <select
                                            value={yearMonth}
                                            onChange={(event) =>
                                                setYearMonth(
                                                    event.target.value
                                                )
                                            }
                                            className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                        >
                                            {months.map((month) => (
                                                <option
                                                    key={month}
                                                    value={month}
                                                >
                                                    {month}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Dia
                                        <select
                                            value={yearDay}
                                            onChange={(event) =>
                                                setYearDay(event.target.value)
                                            }
                                            className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                        >
                                            {monthDays.map((day) => (
                                                <option
                                                    key={day}
                                                    value={day}
                                                >
                                                    Dia {day}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            )}

                            {period === 'Personalizada' && (
                                <div className="grid gap-3 md:grid-cols-[120px_1fr]">
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Intervalo
                                        <input
                                            type="number"
                                            min={1}
                                            value={customInterval}
                                            onChange={(event) =>
                                                setCustomInterval(
                                                    Number(event.target.value)
                                                )
                                            }
                                            className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Unidade
                                        <select
                                            value={customUnit}
                                            onChange={(event) =>
                                                setCustomUnit(
                                                    event.target
                                                        .value as CustomIntervalUnit
                                                )
                                            }
                                            className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:text-gray-100"
                                        >
                                            {[
                                                'dia(s)',
                                                'semana(s)',
                                                'mês(es)',
                                            ].map((unit) => (
                                                <option
                                                    key={unit}
                                                    value={unit}
                                                >
                                                    {unit}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            )}

                            <div className="rounded-lg bg-indigo-50 px-3 py-2 text-xs text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                                Resumo: {frequency}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                        Ativar gatilho
                    </button>
                </form>

                <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Checklist de governança
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <li>✔ Defina limites de execução para evitar picos.</li>
                        <li>✔ Configure alertas para falhas recorrentes.</li>
                        <li>✔ Valide o impacto em processos críticos.</li>
                    </ul>
                </aside>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Gatilhos ativos
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {triggers.length} configurações
                    </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {triggers.map((trigger) => (
                        <div
                            key={trigger.id}
                            className="rounded-xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-950"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                        {trigger.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {trigger.agent}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {trigger.frequency}
                                    </p>
                                </div>
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                                    {trigger.status}
                                </span>
                            </div>
                            {trigger.description && (
                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                                    {trigger.description}
                                </p>
                            )}
                            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                                {trigger.condition}
                            </p>
                            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
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
