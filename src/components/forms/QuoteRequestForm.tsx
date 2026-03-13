"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Le nom est requis."),
  email: z.email("Adresse email invalide."),
  phone: z
    .string()
    .min(10, "Numero de telephone trop court.")
    .regex(/^[+0-9\s.-]+$/, "Format de telephone invalide."),
  service: z.string().min(2, "Selectionnez un service."),
  message: z
    .string()
    .min(20, "Merci de decrire votre besoin en au moins 20 caracteres."),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const defaultValues: QuoteFormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function QuoteRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: QuoteFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Quote request", data);
    reset();
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulaire de devis"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            type="text"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telephone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
            autoComplete="tel"
          />
        </Field>
        <Field label="Service souhaite" error={errors.service?.message}>
          <select
            {...register("service")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
            defaultValue=""
          >
            <option value="" disabled>
              Selectionnez
            </option>
            <option value="bureaux">Nettoyage de bureaux</option>
            <option value="chantier">Fin de chantier</option>
            <option value="vitrerie">Vitrerie</option>
            <option value="industriel">Nettoyage industriel</option>
          </select>
        </Field>
      </div>

      <Field label="Votre besoin" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-teal-50 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {isSubmitSuccessful && (
        <p
          className="text-sm font-medium text-teal-700"
          role="status"
          aria-live="polite"
        >
          Merci. Votre demande a bien ete envoyee.
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block space-y-1.5 text-sm font-medium text-slate-800">
      <span>{label}</span>
      {children}
      {error && <span className="text-xs text-rose-600">{error}</span>}
    </label>
  );
}
