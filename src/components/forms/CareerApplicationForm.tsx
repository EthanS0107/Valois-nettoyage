"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const careerSchema = z.object({
  fullName: z.string().min(2, "Le nom est requis."),
  email: z.email("Adresse email invalide."),
  phone: z
    .string()
    .min(10, "Numero de telephone trop court.")
    .regex(/^[+0-9\s.-]+$/, "Format de telephone invalide."),
  jobId: z.string().min(2, "Selectionnez un poste."),
  message: z
    .string()
    .min(25, "Merci de preciser votre profil en au moins 25 caracteres."),
  cvUrl: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\//.test(value), {
      message: "Ajoutez un lien valide (https://...) ou laissez vide.",
    }),
});

type CareerFormData = z.infer<typeof careerSchema>;

const defaultValues: CareerFormData = {
  fullName: "",
  email: "",
  phone: "",
  jobId: "",
  message: "",
  cvUrl: "",
};

type CareerApplicationFormProps = {
  jobs: Array<{ id: string; title: string }>;
};

export function CareerApplicationForm({ jobs }: CareerApplicationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: CareerFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Career application", data);
    reset();
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulaire de candidature"
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

        <Field label="Poste vise" error={errors.jobId?.message}>
          <select
            {...register("jobId")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
            defaultValue=""
          >
            <option value="" disabled>
              Selectionnez
            </option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Lien CV (optionnel)" error={errors.cvUrl?.message}>
        <input
          {...register("cvUrl")}
          type="url"
          placeholder="https://"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
          autoComplete="url"
        />
      </Field>

      <Field label="Votre message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600"
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
      </button>

      {isSubmitSuccessful && (
        <p
          className="text-sm font-medium text-teal-700"
          role="status"
          aria-live="polite"
        >
          Merci, votre candidature a bien ete envoyee.
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
