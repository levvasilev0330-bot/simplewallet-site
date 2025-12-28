# Simple Wallet Landing Page

Одностраничный landing page для мобильного приложения Simple Wallet.

## Структура проекта

```
.
├── index.html      # HTML структура
├── styles.css      # Стили (mobile-first)
├── script.js       # JavaScript функциональность
└── README.md       # Документация
```

## Структура блоков страницы

1. **Header (верхняя панель)**
   - Логотип: "Simple Wallet"
   - Навигация: "Возможности", "Как работает", "Скачать"
   - Кнопка CTA: "Скачать APK"

2. **Hero-блок (первый экран)**
   - Заголовок: "Все скидочные карты — в одном месте"
   - Подзаголовок с описанием
   - Primary CTA: "Скачать APK для Android"
   - Secondary CTA: "Посмотреть возможности"
   - Мокап смартфона с картами

3. **Блок "Возможности" (4 карточки)**
   - 1 клик до карты
   - QR и штрихкоды
   - Фото карты
   - Порядок и поиск

4. **Блок "Как это работает" (3 шага)**
   - Шаг 1: Добавь карту
   - Шаг 2: Выбери формат
   - Шаг 3: Покажи на кассе

5. **Блок доверия**
   - Главный текст: "Ничего лишнего — только карты и быстрый доступ."
   - Три пункта доверия

6. **Секция "Скачать"**
   - Заголовок и описание
   - Кнопка скачивания APK
   - Информация о версии
   - Инструкция по установке

7. **Footer**
   - Копирайт и ссылки

## Тексты блоков

### Hero
- **Заголовок:** "Все скидочные карты — в одном месте"
- **Подзаголовок:** "Simple Wallet — простой кошелёк для скидочных карт. Генерируй QR/штрихкоды или прикрепляй фото карты и открывай нужную карту в 1 клик."

### Возможности
1. **1 клик до карты** — Быстрый доступ без лишних экранов
2. **QR и штрихкоды** — Генерация и отображение на экране
3. **Фото карты** — Прикрепляй изображение, если нет кода
4. **Порядок и поиск** — Сортировка и поиск по названию

### Как это работает
1. **Добавь карту** — Введи данные или отсканируй код
2. **Выбери формат** — QR / штрихкод / фото
3. **Покажи на кассе** — Готово

### Доверие
- **Главный текст:** "Ничего лишнего — только карты и быстрый доступ."
- **Пункты:** Без сложных настроек | Удобно одной рукой | Минималистичный интерфейс

## Дизайн-система

### Цвета
- **Primary:** #2563eb (синий)
- **Text:** #1f2937 (тёмно-серый)
- **Text Light:** #6b7280 (светло-серый)
- **Background:** #ffffff (белый)
- **Background Light:** #f9fafb (светло-серый)

### Типографика
- **Шрифт:** Inter (Google Fonts)
- **Заголовки:** 700 (Bold)
- **Текст:** 400 (Regular)
- **Кнопки:** 600 (SemiBold)

### Сетка
- **Базовый unit:** 8px
- **Border radius:** 12px (карточки), 16px (большие карточки)

### Компоненты

#### Кнопки
- **Primary:** Синий фон, белый текст, hover эффект
- **Secondary:** Прозрачный фон, border, hover эффект
- **Размеры:** Small (маленькая), Regular (обычная), Large (большая)

#### Карточки
- Белый фон (в dark mode — тёмный)
- Border radius: 12-16px
- Padding: 40px (5 × 8px)
- Hover эффект: поднятие и тень

#### Секции
- Отступы: 80px сверху/снизу (10 × 8px)
- Максимальная ширина: 1200px
- Padding контейнера: 24px (3 × 8px) на мобильных, 48px (6 × 8px) на desktop

## Адаптивность

### Mobile-first подход
1. **Mobile (< 768px):** Одноколоночная сетка, скрытая навигация
2. **Tablet (≥ 768px):** Двухколоночная сетка для features, горизонтальные шаги
3. **Desktop (≥ 1024px):** Четырёхколоночная сетка для features, большие заголовки

