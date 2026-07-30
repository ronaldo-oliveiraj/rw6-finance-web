import {
  LayoutDashboard,
  LineChart,
  Landmark,
  CreditCard,
  FileText,
  Wallet,
  Users,
  BarChart3,
  MessageCircle,
  ChevronDown,
  Search,
  Bell,
  Plus,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: LineChart, label: "Fluxo de caixa" },
  { icon: Landmark, label: "Contas bancárias" },
  { icon: CreditCard, label: "Cartões" },
  { icon: FileText, label: "Contas a pagar" },
  { icon: Wallet, label: "Contas a receber" },
  { icon: Users, label: "Clientes" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: MessageCircle, label: "Assistente IA" },
];

const metricCards = [
  { label: "Saldo geral", value: "R$ 184.320" },
  { label: "Saldo pessoa física", value: "R$ 32.150" },
  { label: "Saldo empresa", value: "R$ 152.170" },
  { label: "Lucro do mês", value: "+12,4%", positive: true },
];

const chartBars = [55, 70, 48, 82, 64, 95];

const topClientes = [
  { nome: "Cliente Alpha Ltda", valor: "R$ 21.400" },
  { nome: "Studio Beta", valor: "R$ 14.900" },
  { nome: "Comércio Gama", valor: "R$ 9.750" },
];

const topCategorias = [
  { nome: "Google Ads", valor: "R$ 6.200" },
  { nome: "Folha de pagamento", valor: "R$ 18.300" },
  { nome: "Fornecedores", valor: "R$ 11.050" },
];

export default function DashboardPage() {
  return (
    <div className="grid min-h-screen grid-cols-[220px_1fr]">
      <div className="col-span-2 flex items-center justify-between border-b border-cinza-borda bg-white px-6 py-3">
        <div className="flex items-center gap-2.5 font-semibold">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-azul-escuro text-xs font-bold text-white">
            R6
          </div>
          RW6 Finance
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Minha Empresa LTDA <ChevronDown size={14} />
          </div>
          <Search size={18} className="text-gray-500" />
          <Bell size={18} className="text-gray-500" />
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-azul-claro text-xs font-semibold text-azul">
            RW
          </div>
        </div>
      </div>

      <aside className="flex flex-col gap-0.5 border-r border-cinza-borda bg-white p-2.5">
        {navItems.map(({ icon: Icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
              active
                ? "bg-azul-claro font-semibold text-azul"
                : "text-gray-500 hover:bg-cinza-claro"
            }`}
          >
            <Icon size={17} />
            {label}
          </a>
        ))}
      </aside>

      <main className="flex flex-col gap-4 p-7">
        <div className="grid grid-cols-4 gap-3.5">
          {metricCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-cinza-borda bg-white p-4"
            >
              <p className="mb-2 text-sm text-gray-500">{card.label}</p>
              <p
                className={`text-2xl font-semibold ${
                  card.positive ? "text-green-700" : ""
                }`}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-3.5">
          <div className="rounded-xl border border-cinza-borda bg-white p-4">
            <p className="mb-3.5 text-sm text-gray-500">
              Fluxo de caixa — últimos 6 meses
            </p>
            <div className="flex h-40 items-end gap-3">
              {chartBars.map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${
                    i === chartBars.length - 1 ? "bg-azul-escuro" : "bg-blue-300"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-cinza-borda bg-white p-4">
            <p className="mb-3.5 text-sm text-gray-500">Contas do dia</p>
            <div className="flex justify-between border-b border-cinza-claro py-1.5 text-sm">
              <span>Vencidas</span>
              <span className="font-semibold text-red-700">4</span>
            </div>
            <div className="flex justify-between border-b border-cinza-claro py-1.5 text-sm">
              <span>Vencem hoje</span>
              <span className="font-semibold">7</span>
            </div>
            <div className="flex justify-between py-1.5 text-sm">
              <span>Recebimentos hoje</span>
              <span className="font-semibold text-green-700">R$ 8.420</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          <div className="rounded-xl border border-cinza-borda bg-white p-4">
            <p className="mb-3.5 text-sm text-gray-500">Top clientes</p>
            {topClientes.map((c) => (
              <div
                key={c.nome}
                className="flex justify-between border-b border-cinza-claro py-1.5 text-sm last:border-0"
              >
                <span>{c.nome}</span>
                <span className="font-semibold">{c.valor}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-cinza-borda bg-white p-4">
            <p className="mb-3.5 text-sm text-gray-500">Top categorias</p>
            {topCategorias.map((c) => (
              <div
                key={c.nome}
                className="flex justify-between border-b border-cinza-claro py-1.5 text-sm last:border-0"
              >
                <span>{c.nome}</span>
                <span className="font-semibold">{c.valor}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 self-end rounded-lg bg-laranja px-4 py-2.5 text-sm font-semibold text-white">
          <Plus size={16} />
          Novo lançamento
        </button>
      </main>
    </div>
  );
}
