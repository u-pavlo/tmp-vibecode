# 🛡️ Elastic Curve — Multichain Security & Formal Verification Labs

> **Interactive Art Direction & Platform Showcase** for a Tier-1 Web3 / Blockchain Security and Smart Contract Audit Company.

![Elastic Curve Showcase](https://img.shields.io/badge/Security_Grade-Institutional-00E5FF?style=for-the-badge)
![Ecosystems](https://img.shields.io/badge/Chains-EVM_·_SVM_·_MOVE_·_COSMOS-00FF66?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-React_18_·_Vite_·_Tailwind-8B5CF6?style=for-the-badge)

---

## ⚡ Quick Start (Демо за 2 команды)

Для запуска демо-версии достаточно двух стандартных команд (поддерживаются `pnpm`, `npm`, `yarn`, `bun`):

```bash
# 1. Установка зависимостей
pnpm install
# или: npm install

# 2. Запуск локального сервера
pnpm dev
# или: npm run dev
```

После этого откройте в браузере: **`http://localhost:5173/`**

---

## 🎨 4 Арт-дирекшна в одном проекте (Interactive Switcher)

В самом верху страницы доступен **Concept Switcher**, позволяющий в 1 клик переключать визуальный язык для демонстрации:

### 🏛️ Концепция А: Institutional / Cyber-Lab
* **Референсы:** *OpenZeppelin, Trail of Bits, CertiK Institutional*.
* **Характер:** Швейцарская строгость, хирургическая чистота, прецизионные координатные сетки, глубокий сланцевый обсидиан (`#070A12`) и холодный титан с акцентами электрического циана.
* **Функционал:** Интерактивный математический чертеж (blueprint) эллиптической кривой Вейерштрасса $y^2 = x^3 + ax + b \pmod p$, 5-этапный регламент аудита, публичный реестр верифицированных протоколов и корпоративная форма заявки.

### 💻 Концепция Б: White-Hat Elite / Terminal Punk
* **Референсы:** *Zellic, Paradigm Research, OtterSec*.
* **Характер:** Наступательная безопасность (Offensive Security), реверс-инжиниринг байткода, абсолютный черный фон (`#020406`), терминальный фосфорный зеленый (`#00FF66`), CRT-сканлайны и моноширинная эстетика.
* **Функционал:** Живой симулятор фаззинга атак (EVM Reentrancy, SVM CPI Hijack, Oracle Manipulation), интерактивный Diff-Viewer уязвимостей (`Exploit PoC` vs `Elastic Curve Fix`), калькулятор скоупа и реестр раскрытых CVE.

### 🔮 Концепция В: Neo-Tech / Abstract Cryptography
* **Референсы:** *EigenLayer, Celestia, Aztec, Mina Protocol*.
* **Характер:** Будущее ZK-доказательств и модульных блокчейнов. Космический глубокий фиолетовый (`#070410`), матовое стекло (*glassmorphism*), неоновые голографические градиенты.
* **Функционал:** Процедурная 3D-волна полиномиальных обязательств (*KZG on BN254*), интерактивный симулятор проверки ZK-схем, безопасность модульного слоя Data Availability и рестейкинга.

### 🚀 Концепция D: Hyper-3D / Kinetic Dimension («Максимальный 3D-фарш»)
* **Референсы:** *Awwwards Site of the Year, Apple Pro, Monopo, Active Theory*.
* **Характер:** Ультра-современный хай-тек без перегруза крипто-сленгом. Массивный WebGL 3D-движок на Three.js, кинематографический объемный свет, плавающее космическое звездное поле из 1,800+ частиц.
* **Функционал:**
  * **Elastic Hyper-Core 3D:** интерактивная кинетическая 3D-скульптура с инерцией камеры за курсором мыши, переключателями геометрий (*Torus Knot*, *Quantum Core*, *Moebius Ribbon*, *Star Swarm*) и материалов (*Liquid Chrome*, *Holo Wireframe*, *Iridescent Glass*).
  * **Кнопка `TRIGGER_SHOCKWAVE`:** физическая ударная взрывная волна света с процедурным звуком деформации пространства.
  * **3D Tilt Parallax карточки:** физический 3D-наклон карточек по осям X/Y с динамическим хроматическим бликом (*specular glare*).
  * **Spatial Web Audio:** процедурный генератор звука на чистом Web Audio API с кнопкой `[SPATIAL AUDIO: ON/OFF]`.
  * **Spatial System Scanner:** интерактивный 3D-диагностический консольный сканер архитектурных кластеров.

---

## 🚀 Как выгрузить на свой GitHub

Чтобы опубликовать этот репозиторий на GitHub, выполните следующие команды:

```bash
# 1. Создайте новый пустой репозиторий на GitHub (например, elastic-curve)
# 2. В папке проекта выполните привязку и пуш:
git remote add origin https://github.com/<ВАШ_АККАУНТ>/elastic-curve.git
git branch -M main
git push -u origin main
```

---

## 🛠️ Стек технологий

* **Фреймворк:** React 18, TypeScript, Vite
* **Стилизация:** Tailwind CSS (кастомные дизайн-токены: Void, Phosphor, Cyber Cyan, Alert)
* **Интерактивная графика:** HTML5 Canvas (процедурные математические кривые и 3D-поверхности полиномов в 60 FPS)
* **Иконки:** Lucide React
* **Шрифты:** JetBrains Mono, Inter, Space Grotesk

---

## 📁 Структура проекта

```
art_direction/
├── src/
│   ├── components/
│   │   ├── ConceptSwitcher.tsx        # Верхняя панель переключения стилей A/B/C
│   │   ├── InteractiveCurveCanvas.tsx # Интерактивная эллиптическая кривая (Canvas)
│   │   ├── InteractiveZkWaveCanvas.tsx# 3D ZK полиномиальная волна (Canvas)
│   │   ├── TerminalHero.tsx           # Консольный фаззер с логами
│   │   ├── MultichainMatrix.tsx       # Матрица атак EVM/SVM/Move/Cosmos
│   │   ├── AuditDiffViewer.tsx        # Инспектор патчей уязвимостей
│   │   ├── AuditLedger.tsx            # База публичных отчетов с фильтрами
│   │   ├── ScopeEstimator.tsx         # Калькулятор скоупа и сроков
│   │   ├── HallOfFame.tsx             # Реестр CVE и раскрытых уязвимостей
│   │   └── AuditRequestModal.tsx      # Защищенная форма заявки на аудит
│   ├── concepts/
│   │   ├── ConceptA.tsx               # Страница Концепции А (Institutional)
│   │   ├── ConceptB.tsx               # Страница Концепции Б (Terminal Punk)
│   │   └── ConceptC.tsx               # Страница Концепции В (Neo-Tech)
│   ├── App.tsx                        # Корневой компонент
│   └── index.css                      # Глобальные стили, сканлайны и сетка
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📜 Лицензия
MIT
