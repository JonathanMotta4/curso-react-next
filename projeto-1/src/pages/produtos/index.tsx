import Card from "@/components/Card";
import Topo from "@/components/Topo";
import Link from "next/link";
export default function Produtos() {
  function cDesc(valor: number, desconto: number) {
    return valor - desconto;
  }
  function cDesc2(valor: number, desconto: number) {
    return valor - desconto / 2;
  }
  const produtos = [
    { produto: "Produto 1", valor: 61.75, desconto: 0, disponivel: true },
    { produto: "Produto 2", valor: 186.87, desconto: 60, disponivel: true },
    { produto: "Produto 3", valor: 133.74, desconto: 0, disponivel: false },
    { produto: "Produto 4", valor: 145.4, desconto: 30, disponivel: true },
    { produto: "Produto 5", valor: 198.24, desconto: 0, disponivel: false },
    { produto: "Produto 6", valor: 147.8, desconto: 15, disponivel: true },
  ];
  return (
    <main>
      <Topo />

      <div className="flex justify-center gap-2">
        {produtos.map((p: any) => {
          if (p.disponivel) {
            return (
              <Card
                key={p.produto}
                produto={p.produto}
                valor={p.valor}
                desconto={p.desconto}
                funcao={cDesc}
              />
            );
          }
        })}
      </div>
    </main>
  );
}

const teste = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "dodgerblue",
  backgroundColor: "#181818",
  fontSize: "3rem",
};
