@echo off
setlocal
cd /d "%~dp0"
set "PORTFOLIO_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "PORTFOLIO_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
"%PORTFOLIO_NODE%" --version >nul 2>nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale Node.js 20 ou superior e tente novamente.
  pause
  exit /b 1
)
if not exist "node_modules\next\dist\bin\next" (
  echo As dependencias nao estao instaladas. Execute npm install nesta pasta.
  pause
  exit /b 1
)
set "NEXT_TELEMETRY_DISABLED=1"
echo Portfolio em http://localhost:3000
echo Mantenha esta janela aberta. Pressione Ctrl+C para encerrar.
"%PORTFOLIO_NODE%" "node_modules\next\dist\bin\next" dev --hostname 127.0.0.1 --port 3000
