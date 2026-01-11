import Card from '@/components/ui/Card'
import Progress from '@/components/ui/Progress'
import Tag from '@/components/ui/Tag'
import Container from '@/components/shared/Container'

const kpis = [
    {
        label: 'Usuários ativos',
        value: '8.294',
        delta: '+12% vs. semana passada',
        deltaClass: 'text-emerald-500',
    },
    {
        label: 'Receita estimada',
        value: 'R$ 124.580',
        delta: '+8% no mês',
        deltaClass: 'text-emerald-500',
    },
    {
        label: 'Pedidos em aberto',
        value: '312',
        delta: '-4% hoje',
        deltaClass: 'text-red-500',
    },
    {
        label: 'Satisfação do cliente',
        value: '4,6/5',
        delta: '+0,3 pontos',
        deltaClass: 'text-emerald-500',
    },
]

const weeklyPerformance = [
    { day: 'Seg', value: 48 },
    { day: 'Ter', value: 62 },
    { day: 'Qua', value: 38 },
    { day: 'Qui', value: 72 },
    { day: 'Sex', value: 55 },
    { day: 'Sáb', value: 68 },
    { day: 'Dom', value: 42 },
]

const squads = [
    {
        name: 'Time Expansão',
        progress: 78,
        status: 'Em andamento',
        statusClass: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200',
    },
    {
        name: 'Time Produto',
        progress: 54,
        status: 'Revisão',
        statusClass: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200',
    },
    {
        name: 'Time Suporte',
        progress: 92,
        status: 'Finalizando',
        statusClass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200',
    },
]

const recentActivity = [
    {
        title: 'Campanha de aquisição lançada',
        team: 'Marketing',
        date: 'Hoje, 09:32',
        status: 'Concluído',
        statusClass: 'text-emerald-500',
    },
    {
        title: 'Relatório financeiro revisado',
        team: 'Financeiro',
        date: 'Ontem, 18:40',
        status: 'Pendente',
        statusClass: 'text-amber-500',
    },
    {
        title: 'Nova atualização do app',
        team: 'Produto',
        date: 'Ontem, 15:15',
        status: 'Em validação',
        statusClass: 'text-sky-500',
    },
]

const Home = () => {
    return (
        <Container className="py-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">Visão geral</h3>
                    <p className="text-gray-500">
                        Dados fictícios para simular o painel principal da
                        plataforma.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {kpis.map((item) => (
                        <Card key={item.label}>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-500">
                                    {item.label}
                                </span>
                                <span className="text-2xl font-semibold">
                                    {item.value}
                                </span>
                                <span className={`text-sm ${item.deltaClass}`}>
                                    {item.delta}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-semibold">
                                    Performance semanal
                                </h4>
                                <p className="text-sm text-gray-500">
                                    Evolução de engajamento nas últimas 7 dias
                                </p>
                            </div>
                            <Tag className="text-xs">Atualizado agora</Tag>
                        </div>
                        <div className="mt-6 flex items-end gap-3">
                            {weeklyPerformance.map((item) => (
                                <div
                                    key={item.day}
                                    className="flex flex-1 flex-col items-center gap-2"
                                >
                                    <div className="h-28 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                                        <div
                                            className="flex h-full w-full items-end"
                                            style={{ height: '100%' }}
                                        >
                                            <div
                                                className="w-full rounded-full bg-primary"
                                                style={{
                                                    height: `${item.value}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {item.day}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold">
                                Metas por squad
                            </h4>
                            <Tag className="text-xs">Q2</Tag>
                        </div>
                        <div className="mt-4 flex flex-col gap-4">
                            {squads.map((squad) => (
                                <div key={squad.name}>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            {squad.name}
                                        </span>
                                        <Tag className={`text-xs ${squad.statusClass}`}>
                                            {squad.status}
                                        </Tag>
                                    </div>
                                    <Progress percent={squad.progress} />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-semibold">
                                Atividades recentes
                            </h4>
                            <p className="text-sm text-gray-500">
                                Últimas atualizações registradas no sistema
                            </p>
                        </div>
                        <Tag className="text-xs">Últimos 2 dias</Tag>
                    </div>
                    <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                        {recentActivity.map((activity) => (
                            <div
                                key={activity.title}
                                className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between"
                            >
                                <div>
                                    <p className="font-medium">
                                        {activity.title}
                                    </p>
                                    <span className="text-sm text-gray-500">
                                        {activity.team}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-500">
                                        {activity.date}
                                    </span>
                                    <span className={activity.statusClass}>
                                        {activity.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Container>
    )
}

export default Home
