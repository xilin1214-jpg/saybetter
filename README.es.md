<div align="center">

[English](README.md) · [中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · **Español** · [Français](README.fr.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md)

</div>

# SayBetter

> Di lo que quieres decir, sin herir.

**SayBetter** es un asistente de comunicación de código abierto que reescribe mensajes difíciles en expresiones claras, amables y efectivas.

## Ejemplo

```
Entrada: ¿Por qué llegas tan tarde otra vez?

Salida:
  ✅ Suave:    ¿Podemos finalizar esto hoy? Necesito el resultado para planificar mis próximos pasos.
  ✅ Firme:    Esto necesita una conclusión clara hoy. Por favor, dame una respuesta antes del fin del día.
  ✅ Empático: Sé que tienes mucho que hacer, pero este resultado es clave para lo que viene.
               ¿Podemos alinearnos en una conclusión hoy?
  ❌ Evita:   "¿Por qué siempre llegas tarde?" / "Otra vez lo mismo."
```

## ¿Por qué SayBetter?

Mucha gente no carece de ideas — carecen de las palabras. SayBetter te ayuda a expresarte con claridad cuando importa: rechazar, hacer seguimiento, disculparte, establecer límites, insistir.

## Características

- Reescribe mensajes difíciles en 3-5 mejores versiones
- Elige relación, objetivo y tono
- Biblioteca de 12 escenarios basados en prompts (abierta a contribuciones)
- Expresiones "no recomendadas" con explicaciones
- Tarjetas compartibles (descarga PNG)
- 20 ejemplos reales
- Compatible con OpenAI (DeepSeek, Kimi, Ollama, etc.)
- 10 idiomas soportados

## Escenarios

| Escenario | Descripción |
|-----------|-------------|
| ✋ Rechazo | Rechazar peticiones con calidez y claridad |
| ⏰ Seguimiento | Avanzar sin ofender |
| 🙏 Disculpa | Disculpas sinceras, sin humillarse |
| 💬 Insatisfacción | Frustración sin pelea |
| 🚧 Límites | Expresar tus límites claramente |
| 👔 Hablar con tu jefe | Comunicación profesional ascendente |
| 🤝 Hablar con colegas | Comunicación eficiente y amigable |
| 💕 Relación de pareja | Sentimientos y necesidades románticas |
| 🏠 Hablar con tus padres | Explicar cosas difíciles a tus padres |
| 💰 Dinero | Conversaciones incómodas sobre dinero |
| 📞 Reclamos | Reclamos efectivos que obtienen resultados |
| 📋 Salario y renuncia | Comunicación en momentos clave de carrera |

## Inicio rápido

```bash
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter
pnpm install
cp .env.example .env
pnpm dev
```

## Privacidad

- Tus entradas nunca se almacenan en nuestros servidores
- Si lo alojas tú, todas las peticiones usan tu propia configuración

## Licencia

MIT
