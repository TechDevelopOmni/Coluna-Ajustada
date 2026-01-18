import type { FC } from 'react'
import {
    TbDots,
    TbLayoutGrid,
    TbList,
    TbUpload,
    TbFolder,
    TbFileTypePdf,
    TbFileTypeXls,
    TbFileTypeJpg,
    TbFileTypePpt,
    TbFileTypeDoc,
    TbBrandFigma,
} from 'react-icons/tb'

type FolderItem = {
    id: string
    name: string
    size: string
    accent: string
    iconBg: string
}

type FileItem = {
    id: string
    name: string
    size: string
    icon: FC<{ className?: string }>
    accent: string
    iconBg: string
}

const folders: FolderItem[] = [
    {
        id: 'folder-project',
        name: 'Project_Files',
        size: '21.8 MB',
        accent: 'text-amber-500 dark:text-amber-300',
        iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    },
    {
        id: 'folder-docs',
        name: 'Documents',
        size: '10.5 MB',
        accent: 'text-amber-500 dark:text-amber-300',
        iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    },
    {
        id: 'folder-team',
        name: 'Team_Resources',
        size: '783.1 kB',
        accent: 'text-amber-500 dark:text-amber-300',
        iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    },
    {
        id: 'folder-client',
        name: 'Client_Data',
        size: '5.4 MB',
        accent: 'text-amber-500 dark:text-amber-300',
        iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    },
    {
        id: 'folder-backup',
        name: 'Backup_Files',
        size: '2.5 MB',
        accent: 'text-amber-500 dark:text-amber-300',
        iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    },
]

const files: FileItem[] = [
    {
        id: 'file-tech',
        name: 'Tech design.pdf',
        size: '2.2 MB',
        icon: TbFileTypePdf,
        accent: 'text-rose-500 dark:text-rose-300',
        iconBg: 'bg-rose-50 dark:bg-rose-500/20',
    },
    {
        id: 'file-report',
        name: 'Financial_Report.xlsx',
        size: '1.5 MB',
        icon: TbFileTypeXls,
        accent: 'text-emerald-500 dark:text-emerald-300',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    },
    {
        id: 'file-laputa',
        name: 'Modern_Laputa.jpg',
        size: '139.2 kB',
        icon: TbFileTypeJpg,
        accent: 'text-emerald-500 dark:text-emerald-300',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    },
    {
        id: 'file-presentation',
        name: 'Project_Presentation.pptx',
        size: '3.1 MB',
        icon: TbFileTypePpt,
        accent: 'text-orange-500 dark:text-orange-300',
        iconBg: 'bg-orange-50 dark:bg-orange-500/20',
    },
    {
        id: 'file-network',
        name: 'Network_Diagram.fig',
        size: '123.5 kB',
        icon: TbBrandFigma,
        accent: 'text-slate-600 dark:text-slate-300',
        iconBg: 'bg-slate-100 dark:bg-slate-500/20',
    },
    {
        id: 'file-summary',
        name: 'Project_Summary.docx',
        size: '987.7 kB',
        icon: TbFileTypeDoc,
        accent: 'text-blue-500 dark:text-blue-300',
        iconBg: 'bg-blue-50 dark:bg-blue-500/20',
    },
    {
        id: 'file-gradient',
        name: 'Gradient_store.jpg',
        size: '157.9 kB',
        icon: TbFileTypeJpg,
        accent: 'text-emerald-500 dark:text-emerald-300',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    },
    {
        id: 'file-colorful',
        name: 'Colorful_donut.jpg',
        size: '216.8 kB',
        icon: TbFileTypeJpg,
        accent: 'text-emerald-500 dark:text-emerald-300',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    },
    {
        id: 'file-annual',
        name: 'Annual_Report.pdf',
        size: '1.7 MB',
        icon: TbFileTypePdf,
        accent: 'text-rose-500 dark:text-rose-300',
        iconBg: 'bg-rose-50 dark:bg-rose-500/20',
    },
    {
        id: 'file-research',
        name: 'Research_Paper.docx',
        size: '987.7 kB',
        icon: TbFileTypeDoc,
        accent: 'text-blue-500 dark:text-blue-300',
        iconBg: 'bg-blue-50 dark:bg-blue-500/20',
    },
    {
        id: 'file-budget',
        name: 'Budget_Report.pdf',
        size: '1.7 MB',
        icon: TbFileTypePdf,
        accent: 'text-rose-500 dark:text-rose-300',
        iconBg: 'bg-rose-50 dark:bg-rose-500/20',
    },
    {
        id: 'file-marketing',
        name: 'Marketing_Strategy.pptx',
        size: '2.2 MB',
        icon: TbFileTypePpt,
        accent: 'text-orange-500 dark:text-orange-300',
        iconBg: 'bg-orange-50 dark:bg-orange-500/20',
    },
    {
        id: 'file-architecture',
        name: 'Architecture_Diagram.fig',
        size: '456.8 kB',
        icon: TbBrandFigma,
        accent: 'text-slate-600 dark:text-slate-300',
        iconBg: 'bg-slate-100 dark:bg-slate-500/20',
    },
    {
        id: 'file-lone',
        name: 'Lone_bear.jpg',
        size: '1.7 MB',
        icon: TbFileTypeJpg,
        accent: 'text-emerald-500 dark:text-emerald-300',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    },
    {
        id: 'file-minutes',
        name: 'Meeting_Minutes.docx',
        size: '789.2 kB',
        icon: TbFileTypeDoc,
        accent: 'text-blue-500 dark:text-blue-300',
        iconBg: 'bg-blue-50 dark:bg-blue-500/20',
    },
]

const Arquivos: FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        File Manager
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Organize pastas, documentos e ativos em um só lugar.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                            aria-label="Visualização em grade"
                        >
                            <TbLayoutGrid className="text-lg" />
                        </button>
                        <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 dark:text-gray-400"
                            aria-label="Visualização em lista"
                        >
                            <TbList className="text-lg" />
                        </button>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                        <TbUpload className="text-lg" />
                        Upload
                    </button>
                </div>
            </header>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Folders
                </h2>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {folders.map((folder) => (
                        <div
                            key={folder.id}
                            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${folder.iconBg}`}
                                >
                                    <TbFolder
                                        className={`text-2xl ${folder.accent}`}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        {folder.name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {folder.size}
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                                aria-label="Mais opções"
                            >
                                <TbDots className="text-xl" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Files
                </h2>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {files.map((file) => {
                        const Icon = file.icon
                        return (
                            <div
                                key={file.id}
                                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${file.iconBg}`}
                                    >
                                        <Icon
                                            className={`text-2xl ${file.accent}`}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {file.size}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                                    aria-label="Mais opções"
                                >
                                    <TbDots className="text-xl" />
                                </button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Arquivos
