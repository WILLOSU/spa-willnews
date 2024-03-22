export function TextLimit({ text, limit }) {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p>{textLimited}</p>;
}


// clique bait, apresenta parte da notícia e se o usuário precisar ver o restante da notícia
// precisa logar