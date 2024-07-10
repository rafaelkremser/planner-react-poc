import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <a href="#" className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <span className="block text-xs text-zinc-400 truncate">
              https://www.airbnb.com.br/rooms/104700011dasdasfasfasfasfasfasffa
            </span>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </a>
        <a href="#" className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Regras da casa</span>
            <span className="block text-xs text-zinc-400 truncate">
              https://www.airbnb.com.br/rooms/104700011dasdasfasfasfasfasfasffa
            </span>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </a>
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5"/>
        Cadastrar novo link
      </Button>
    </div>
  )
}