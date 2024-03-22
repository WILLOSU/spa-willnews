import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
      .transform((name) =>
        name // william de sousa mota => ["william", "de", "sousa", "mota"]
          .trim()
          .split(" ") //separa pelos os espaços
          .map((word) => word[0].toUpperCase() + word.slice(1)) // faz um map e coloca no array
          .join(" ") // junto tudo novamente
      ),
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    password: z.string().min(6, "A senha precisa ter no minímo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha precisa ter no minímo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

  // data é objeto que está sendo enviado
  // validação é feita pelo zodi usando .refine, informando o path que deu erro!!

  