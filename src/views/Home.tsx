import Card from '@/components/ui/Card'
import Container from '@/components/shared/Container'
import Progress from '@/components/ui/Progress'
import Table from '@/components/ui/Table'
import Tabs from '@/components/ui/Tabs'
import Tag from '@/components/ui/Tag'
import Timeline from '@/components/ui/Timeline'

const { TabList, TabNav, TabContent } = Tabs
const { THead, TBody, Tr, Th, Td } = Table

const overviewStats = [
    {
        label: 'Leads capturados',
        value: '428',
        change: '+18% esta semana',
        changeClass: 'text-emerald-500',
    },
    {
        label: 'Negociações ativas',
        value: '96',
        change: '+6 novas hoje',
        changeClass: 'text-sky-500',
    },
    {
        label: 'Taxa de conversão',
        value: '24,8%',
        change: '+2,1 p.p.',
        changeClass: 'text-emerald-500',
    },
    {
        label: 'Receita prevista',
        value: 'R$ 312.000',
        change: '-4% vs mês anterior',
        changeClass: 'text-red-500',
    },
]

const pipelineStages = [
    {
        stage: 'Prospecção',
        deals: 34,
        value: 'R$ 98.200',
        progress: 42,
    },
    {
        stage: 'Qualificação',
        deals: 21,
        value: 'R$ 71.500',
        progress: 58,
    },
    {
        stage: 'Proposta enviada',
        deals: 17,
        value: 'R$ 94.000',
        progress: 66,
    },
    {
        stage: 'Negociação',
        deals: 11,
        value: 'R$ 56.800',
        progress: 74,
    },
]

const leads = [
    {
        name: 'Mariana Ribeiro',
        company: 'Ventos do Sul',
        source: 'Inbound',
        owner: 'Lucas',
        status: 'Novo',
        statusClass: 'text-emerald-500',
    },
    {
        name: 'Eduardo Campos',
        company: 'Alpha Foods',
        source: 'Evento',
        owner: 'Letícia',
        status: 'Qualificação',
        statusClass: 'text-amber-500',
    },
    {
        name: 'Camila Sousa',
        company: 'Hotel Atlântico',
        source: 'Indicação',
        owner: 'Rafael',
        status: 'Contato agendado',
        statusClass: 'text-sky-500',
    },
    {
        name: 'Felipe Martins',
        company: 'Oficina Nova Era',
        source: 'Outbound',
        owner: 'Bianca',
        status: 'Follow-up',
        statusClass: 'text-purple-500',
    },
]

const deals = [
    {
        opportunity: 'Plataforma logística integrada',
        account: 'Grupo Horizonte',
        stage: 'Proposta enviada',
        value: 'R$ 48.000',
        close: '18/08',
    },
    {
        opportunity: 'Pacote de atendimento premium',
        account: 'Rede Solara',
        stage: 'Negociação',
        value: 'R$ 32.500',
        close: '22/08',
    },
    {
        opportunity: 'Integração com ERP',
        account: 'Lojas Aurora',
        stage: 'Qualificação',
        value: 'R$ 26.000',
        close: '30/08',
    },
]

const accounts = [
    {
        name: 'Grupo Horizonte',
        segment: 'Logística',
        health: 82,
        manager: 'Juliana',
    },
    {
        name: 'Rede Solara',
        segment: 'Varejo',
        health: 68,
        manager: 'Diego',
    },
    {
        name: 'Hotel Atlântico',
        segment: 'Hospitalidade',
        health: 91,
        manager: 'Fernanda',
    },
]

const tasks = [
    {
        title: 'Enviar proposta revisada para Grupo Horizonte',
        due: 'Hoje, 16:00',
        owner: 'Juliana',
        priority: 'Alta',
        priorityClass: 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-200',
    },
    {
        title: 'Follow-up com leads do evento ExpoSales',
        due: 'Amanhã, 10:30',
        owner: 'Letícia',
        priority: 'Média',
        priorityClass: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200',
    },
    {
        title: 'Agendar demo com Rede Solara',
        due: '24/08, 14:00',
        owner: 'Lucas',
        priority: 'Baixa',
        priorityClass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200',
    },
]

const timelineEvents = [
    {
        title: 'Reunião de kickoff com Grupo Horizonte',
        time: 'Hoje, 09:00',
        detail: 'Alinhamento de metas e próximos passos.',
    },
    {
        title: 'Follow-up de proposta enviada',
        time: 'Ontem, 18:20',
        detail: 'Feedback inicial positivo do time financeiro.',
    },
    {
        title: 'Lead convertido via webinar',
        time: 'Ontem, 11:40',
        detail: 'Novo contato adicionado ao funil de qualificação.',
    },
]

