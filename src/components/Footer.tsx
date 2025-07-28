// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-400 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marcelo Apolinário. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Desenvolvido com Next.js e Tailwind CSS
        </p>
      </div>
    </footer>
  );
}