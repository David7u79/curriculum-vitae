@echo off
cd /d "%~dp0"

where pnpm >nul 2>nul
if errorlevel 1 (
  echo ERROR: pnpm no esta instalado o no esta en el PATH.
  echo Instalalo con: npm install -g pnpm
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias...
  call pnpm install
  if errorlevel 1 (
    echo ERROR: fallo pnpm install.
    pause
    exit /b 1
  )
)

call pnpm dev
if errorlevel 1 (
  echo ERROR: el servidor de desarrollo termino con error.
  pause
)
