import { InputSpace } from "./InputStyled";

export function Input({ type, placeholder, name, register }) { //facilitando
  return (
    <InputSpace type={type} placeholder={placeholder} {...register(name)} />
  );
}
