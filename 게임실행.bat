@echo off
rem Double-click to start the game server and open the game window.
cd /d "%~dp0"
if not exist node_modules call npm install
call npm run dev
