import React from 'react'

const MainView: React.FC = () => {
    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(255,92,122,0.45),_transparent_45%)] blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(138,92,255,0.35),_transparent_55%)] blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(0,255,209,0.28),_transparent_55%)] blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Bem-vindo(a) ao Coluna Ajustada
                </span>
                <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    O espaço inicial para você descobrir tudo o que pode fazer na
                    plataforma.
                </h1>
                <p className="mt-4 text-base text-white/70 sm:text-lg">
                    Escolha um caminho para começar: criar um fluxo, acompanhar resultados ou
                    organizar seus conteúdos antes de entrar no sistema.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
                        Começar agora
                    </button>
                    <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                        Ver possibilidades
                    </button>
                </div>
            </div>
        </main>
    )
}

export default MainView
