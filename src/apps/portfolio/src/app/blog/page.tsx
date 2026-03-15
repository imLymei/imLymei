import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <p className="text-center">
        <p className="text-2xl">Em produção B)</p>
        <p>Ainda temos muitas hitórias para serem escritas.</p>
      </p>
      <Link
        href="/"
        className="underline decoration-violet-500 hover:text-violet-500"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
