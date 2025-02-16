import { useState } from "react";

type SearchProps = {
  loadUser: (nomeUser: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!name.trim()) return;

    setLoading(true);
    await loadUser(name);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[600px] h-full bg-zinc-600 rounded-lg flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mt-4 mb-1">Busque pelo usuário:</h1>
        <p className="font-semibold text-zinc-400">
          Conheça seus melhores repositórios
        </p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome de usuário"
          className="w-64 mt-4 bg-zinc-200 rounded-md py-1 px-2 text-black focus:outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className={`mt-4 px-4 py-2 rounded ${
            loading ? "bg-gray-400" : "bg-black/15 text-white"
          }`}
        >
          {loading ? "Carregando..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Search;
