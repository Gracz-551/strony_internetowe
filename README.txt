NASZE HISTORIE — URUCHOMIENIE WSPÓLNEJ STRONY

Strona w index.html korzysta z Supabase, żeby wpisy były wspólne dla wszystkich odwiedzających. Zanim zacznie działać, potrzebujesz projektu Supabase i hostingu statycznej strony.

1. Utwórz projekt w Supabase (supabase.com).
2. W projekcie otwórz SQL Editor i wykonaj całą zawartość pliku supabase.sql.
3. Otwórz Project Settings → API. Skopiuj Project URL oraz klucz anon/publishable.
4. W index.html zastąp:
   WSTAW_SUPABASE_PROJECT_URL — adresem Project URL, np. https://xxxx.supabase.co
   WSTAW_SUPABASE_ANON_KEY — kluczem anon/publishable.
   Klucz anon/publishable jest przeznaczony do użycia w przeglądarce; nigdy nie wstawiaj klucza service_role/secret.
5. Opublikuj index.html na hostingu statycznym (np. Netlify, Vercel lub GitHub Pages). Po publikacji udostępnij odbiorcom otrzymany publiczny adres.

Wpisy są publiczne, a każdy odwiedzający może je dodawać. Celowo nie ma funkcji usuwania, bo anonimowy odwiedzający nie powinien móc kasować wpisów innych osób. Publiczne formularze mogą wymagać moderacji lub dodatkowych zabezpieczeń, jeśli strona zacznie zbierać spam.
