<div align="center">

[English](README.md) · [中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [Español](README.es.md) · **Français** · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md)

</div>

# SayBetter

> Dites ce que vous pensez, sans blesser.

**SayBetter** est un assistant de communication open source qui reformule les messages difficiles en expressions claires, bienveillantes et efficaces.

## Exemple

```
Entrée : Pourquoi tu es encore en retard ?

Sortie :
  ✅ Doux :    Est-ce qu'on peut finaliser ça aujourd'hui ? J'ai besoin du résultat pour planifier la suite.
  ✅ Ferme :   Ça doit être finalisé aujourd'hui, sinon ça impacte le planning.
               Merci de me donner une réponse claire avant la fin de journée.
  ✅ Diplomate : Je sais que tu as beaucoup à faire, mais ce résultat est crucial pour la suite.
                Est-ce qu'on peut s'aligner sur une conclusion aujourd'hui ?
  ❌ À éviter : "T'es toujours en retard" / "C'est toujours la même chose."
```

## Pourquoi SayBetter ?

Beaucoup de gens ne manquent pas d'idées — ils manquent de mots. SayBetter vous aide à vous exprimer plus clairement quand ça compte : refuser, relancer, s'excuser, poser des limites, insister.

## Fonctionnalités

- Reformule les messages difficiles en 3 à 5 meilleures versions
- Choisissez la relation, l'objectif et le ton
- Bibliothèque de 12 scénarios (ouverte aux contributions)
- Expressions « déconseillées » avec explications
- Cartes partageables (téléchargement PNG)
- 20 exemples concrets
- Compatible OpenAI (DeepSeek, Kimi, Ollama, etc.)
- 10 langues prises en charge

## Scénarios

| Scénario | Description |
|----------|-------------|
| ✋ Refus | Refuser avec chaleur et clarté |
| ⏰ Relance | Faire avancer les choses sans offenser |
| 🙏 Excuses | Des excuses sincères, sans s'humilier |
| 💬 Insatisfaction | Exprimer sa frustration sans se battre |
| 🚧 Limites | Exprimer clairement ses limites |
| 👔 Parler à son manager | Communication professionnelle ascendante |
| 🤝 Parler à ses collègues | Communication amicale et efficace |
| 💕 Relation amoureuse | Sentiments et besoins dans le couple |
| 🏠 Parler à ses parents | Expliquer des choses difficiles à ses parents |
| 💰 Argent | Conversations gênantes autour de l'argent |
| 📞 Réclamations | Des réclamations efficaces qui obtiennent des résultats |
| 📋 Salaire et démission | Communication aux moments clés de carrière |

## Démarrage rapide

```bash
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter
pnpm install
cp .env.example .env
pnpm dev
```

## Confidentialité

- Vos entrées ne sont jamais stockées sur nos serveurs
- En auto-hébergement, toutes les requêtes utilisent votre propre configuration

## Licence

MIT
