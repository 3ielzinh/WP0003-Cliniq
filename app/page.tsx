"use client";

import { useState } from "react";

const appointments = [
  { time: "09:00", initials: "MC", name: "Marina Costa", service: "Consulta de rotina", status: "Confirmada", tone: "lavender" },
  { time: "10:30", initials: "RL", name: "Rafael Lima", service: "Retorno", status: "Em atendimento", tone: "blue" },
  { time: "13:00", initials: "AM", name: "Ana Martins", service: "Primeira consulta", status: "Aguardando", tone: "orange" },
  { time: "15:30", initials: "GS", name: "Gabriel Souza", service: "Avaliação", status: "Confirmada", tone: "green" },
];

const days = [
  { day: "SEG", date: "22" }, { day: "TER", date: "23" }, { day: "QUA", date: "24" },
  { day: "QUI", date: "25" }, { day: "SEX", date: "26", active: true }, { day: "SÁB", date: "27" }, { day: "DOM", date: "28" },
];

export default function Home() {
  const [section, setSection] = useState("Visão geral");
  const [toast, setToast] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [search, setSearch] = useState("");

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2600);
  };

  const filtered = appointments.filter((item) =>
    `${item.name} ${item.service}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">+</span><span>cliniq</span></div>
        <nav>
          <p className="nav-label">MENU</p>
          {[
            ["Visão geral", "⌂"], ["Agenda", "□"], ["Pacientes", "♙"], ["Financeiro", "↗"], ["Relatórios", "▥"],
          ].map(([label, icon]) => (
            <button key={label} className={section === label ? "nav-item active" : "nav-item"} onClick={() => setSection(label)}>
              <span>{icon}</span>{label}{label === "Agenda" && <i>4</i>}
            </button>
          ))}
          <p className="nav-label">GESTÃO</p>
          {[["Equipe", "♢"], ["Serviços", "◇"], ["Configurações", "⚙"]].map(([label, icon]) => (
            <button key={label} className={section === label ? "nav-item active" : "nav-item"} onClick={() => setSection(label)}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </nav>
        <div className="upgrade-card">
          <div className="spark">✦</div>
          <strong>Eleve sua gestão</strong>
          <p>Desbloqueie todos os recursos do plano Pro.</p>
          <button onClick={() => showToast("Plano Pro selecionado — demonstração")}>Conhecer o Pro</button>
        </div>
        <div className="profile">
          <div className="avatar">CM</div>
          <div><strong>Clínica Movere</strong><span>Plano Essencial</span></div>
          <button>⋮</button>
        </div>
      </aside>

      <section className="content">
        <header>
          <label className="search"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar pacientes, agendamentos..." /><kbd>⌘ K</kbd></label>
          <div className="header-actions">
            <button className="icon-button" onClick={() => { setNotifications(0); showToast("Notificações visualizadas"); }}>♧{notifications > 0 && <b>{notifications}</b>}</button>
            <button className="primary" onClick={() => showToast("Novo agendamento criado com sucesso")}>＋ Novo agendamento</button>
          </div>
        </header>

        <div className="dashboard">
          <div className="welcome-row">
            <div><p className="eyebrow">SEXTA-FEIRA, 26 DE JULHO</p><h1>Bom dia, Camila <span>✦</span></h1><p>Aqui está o que está acontecendo na sua clínica hoje.</p></div>
            <button className="outline" onClick={() => showToast("Relatório do dia preparado")}>↗ Exportar relatório</button>
          </div>

          <div className="metrics">
            <article><div className="metric-top"><span className="metric-icon purple">□</span><em className="up">↗ 12%</em></div><p>Agendamentos hoje</p><h2>12</h2><small>8 confirmados</small></article>
            <article><div className="metric-top"><span className="metric-icon teal">♙</span><em className="up">↗ 8%</em></div><p>Novos pacientes</p><h2>28</h2><small>este mês</small></article>
            <article><div className="metric-top"><span className="metric-icon yellow">R$</span><em className="up">↗ 18%</em></div><p>Faturamento mensal</p><h2>R$ 34.850</h2><small>Meta: R$ 40 mil</small><div className="progress"><i /></div></article>
            <article><div className="metric-top"><span className="metric-icon rose">♡</span><em className="score">9.4</em></div><p>Satisfação</p><h2>96%</h2><small>124 avaliações</small></article>
          </div>

          <div className="grid">
            <article className="chart-card">
              <div className="card-head"><div><h3>Visão financeira</h3><p>Receita dos últimos 6 meses</p></div><button>Últimos 6 meses⌄</button></div>
              <div className="chart-summary"><div><span>Receita total</span><strong>R$ 158.420</strong></div><span className="up">↗ 18,2% <small>vs. período anterior</small></span></div>
              <div className="chart">
                <div className="y-labels"><span>40k</span><span>30k</span><span>20k</span><span>10k</span><span>0</span></div>
                <div className="plot">
                  <div className="grid-lines" />
                  <svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-label="Crescimento da receita mensal">
                    <defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6c5ce7" stopOpacity=".28"/><stop offset="1" stopColor="#6c5ce7" stopOpacity="0"/></linearGradient></defs>
                    <path className="area" d="M0,145 C60,128 65,105 120,112 S185,126 240,91 S305,62 360,76 S425,101 480,50 S540,29 600,18 L600,180 L0,180 Z"/>
                    <path className="line" d="M0,145 C60,128 65,105 120,112 S185,126 240,91 S305,62 360,76 S425,101 480,50 S540,29 600,18"/>
                    <circle cx="600" cy="18" r="5"/>
                  </svg>
                  <div className="x-labels"><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span></div>
                </div>
              </div>
            </article>

            <article className="agenda-card">
              <div className="card-head"><div><h3>Próximos atendimentos</h3><p>Sua agenda para hoje</p></div><button className="link" onClick={() => setSection("Agenda")}>Ver agenda →</button></div>
              <div className="appointment-list">
                {filtered.slice(0, 4).map((item) => <div className="appointment" key={item.time}><b>{item.time}</b><div className={`patient-avatar ${item.tone}`}>{item.initials}</div><div><strong>{item.name}</strong><span>{item.service}</span></div><em className={item.status.replace(" ", "-").toLowerCase()}>{item.status}</em></div>)}
                {filtered.length === 0 && <p className="empty">Nenhum atendimento encontrado.</p>}
              </div>
            </article>
          </div>

          <article className="week-card">
            <div className="week-copy"><span className="metric-icon purple">□</span><div><h3>Agenda da semana</h3><p>32 atendimentos · 5 horários disponíveis</p></div></div>
            <div className="week-days">{days.map((d) => <button className={d.active ? "active" : ""} key={d.date}><span>{d.day}</span><strong>{d.date}</strong>{d.active && <i />}</button>)}</div>
            <button className="outline" onClick={() => setSection("Agenda")}>Abrir agenda completa →</button>
          </article>

          <div className="automation">
            <div className="automation-icon">✦</div><div><strong>Automação inteligente ativa</strong><p>Lembretes automáticos reduziram as faltas em <b>23% este mês.</b></p></div>
            <button onClick={() => showToast("Abrindo central de automações")}>Ver automações</button><span>×</span>
          </div>
        </div>
      </section>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </main>
  );
}
