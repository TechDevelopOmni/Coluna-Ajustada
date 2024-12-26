import Loading from '@/components/shared/Loading'
import UpcomingSchedule from './components/UpcomingSchedule'
import TaskOverview from './components/TaskOverview'
import CurrentTasks from './components/CurrentTasks'
import Schedule from './components/Schedule'
import ProjectOverview from './components/ProjectOverview'
import RecentActivity from './components/RecentActivity'
import { apiGetProjectDashboard } from '@/services/DashboardService'
import useSWR from 'swr'
import type { GetProjectDashboardResponse } from './types'

const ProjectDashboard = () => {
    const { data, isLoading } = useSWR(
        ['/api/dashboard/project'],
        () => apiGetProjectDashboard<GetProjectDashboardResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    return (
        <></>
    )
}

export default ProjectDashboard
