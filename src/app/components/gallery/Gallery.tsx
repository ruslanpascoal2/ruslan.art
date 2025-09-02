import Robo from "../../../../public/robozinha.jpg";
import Untitled from "../../../../public/untitled.jpg";

const fotos = [
  { src: Robo.src, alt: "Robozinha" },
  { src: Untitled.src, alt: "Sem título" },
];

export default function Gallery() {
  return (
    <div className="flex flex-col">
      {fotos.map((foto, index) => (
        <div
          key={index}
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${foto.src})` }}
          aria-label={foto.alt}
        />
      ))}
    </div>
  );
}