const Home = () => {
    return (
        <Container className="py-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">
                        CRM - Fluxo completo
                    </h3>
                    <p className="text-gray-500">
                        Dados mockados para simular o ciclo completo de vendas
                        e relacionamento dentro da área logada.
                    </p>
                </div>

                <Tabs defaultValue="overview" variant="pill">
                    <TabList className="flex flex-wrap gap-2">
                        <TabNav value="overview">Visão geral</TabNav>
                        <TabNav value="leads">Leads</TabNav>
                        <TabNav value="pipeline">Funil</TabNav>
                        <TabNav value="accounts">Clientes</TabNav>
                        <TabNav value="activity">Atividades</TabNav>
                    </TabList>

                    <div className="mt-6">
                        <TabContent value="overview">
                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                {overviewStats.map((stat) => (
                                    <Card key={stat.label}>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm text-gray-500">
                                                {stat.label}
                                            </span>
                                            <span className="text-2xl font-semibold">
                                                {stat.value}
                                            </span>
                                            <span
                                                className={`text-sm ${stat.changeClass}`}
                                            >
                                                {stat.change}
                                            </span>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
                                <Card>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                Funil por etapa
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Distribuição de oportunidades por
                                                estágio.
                                            </p>
                                        </div>
                                        <Tag className="text-xs">Atualizado agora</Tag>
                                    </div>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {pipelineStages.map((stage) => (
                                            <div
                                                key={stage.stage}
                                                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium">
                                                        {stage.stage}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {stage.deals} negócios
                                                    </span>
                                                </div>
                                                <div className="mt-3 text-lg font-semibold">
                                                    {stage.value}
                                                </div>
                                                <Progress
                                                    className="mt-3"
                                                    percent={stage.progress}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                <Card>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-semibold">
                                            Próximas tarefas
                                        </h4>
                                        <Tag className="text-xs">Hoje</Tag>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-4">
                                        {tasks.map((task) => (
                                            <div
                                                key={task.title}
                                                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium">
                                                        {task.title}
                                                    </span>
                                                    <Tag
                                                        className={`text-xs ${task.priorityClass}`}
                                                    >
                                                        {task.priority}
                                                    </Tag>
                                                </div>
                                                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                                                    <span>{task.owner}</span>
                                                    <span>{task.due}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </TabContent>

                        <TabContent value="leads">
                            <Card>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Leads recentes
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Entrada de novos contatos no funil.
                                        </p>
                                    </div>
                                    <Tag className="text-xs">Últimos 7 dias</Tag>
                                </div>
                                <div className="mt-6 overflow-x-auto">
                                    <Table>
                                        <THead>
                                            <Tr>
                                                <Th>Nome</Th>
                                                <Th>Empresa</Th>
                                                <Th>Origem</Th>
                                                <Th>Responsável</Th>
                                                <Th>Status</Th>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            {leads.map((lead) => (
                                                <Tr key={lead.name}>
                                                    <Td>{lead.name}</Td>
                                                    <Td>{lead.company}</Td>
                                                    <Td>{lead.source}</Td>
                                                    <Td>{lead.owner}</Td>
                                                    <Td>
                                                        <span
                                                            className={`text-sm font-medium ${lead.statusClass}`}
                                                        >
                                                            {lead.status}
                                                        </span>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </TBody>
                                    </Table>
                                </div>
                            </Card>
                        </TabContent>

                        <TabContent value="pipeline">
                            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                                <Card>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                Negociações em andamento
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Oportunidades mais próximas do
                                                fechamento.
                                            </p>
                                        </div>
                                        <Tag className="text-xs">Atualizado hoje</Tag>
                                    </div>
                                    <div className="mt-6 overflow-x-auto">
                                        <Table>
                                            <THead>
                                                <Tr>
                                                    <Th>Oportunidade</Th>
                                                    <Th>Conta</Th>
                                                    <Th>Etapa</Th>
                                                    <Th>Valor</Th>
                                                    <Th>Fechamento</Th>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                {deals.map((deal) => (
                                                    <Tr key={deal.opportunity}>
                                                        <Td>{deal.opportunity}</Td>
                                                        <Td>{deal.account}</Td>
                                                        <Td>{deal.stage}</Td>
                                                        <Td>{deal.value}</Td>
                                                        <Td>{deal.close}</Td>
                                                    </Tr>
                                                ))}
                                            </TBody>
                                        </Table>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-semibold">
                                            Indicadores de funil
                                        </h4>
                                        <Tag className="text-xs">Mês corrente</Tag>
                                    </div>
                                    <div className="mt-6 flex flex-col gap-4">
                                        {pipelineStages.map((stage) => (
                                            <div key={stage.stage}>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>{stage.stage}</span>
                                                    <span className="text-gray-500">
                                                        {stage.value}
                                                    </span>
                                                </div>
                                                <Progress
                                                    className="mt-2"
                                                    percent={stage.progress}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </TabContent>

                        <TabContent value="accounts">
                            <Card>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Contas estratégicas
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Saúde do relacionamento com clientes
                                            ativos.
                                        </p>
                                    </div>
                                    <Tag className="text-xs">Top 3</Tag>
                                </div>
                                <div className="mt-6 grid gap-4 md:grid-cols-3">
                                    {accounts.map((account) => (
                                        <div
                                            key={account.name}
                                            className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">
                                                    {account.name}
                                                </span>
                                                <Tag className="text-xs">
                                                    {account.segment}
                                                </Tag>
                                            </div>
                                            <div className="mt-3 text-sm text-gray-500">
                                                Responsável: {account.manager}
                                            </div>
                                            <Progress
                                                className="mt-4"
                                                percent={account.health}
                                                customInfo={`${account.health}%`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </TabContent>

                        <TabContent value="activity">
                            <Card>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Linha do tempo
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Interações recentes com leads e
                                            clientes.
                                        </p>
                                    </div>
                                    <Tag className="text-xs">Últimas 48h</Tag>
                                </div>
                                <Timeline className="mt-6">
                                    {timelineEvents.map((event) => (
                                        <Timeline.Item key={event.title}>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-medium">
                                                    {event.title}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {event.detail}
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    {event.time}
                                                </span>
                                            </div>
                                        </Timeline.Item>
                                    ))}
                                </Timeline>
                            </Card>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </Container>
    )
}

export default Home