## Функциональность

- ✅ Плавная прокрутка по якорным ссылкам
- ✅ Dark mode с сохранением в localStorage
- ✅ Мобильное меню (на мобильных устройствах)
- ✅ Адаптивный дизайн
- ✅ Переключение темы через кнопку в правом нижнем углу

## Деплой на GitHub Pages

Сайт публикуется на GitHub Pages, а APK файл скачивается из GitHub Releases (не хранится в репозитории).

### Шаг 1: Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com) и создайте новый репозиторий
2. Назовите репозиторий (например, `simplewallet-site`)
3. Выберите **Public** (для бесплатного GitHub Pages)
4. **Не** добавляйте README, .gitignore или лицензию (они уже есть в проекте)

### Шаг 2: Инициализация Git и первый коммит

```bash
# Инициализация git репозитория
git init

# Добавление всех файлов (APK будет исключён через .gitignore)
git add .

# Первый коммит
git commit -m "Initial commit: SimpleWallet landing page"

# Добавление remote репозитория (замените <OWNER> и <REPO> на ваши значения)
git remote add origin https://github.com/<OWNER>/<REPO>.git

# Переименование ветки в main (если нужно)
git branch -M main

# Пуш в GitHub
git push -u origin main
```

### Шаг 3: Настройка GitHub Pages

1. Перейдите в **Settings** вашего репозитория на GitHub
2. В левом меню выберите **Pages**
3. В разделе **Source** выберите:
   - **Source**: `GitHub Actions`
4. Сохраните изменения

GitHub Actions workflow (`.github/workflows/deploy.yml`) автоматически задеплоит сайт при каждом push в ветку `main`.

### Шаг 4: Настройка APK URL

1. Откройте файл `script.js`
2. Найдите строку с `APK_URL`:
   ```javascript
   const APK_URL = "https://github.com/<OWNER>/<REPO>/releases/latest/download/SimpleWallet-28122025.apk";
   ```
3. Замените `<OWNER>` и `<REPO>` на реальные значения:
   - `<OWNER>` — ваш GitHub username или название организации
   - `<REPO>` — название репозитория
   
   Например:
   ```javascript
   const APK_URL = "https://github.com/username/simplewallet-site/releases/latest/download/SimpleWallet-28122025.apk";
   ```
4. Закоммитьте и запушьте изменения:
   ```bash
   git add script.js
   git commit -m "Update APK URL with repository path"
   git push
   ```

### Шаг 5: Создание Release и загрузка APK

1. Перейдите в раздел **Releases** вашего репозитория на GitHub
2. Нажмите **Create a new release**
3. Заполните форму:
   - **Tag version**: `v1.0.0` (или другая версия)
   - **Release title**: `SimpleWallet v1.0.0` (или другое название)
   - **Description**: Описание релиза (опционально)
4. В разделе **Attach binaries** нажмите **Choose your files**
5. Загрузите файл `SimpleWallet-28122025.apk`
   - ⚠️ **ВАЖНО**: Имя файла должно быть точно `SimpleWallet-28122025.apk` (без пробелов, с дефисами)
   - Если ваш файл называется иначе, переименуйте его перед загрузкой
6. Нажмите **Publish release**

### Шаг 6: Проверка деплоя

После выполнения всех шагов:

- **Сайт будет доступен по адресу:**
  ```
  https://<OWNER>.github.io/<REPO>/
  ```
  Например: `https://username.github.io/simplewallet-site/`

- **APK будет скачиваться по адресу:**
  ```
  https://github.com/<OWNER>/<REPO>/releases/latest/download/SimpleWallet-28122025.apk
  ```
  Например: `https://github.com/username/simplewallet-site/releases/latest/download/SimpleWallet-28122025.apk`

### Локальная разработка

Для локальной разработки используйте HTTP сервер:

**Python 3:**
```bash
python3 -m http.server 8000
```
Откройте: `http://localhost:8000`

**Node.js:**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

