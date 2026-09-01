import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('app/globals.css', """@import "tailwindcss";

@theme {
  /* Colores Primitivos */
  --color-violeta: #834296;
  --color-lila-claro: #D4B6E3;
  --color-navy: #001837;
  --color-azul-medio: #3C4C92;
  --color-cyan: #4DC2DA;
  --color-celeste-palido: #CAFFFF;
  --color-amarillo: #FFD203;
  --color-amarillo-oscuro: #EC9519;
  --color-crema: #FFE2C0;
  --color-blanco: #FFFFFF;
  --color-gris-disabled: #A3ABB8;
  --color-verde: #16A34A;
  --color-rojo: #DC2626;

  /* Aliases para YYCL */
  --color-yycl-navy: #001837;
  --color-yycl-yellow: #FFD203;
  --color-yycl-purple: #834296;
  --color-yycl-cyan: #4DC2DA;
  --color-yycl-blue-medium: #3C4C92;
  --color-yycl-amber: #EC9519;
  --color-yycl-cream: #FFE2C0;

  /* Semánticos */
  --color-bg-surface: #FFFFFF;
  --color-bg-dark-card: #834296;
  --color-text-default: #001837;
  --color-text-inverse: #FFFFFF;
  --color-text-muted: #3C4C92;
  --color-border-default: rgba(0, 0, 0, 0.10);
  --color-state-disabled: #A3ABB8;
  --color-state-success: #16A34A;
  --color-state-error: #DC2626;
  --color-accent-kids: #4DC2DA;
  --color-accent-empresas: #001837;
  --color-accent-conversacion: #FFD203;
}

:root {
  --background: #FFFFFF;
  --foreground: #001837;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-nunito), sans-serif;
  font-size: 16px;
  line-height: 24px;
}

/* Gradiente de marca v2 (135deg, #EC9519 -> #834296) */
.bg-gradient-brand-v2 {
  background: linear-gradient(135deg, #EC9519, #834296);
}

/* Tipografía Montserrat & Nunito */
.font-display-hero {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 800;
  font-size: 56px;
  line-height: 62px;
  letter-spacing: -0.02em;
}

.font-heading-h1 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.015em;
}

.font-heading-h2 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}

.font-heading-h3 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}

.font-heading-h4 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.font-label-bold {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.font-label-button {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.font-label-large {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}

.font-label-regular {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.font-body-lead {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}

.font-body-large {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}

.font-body-regular {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.font-body-small {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.font-body-bold {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.font-link {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
}

.font-fine-print {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
""")

print("Clean globals.css written")
