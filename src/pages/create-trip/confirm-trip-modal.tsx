import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (ownerName: string) => void
  setOwnerEmail: (ownerEmail: string) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip,
    setOwnerName,
    setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button type="button">
              <X onClick={closeConfirmTripModal} className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Belo Horizonte</span> nas datas de <span className="font-semibold text-zinc-100">15 a 19 de Julho de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="size-5 text-zinc-400" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              onChange={event => setOwnerName(event.target.value)}
            />
          </div>

          <div className="h-14 px-4 flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Mail className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              onChange={event => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}