⚠️ **Примечание**: При локальной разработке APK будет пытаться скачаться из GitHub Releases. Убедитесь, что Release создан и APK загружен.

## Настройка

### Обновление APK файла

1. Создайте новый Release на GitHub
2. Загрузите новый APK файл с именем `SimpleWallet-28122025.apk` (или обновите имя в `script.js`)
3. Если имя файла изменилось, обновите `APK_URL` в `script.js`:
   ```javascript
   const APK_URL = "https://github.com/<OWNER>/<REPO>/releases/latest/download/NewFileName.apk";
   ```

## Проверка и отладка

### Как проверить, что всё работает

1. **Проверка локального состояния:**
   ```bash
   git status          # Должно быть clean (нет незакоммиченных изменений)
   git remote -v       # Должен указывать на правильный репозиторий
   git branch --show-current  # Должна быть ветка main
   ```

2. **Проверка GitHub Pages:**
   - Откройте: `https://levvasilev0330-bot.github.io/simplewallet-site/`
   - Сайт должен загружаться без ошибок
   - Все секции должны отображаться корректно

3. **Проверка скачивания APK:**
   - Нажмите любую кнопку "Скачать APK" на сайте
   - Должно начаться скачивание файла `SimpleWallet-28122025.apk`
   - Прямая ссылка: `https://github.com/levvasilev0330-bot/simplewallet-site/releases/latest/download/SimpleWallet-28122025.apk`

4. **Проверка GitHub Actions:**
   - Перейдите в репозиторий → вкладка **Actions**
   - Должен быть зелёный статус последнего workflow "Deploy to GitHub Pages"
   - Если workflow красный — проверьте логи на ошибки

### Как отладить проблемы

**Проблема: Сайт не доступен (404)**
- Проверьте, что GitHub Pages включён: Settings → Pages → Source: `GitHub Actions`
- Проверьте, что workflow успешно выполнился (зелёный статус)
- Убедитесь, что `index.html` находится в корне репозитория

**Проблема: APK не скачивается**
- Проверьте, что Release создан: https://github.com/levvasilev0330-bot/simplewallet-site/releases
- Убедитесь, что APK файл загружен как asset с именем `SimpleWallet-28122025.apk`
- Проверьте `APK_URL` в `script.js` — должен быть формат `releases/latest/download/...`
- Проверьте, что в HTML кнопках есть fallback `href` (не `#`)

**Проблема: Workflow не запускается**
- Проверьте, что файл `.github/workflows/deploy.yml` существует
- Убедитесь, что вы пушите в ветку `main` или `master`
- Проверьте, что в Settings → Actions включены workflows

**Проверка через GitHub CLI (если установлен):**
```bash
gh repo view                    # Информация о репозитории
gh run list --limit 5           # Последние 5 запусков workflow
gh release list                 # Список релизов
```

### Изменение цвета акцента
В `styles.css` измените переменную:
```css
:root {
    --color-primary: #2563eb; /* Измените на нужный цвет */
}
```

### Обновление версии
В `index.html` найдите блок `.download-version` и обновите информацию:
```html
<p class="download-version">Версия: 1.0.0 • Размер: 15 MB</p>
```

## Рекомендации для Figma

### Компоненты для создания
1. **Button/Primary** — Синяя кнопка с hover состояниями
2. **Button/Secondary** — Прозрачная кнопка с border
3. **Card/Feature** — Карточка возможности с иконкой
4. **Card/Step** — Карточка шага с номером
5. **Phone Mockup** — Мокап смартфона
6. **Section** — Контейнер секции с padding

### Стили
- **Text Styles:** Title/H1, Title/H2, Body/Large, Body/Regular, Body/Small
- **Color Styles:** Primary, Text, Text Light, Background, Background Light, Border
- **Effects:** Card Shadow, Button Hover Shadow

### Auto Layout
- Используйте Auto Layout для всех компонентов
- Padding: 24px или 40px (кратно 8px)
- Gap: 16px, 24px, 32px (кратно 8px)

