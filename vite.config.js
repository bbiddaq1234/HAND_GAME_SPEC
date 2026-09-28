import { defineConfig } from 'vite';

// base: './' — Vercel(루트 주소)과 GitHub Pages(하위 주소) 어디에 올려도 파일 경로가 맞게 한다
// server.open — npm run dev를 실행하면 게임 창(브라우저)이 자동으로 열린다
export default defineConfig({ base: './', server: { open: true } });
